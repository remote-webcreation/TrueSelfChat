import { OpenAi } from "openai";
import { NextResponse } from 'next/server';

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!messages) {
            return NextResponse.json({ message: 'Messages are required.'}), { status: 400 };
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: messages,
        });

        return NextResponse.json(completion.choices[0].message);
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong with the API call.' }, { status: 500 });
    }
}