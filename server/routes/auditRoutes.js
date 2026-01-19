import express from "express";
import axios from "axios";
import { Audit } from "../config/db.js";
import { generateJSON } from "../utils/gemini.js";

const router = express.Router();

async function extractContent(url) {
  const res = await axios.post(
    "https://api.firecrawl.dev/v1/scrape",
    { url },
    {
      headers: {
        Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data?.markdown || "";
}

router.post("/audit", async (req, res) => {
  try {
    const { userId, contentType, fileUrl } = req.body;

    const content = (await extractContent(fileUrl)).slice(0, 3500);

    const analysis = await generateJSON(`
Return JSON audit:
{
  "readability": { "score": number, "issues": [], "recommendations": [] },
  "seo": { "score": number, "issues": [], "recommendations": [] },
  "structure": { "score": number, "issues": [], "recommendations": [] },
  "humanization": { "score": number, "issues": [], "recommendations": [] },
  "aeo": { "score": number, "issues": [], "recommendations": [] },
  "summary": string
}

CONTENT:
${content}
`);

    const audit = await Audit.create({
      userId,
      contentType,
      fileUrl,
      result_json: analysis,
      created_at: new Date()
    });

    res.json({ message: "Audit completed", audit });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

