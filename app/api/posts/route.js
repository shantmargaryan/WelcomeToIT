import { NextResponse } from "next/server"
export function GET() {
  const posts = [
    {
      "id": 1,
      "title": "title",
      "language": "language",
      "development": "development",
      "page": "page",
      "viewMore": "viewMore",
      "href": "https://shantmargaryan.github.io/Vegetables/",
      "path": "/imgs/OrganickImg2.png",
      "imgUrl": "/imgs/OrganickImg3.png",
      "alt": "project"
    },
    {
      "id": 2,
      "title": "secoundTitle",
      "language": "secoundLanguage",
      "development": "secoundDevelopment",
      "page": "secoundPage",
      "viewMore": "viewMore",
      "href": "https://barber-shop-nu-fawn.vercel.app/",
      "path": "/imgs/barberShopImg1.jpeg",
      "imgUrl": "/imgs/barberShopImg2.png",
      "alt": "project"
    },
    {
      "id": 3,
      "title": "thirdTitle",
      "language": "thirdLanguage",
      "development": "thirdDevelopment",
      "page": "thirdPage",
      "viewMore": "viewMore",
      "href": "https://sel-hono-git-main-shantmargaryans-projects.vercel.app/",
      "path": "/imgs/SelHonoImg1.png",
      "imgUrl": "/imgs/SelHonoImg2.png",
      "alt": "project"
    },
    {
      "id": 4,
      "title": "fourthTitle",
      "language": "fourthLanguage",
      "development": "fourthDevelopment",
      "page": "fourthPage",
      "viewMore": "viewMore",
      "href": "https://live.verstaem.online/sos/?lang=ENG",
      "path": "/imgs/SOSGamesImg1.png",
      "imgUrl": "/imgs/SOSGamesImg2.png",
      "alt": "project"
    },
    {
      "id": 5,
      "title": "fifthTitle",
      "language": "fifthLanguage",
      "development": "fifthDevelopment",
      "page": "fifthPage",
      "viewMore": "viewMore",
      "href": "https://blancphotostudio.am/##lang=arm",
      "path": "/imgs/photoStudioImg1.png",
      "imgUrl": "/imgs/photoStudioImg2.png",
      "alt": "project"
    },
    {
      "id": 6,
      "title": "sixthTitle",
      "language": "sixthLanguage",
      "development": "sixthDevelopment",
      "page": "sixthPage",
      "viewMore": "viewMore",
      "href": "https://shantmargaryan.github.io/plaster/",
      "path": "/imgs/PlaterImg1.png",
      "imgUrl": "/imgs/PlasterImg2.png",
      "alt": "project"
    },
    {
      "id": 7,
      "title": "seventhTitle",
      "language": "seventhLanguage",
      "development": "seventhDevelopment",
      "page": "seventhPage",
      "viewMore": "viewMore",
      "href": "https://shantmargaryan.github.io/construction/",
      "path": "/imgs/constructionImg1.png",
      "imgUrl": "/imgs/constructionImg2.png",
      "alt": "project"
    }
  ]
  return NextResponse.json(posts)
}