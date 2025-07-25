import { NextResponse } from 'next/server';


export async function GET() {
  const HomeCourses = [
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
    },
    {
      "id": 4,
      "title": "fourthTitle",
      "description": "fourthDescription",
      "link": "link"
    },
    {
      "id": 5,
      "title": "fifthTitle",
      "description": "fifthDescription",
      "link": "link"
    },
    {
      "id": 6,
      "title": "sixthTitle",
      "description": "sixthDescription",
      "link": "link"
    }
  ];
  return NextResponse.json(HomeCourses);
}