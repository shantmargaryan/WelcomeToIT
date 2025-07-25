import { NextResponse } from "next/server"

export function GET() {
  const featuresItems = [
    {
      "id": 1,
      "beforeTitle": "beforeTitle",
      "title": "title",
      "description": "description"
    },
    {
      "id": 2,
      "beforeTitle": "secoundBeforeTitle",
      "title": "secoundTitle",
      "description": "secoundDescription"
    },
    {
      "id": 3,
      "beforeTitle": "thirdBeforeTitle",
      "title": "thirdTitle",
      "description": "thirdDescription"
    },
    {
      "id": 4,
      "beforeTitle": "fourthBeforeTitle",
      "title": "fourthTitle",
      "description": "fourthDescription"
    }
  ]
  return NextResponse.json({ featuresItems })
}