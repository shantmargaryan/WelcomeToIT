import { NextResponse } from "next/server"

export function GET() {
  const aboutFollow = [
    {
      "id": 1,
      "title": "planning",
      "description": "planningDescription"
    },
    {
      "id": 2,
      "title": "conception",
      "description": "conceptionDescription"
    },
    {
      "id": 3,
      "title": "design",
      "description": "designDescription"
    },
    {
      "id": 4,
      "title": "development",
      "description": "developmentDescription"
    },
    {
      "id": 5,
      "title": "Teaching",
      "description": "TeachingDescription"
    }
  ]
  return NextResponse.json({ aboutFollow })
}