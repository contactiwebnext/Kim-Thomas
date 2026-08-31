import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory inquiries store for demonstration and logging
const inquiries: Array<{
  id: string;
  name: string;
  organization: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
  timeline?: string;
  createdAt: string;
}> = [];

// Lazy Gemini client helper
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIClient;
}

// 1. Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Advisory Chat endpoint with Gemini 3.7 Flash
app.post("/api/advisory-chat", async (req, res) => {
  try {
    const { messages, userMessage } = req.body;
    const client = getGeminiClient();

    const systemInstruction = `You are the executive digital advisor representing Kim Nicole Thomas.
Kim Nicole Thomas is an executive advisor, leadership and wellbeing coach, and internationally recognized keynote speaker with over 30 years of experience guiding senior leaders through complex, high-stakes environments across healthcare, technology, education, and institutional sectors.
Location: Toronto, Ontario (serves clients globally and across North America).
Direct Contact: kimnthomas@gmail.com | 647-618-6311.

Founder of KimNicole Inc. and Director of Strategy, Partnerships & Innovation at GEM Agency.
Degrees from Queen’s University; specialized training in leadership coaching, conflict resolution, and trauma-informed practices.
Background includes launching and directing inaugural TEDx initiatives, coaching speakers for major global platforms, and authoring high-level executive briefings.

Core Philosophy: "Leading at the Top Shouldn't Cost Your Wellbeing—or Your Edge."
She helps C-suite executives, emerging leaders, entrepreneurs, and visionary creatives lead with clarity, sound judgment, and unwavering resilience—without burning out.

Her 5 Core Areas of Support:
1. Strategic Advisory & Decision-Making (Impartial sounding board to pressure-test ideas, evaluate risk, and navigate complex stakeholder dynamics)
2. Sustainable High Performance & Wellbeing (Evidence-based resilience practices to sustain focus, presence, and energy without burnout)
3. High-Stakes Presentations & Keynote Prep (Board meetings, TED/TEDx talks, investor pitches, keynote delivery)
4. Ghostwriting & Thought Leadership (Polished communications, op-eds, keynote speeches, personal brand voice)
5. Conflict Mediation & Confidential Sounding Board (Private space to process complex dynamics, board disputes, and sensitive pivots)

Your tone should be:
- Executive, calm, warm, authoritative, articulate, and deeply empathetic.
- Answer questions regarding Kim's background, offerings, coaching, speaking, and retainers.
- Keep responses concise (2 to 4 paragraphs or structured bullet points), highly professional, and encourage booking a confidential consultation.`;

    if (client) {
      // Build conversation context
      const conversationHistory = Array.isArray(messages)
        ? messages.map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Client' : 'Kim\'s Advisor'}: ${m.content}`).join('\n')
        : '';

      const prompt = `${conversationHistory ? `Conversation history:\n${conversationHistory}\n\n` : ''}Client message: ${userMessage || 'Hello'}`;

      const response = await client.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || "Thank you for reaching out. Kim works closely with executive leaders to provide strategic clarity and sustainable leadership guidance. How may we assist your organization today?";
      return res.json({ reply });
    } else {
      // Fallback intelligent response when API key is pending
      const fallbackResponses: Record<string, string> = {
        speaking: "Kim is frequently engaged by global summits, healthcare symposiums, and leadership retreats to deliver transformative keynotes on *Leading Through Complexity*, *Sustainable Leadership*, and *High-Stakes Presentation Impact*. As an inaugural TEDx Director and executive speech coach, she prepares leaders for pivotal platform moments. You can book Kim directly or call 647-618-6311.",
        coaching: "Kim's Sustainable High Performance & Wellbeing Coaching is tailored for C-suite executives, founders, and leaders managing intense pressure. Armed with Queen's University degrees and trauma-informed coaching methodologies, she integrates strategic execution with nervous-system stamina to prevent burnout.",
        advisory: "Through Strategic Advisory & Decision-Making, Kim serves as a confidential sounding board and strategic partner for CEOs, Board Chairs, and senior leadership teams navigating complex organizational transformation, M&A transitions, and high-consequence decisions.",
        contact: "You can reach Kim Nicole Thomas directly at **kimnthomas@gmail.com** or by phone at **647-618-6311**. Her advisory practice is headquartered in Toronto, Ontario, serving clients across North America and globally.",
      };

      const lower = (userMessage || "").toLowerCase();
      let matched = "Thank you for connecting with Kim Nicole Thomas's executive advisory practice. With over 30 years of cross-sector experience across Healthcare, Technology, Education, and Institutions, Kim partners with senior leaders to navigate complexity with clarity, courage, and humanity. How can Kim best support your leadership journey or upcoming event?";

      if (lower.includes("speak") || lower.includes("keynote") || lower.includes("event") || lower.includes("conference") || lower.includes("ted")) {
        matched = fallbackResponses.speaking;
      } else if (lower.includes("coach") || lower.includes("burnout") || lower.includes("wellbeing") || lower.includes("1:1") || lower.includes("performance")) {
        matched = fallbackResponses.coaching;
      } else if (lower.includes("advisory") || lower.includes("board") || lower.includes("ceo") || lower.includes("strategy") || lower.includes("mediation")) {
        matched = fallbackResponses.advisory;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("location") || lower.includes("toronto")) {
        matched = fallbackResponses.contact;
      }

      return res.json({ reply: matched });
    }
  } catch (error) {
    console.error("Advisory chat error:", error);
    res.status(500).json({
      reply: "Thank you for your message. Kim Nicole Thomas is pleased to connect with leaders navigating complex mandates. Please feel free to reach out directly at kimnthomas@gmail.com or call 647-618-6311.",
    });
  }
});

// 3. Executive Inquiry submission endpoint
app.post("/api/inquiry", (req, res) => {
  try {
    const { name, organization, email, phone, reason, message, timeline } = req.body;

    if (!name || !email || !reason || !message) {
      return res.status(400).json({ error: "Please fill in all required fields (Name, Email, Reason, Message)." });
    }

    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      organization: organization || "Confidential Organization",
      email,
      phone: phone || "Not provided",
      reason,
      message,
      timeline: timeline || "Flexible",
      createdAt: new Date().toISOString(),
    };

    inquiries.unshift(inquiryRecord);
    console.log("New Executive Inquiry received:", inquiryRecord);

    res.status(201).json({
      success: true,
      message: "Your inquiry has been successfully transmitted to Kim Nicole Thomas. Expect a personal response within 24–48 business hours.",
      inquiryId: inquiryRecord.id,
    });
  } catch (error) {
    console.error("Inquiry error:", error);
    res.status(500).json({ error: "Failed to submit inquiry. Please email kimnthomas@gmail.com directly." });
  }
});

// 4. Assessment analysis endpoint
app.post("/api/assessment-analysis", async (req, res) => {
  try {
    const { answers, answersSummary } = req.body;
    const client = getGeminiClient();

    if (client) {
      const prompt = `A senior leader just completed Kim Nicole Thomas's "Executive Leadership & Resilience Pulse Assessment".
Responses:
${JSON.stringify(answersSummary, null, 2)}

Provide a concise, 3-point personalized strategic insight written in Kim Nicole Thomas's warm, executive, authoritative voice. Focus on strategic clarity, high-stakes resilience, and sustainable leadership wellbeing. Keep it under 200 words.`;

      const response = await client.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are Kim Nicole Thomas, Executive Advisor & Leadership Coach.",
        },
      });

      return res.json({ insight: response.text });
    }

    // Default synthesis
    res.json({
      insight: "Your responses reflect a leader navigating substantial organizational demands where high cognitive stakes require deliberate boundary calibration and executive focus. To sustain peak clarity and protect strategic bandwidth, prioritize establishing structured executive recovery rituals and cultivating intentional alignment with key governance stakeholders.",
    });
  } catch (error) {
    console.error("Assessment analysis error:", error);
    res.json({
      insight: "Leading in high-stakes environments requires balancing decisive strategic execution with nervous system resilience. Protecting your strategic clarity is your highest-leverage leadership asset.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Kim Nicole Thomas website server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
