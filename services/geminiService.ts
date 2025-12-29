// Use strictly recommended import format for GoogleGenAI
import {GoogleGenAI} from "@google/genai";

export const getBrandAssistantResponse = async (userMessage: string) => {
  // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are the Royal Pacific Brand Assistant. 
          Royal Pacific was founded in 1996. 
          Main Brands: 
          1. LodgingStar (Hospitality products).
          2. D.Cool (Advanced data center cooling tech like liquid/immersion cooling).
          3. YK Diamond (Premium lab-grown diamonds).
          Core Values: Reliability, Quality, Global Sourcing, and Innovation.
          Be professional, concise, and helpful. Focus on Royal Pacific's ability to bridge global manufacturing with local distribution needs.
        `,
        temperature: 0.7,
      },
    });
    // The simplest and most direct way to get the generated text content is by accessing the .text property.
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Royal Pacific network is currently busy. Please try again in a moment.";
  }
};