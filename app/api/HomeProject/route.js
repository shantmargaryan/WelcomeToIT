import { NextResponse } from "next/server";


export async function GET() {
  const data = [
    {
      id: 1,
      href: "https://tosno-bruschatka.ru/",
      img: "/imgs/HomeprojectImg1.png",
      alt: "project",
    },
    {
      id: 2,
      href: "https://stav-ukladka.ru/",
      img: "/imgs/HomeprojectImg2.png",
      alt: "project",
    }
  ]

  return NextResponse.json(data);
}