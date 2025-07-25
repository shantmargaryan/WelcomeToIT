import { NextResponse } from "next/server"

export function GET() {
  const homeFeatures = [
    {
      "id": 1,
      "title": "UsesClientFirst",
      "description": "UsesClientFirstDescription"
    },
    {
      "id": 2,
      "title": "TwoFreeRevisionRound",
      "description": "TwoFreeRevisionRoundDescription"
    },
    {
      "id": 3,
      "title": "TemplateCustomization",
      "description": "TemplateCustomizationDescription"
    },
    {
      "id": 4,
      "title": "Support",
      "description": "SupportDescription"
    },
    {
      "id": 5,
      "title": "QuickDelivery",
      "description": "QuickDeliveryDescription"
    },
    {
      "id": 6,
      "title": "FreeRevisions",
      "description": "FreeRevisionsDescription"
    }
  ]
  return NextResponse.json({ homeFeatures })
}