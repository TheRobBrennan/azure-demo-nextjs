import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const data = {
    message: 'Hello, world!',
    timestamp: Date.now()
  }

  return NextResponse.json({ data })
}
