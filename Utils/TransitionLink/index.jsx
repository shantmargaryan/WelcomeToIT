"use client";
import React from "react";
import { useRouter } from "@/i18n/navigation";
import { TransitionLinks } from "./styled";


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e
  ) => {
    e.preventDefault();

    if (typeof document === 'undefined') {
      router.push(href);
      return;
    }

    const body = document.querySelector("body");
    if (!body) {
      router.push(href);
      return;
    }

    body.classList.add("page-transition");

    await sleep(250);
    router.push(href);
    await sleep(250);

    body.classList.remove("page-transition");
  };

  return (
    <TransitionLinks {...props} href={href}
      onClick={(e) => { onClick(); handleTransition(e) }}>
      {children}
    </TransitionLinks>
  );
};