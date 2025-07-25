import { poppins } from "@/styled/fonts";
import { hasLocale, NextIntlClientProvider, locale } from "next-intl";
import { routing } from "@/i18n/routing";
import React from "react";
import { notFound } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Web development, web design, taught, SMM development, English Language, UI/UX Design",
    description: "Web development, web design, digital agency, seo optimization, web flow, welcom to it",
    keywords: "Վեբ կայքերի մշակում, վեբ ձեւավորում, ուսուցում, SMM զարգացում, անգլերեն լեզու, UI / UX ձեւավորում",
  },

  title: {
    default: "Welcom To IT",
    template: "%s - Welcom To IT",
  },
  description: "WEBFOWFLAGYAGIEN - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
  keywords: "Վեբ կայքերի մշակում, վեբ ձեւավորում, ուսուցում, SMM զարգացում, անգլերեն լեզու, UI / UX ձեւավորում",
  openGraph: {
    type: "website",
    locale: "am-AM",
    url: "https://www.welcometoit.am/am",
    siteName: "Welcom To IT",
    title: "Welcom To IT - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
    description: "Welcom To IT - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.welcometoit.am/am",
    languages: {
      'am-AM': '/am',
      'en-US': '/en',
    },
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale}>
      <body className={poppins.variable}>
        <NextIntlClientProvider>
          <NextThemesProvider>
            {children}
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
