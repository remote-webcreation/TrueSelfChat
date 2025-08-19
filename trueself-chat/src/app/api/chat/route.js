import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
    });

    return NextResponse.json(completion);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
