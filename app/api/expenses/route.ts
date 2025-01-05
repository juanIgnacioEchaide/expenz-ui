import { NextResponse } from 'next/server';

const baseUrl = 'http://localhost:3000/api'

export async function GET() {
  const res = await fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY || '',
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch expenses' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY || '',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to save expense' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
