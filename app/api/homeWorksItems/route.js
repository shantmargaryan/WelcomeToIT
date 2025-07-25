import { NextResponse } from "next/server"

export function GET() {
  const homeWorkItems = [
    {
      "id": 1,
      "title": "Strategy",
      "description": "StrategyDescription"
    },
    {
      "id": 2,
      "title": "Teaching",
      "description": "TeachingDescription"
    },
    {
      "id": 3,
      "title": "Design",
      "description": "DesignDescription"
    },
    {
      "id": 4,
      "title": "Development",
      "description": "DevelopmentDescription"
    }
  ]
  return NextResponse.json({ homeWorkItems })
}