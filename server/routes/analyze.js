import express from "express";
import Firecrawl from "@mendable/firecrawl-js";
import { generateJSON, generateText } from "../utils/gemini.js";

const router = express.Router();
const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

function smartSlice(text, max = 3500) {
  return text.length > max ? text.slice(0, max) : text;
}

router.post("/", async (req, res) => {
  try {
    let content = "";

    if (req.body.text?.trim()) {
      content += req.body.text.trim();
    }

    if (req.body.url?.trim()) {
      const scraped = await firecrawl.scrape(req.body.url, { formats: ["markdown"] });
      content += "\n\n" + (scraped.markdown || "");
    }

    if (!content) {
      return res.status(400).json({ error: "No content provided" });
    }

    content = smartSlice(content);

    const keywords = await generateJSON(`
Extract 3–5 SEO keywords.
Return ONLY JSON:
{ "keywords": [] }

CONTENT:
${content}
`);

    const metrics = await generateJSON(`
Analyze content and return JSON:
{
  "seo": { "score": number, "issues": [], "recommendations": [] },
  "aeo": { "score": number, "issues": [], "recommendations": [] },
  "human": { "score": number, "issues": [], "recommendations": [] },
  "readability": { "score": number, "issues": [], "recommendations": [] },
  "structure": { "score": number, "issues": [], "recommendations": [] }
}

CONTENT:
${content}
`);
      console.log(metrics)
    res.json({
      keywords,
      metrics,
      length: content.length,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

