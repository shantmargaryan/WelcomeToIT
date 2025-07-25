import { NextResponse } from "next/server"

export function GET() {
  const homeClients = [
    {
      "id": 1,
      "title": "title",
      "name": "name",
      "position": "position"
    },
    {
      "id": 2,
      "title": "title",
      "name": "name",
      "position": "position"
    },
    {
      "id": 3,
      "title": "title",
      "name": "name",
      "position": "position"
    }
  ]
  return NextResponse.json({ homeClients })
}