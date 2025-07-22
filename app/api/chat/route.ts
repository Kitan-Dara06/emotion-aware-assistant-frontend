// frontend/app/api/chat/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch("https://emotion-aware-prod-assistant.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json({ error: "Failed to get response from backend." }, { status: 500 });
  }
}
