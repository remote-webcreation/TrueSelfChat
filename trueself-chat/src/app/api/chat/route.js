import { OpenAi } from "openai";
import { NextResponse } from 'next/server';

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
});