import OpenAI from "openai";
import { OpenAI_Key } from "./constants";

const openai = new OpenAI({
  apiKey: process.env[OpenAI_Key], // This is the default and can be omitted
});

export default openai;