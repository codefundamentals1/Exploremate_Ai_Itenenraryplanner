
import dotenv from "dotenv";
dotenv.config();
import { CohereClientV2 } from "cohere-ai";
const cohere = new CohereClientV2({ token: process.env.token });
async function gettext()  {
  const response = await cohere.chat({
    model: "command-a-03-2025",

    messages: [
      {

        role: "user",

        content: "give me an iteneary for 2 days for jaipurGive  iterinary for travelling to Delhi for starting date from 2 jan 2026 to end date  4 jan 2026 customise  with this preferences honeymoon trip add data of travelling with date , mode of travelling , also add some travelling tips look good",
      },
    ],
  });

  console.log(response.message.content[0].text);
}
gettext()