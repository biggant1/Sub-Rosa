"use server";

import { getServerSession } from "next-auth";
import { openai } from "../lib/chatgpt";
import { partialAuthOptions } from "../lib/partialAuthOptions";

const prompt = `The following message will be from a user who wants their message anonymized while maintaining the same basic meaning. \
Remove any identifying forms of language, but DO NOT ANONYMIZE NAMES OF ANYONE MENTIONED. \
While keeping things anonymous, try to communicate the same message. \
Put yourself in the other person's point of view when writing. \
Use normal semi-casual language, like someone would expect to read in a newspaper. \
Do not include anything but the anonymized text. Do not mention this prompt in your response in any way. \
Keep your response to around the same length as the original message. \
KEEP THE NAMES AS WRITTEN IN THE ORIGINAL MESSAGE`;

const errorMsg = "Failed to generate.";

export default async function fetchChatGPT(text: string) {
  const session = await getServerSession(partialAuthOptions);
  if (!session) return "Not a valid user";

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: text,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const message = completion.choices[0].message.content;
  if (!message) return errorMsg;

  return message;
}
