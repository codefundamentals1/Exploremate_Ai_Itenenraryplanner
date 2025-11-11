import { CohereClient } from "cohere-ai";
import { cp } from "fs";
import dotenv from "dotenv";
dotenv.config();

import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({ token: process.env.token });

async function generatePrediction(prompt, maxTokens) {
  const response = await cohere.chat({
    model: "command-a-03-2025",

    messages: [
      {
        role: "user",

        content: prompt,
      },
    ],
  });

  return response.message.content[0].text;

}

export { generatePrediction };
