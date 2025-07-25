import { NextResponse } from "next/server"

export function GET() {
  const homeBlog = [
    {
      "id": 1,
      "title": "title",
      "description": "description",
      "link": "link"
    },
    {
      "id": 2,
      "title": "secoundTitle",
      "description": "secoundDescription",
      "link": "link"
    },
    {
      "id": 3,
      "title": "thirdTitle",
      "description": "thirdDescription",
      "link": "link"
    }
  ]
  return NextResponse.json({ homeBlog })
}