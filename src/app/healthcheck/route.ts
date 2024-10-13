import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ health: 'ok' }, { status: 202 });
}
