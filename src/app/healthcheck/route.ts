import { NextResponse } from 'next/server';

export async function GET() {
  // Respond with 202 Accepted
  return NextResponse.json({ health: 'ok' }, { status: 202 });
}
