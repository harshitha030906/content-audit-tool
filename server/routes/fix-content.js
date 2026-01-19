import express from "express";
import { generateJSON } from "../utils/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { originalContent, targetKeywords } = req.body;

    const result = await generateJSON(`
Improve the content for SEO, AEO, and readability.
Use keywords naturally: ${targetKeywords?.join(", ")}

Return JSON:
{
  "improvedContent": string,
  "metrics": {
    "seo": { "score": number },
    "aeo": { "score": number },
    "human": { "score": number },
    "readability": { "score": number },
    "structure": { "score": number }
  }
}

CONTENT:
${originalContent.slice(0, 3500)}
`);

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

