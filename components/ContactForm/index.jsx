"use client";
import { useTranslations } from "next-intl";
import { ContactSection, ContactContainer, Content, ContactTitle, ContactParagraph, Wrapper, SmallTitle, Form, Input, Textarea, Button } from "./styled";
import PhoneNumber from "../PhoneNumber";


export default function ContactForm() {
  const t = useTranslations("HomeSendInquery");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d8b7267-8669-4d02-b1b6-5b0c899451b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      alert("Form submitted successfully!");
      event.target.reset();
    }
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Content style={{
          background: "url(/imgs/SendInquiryImg.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <ContactTitle>
            {t("title")}
          </ContactTitle>
          <ContactParagraph>
            {t("description")}
          </ContactParagraph>
        </Content>
        <Wrapper>
          <SmallTitle>
            {t("secoundTitle")}
          </SmallTitle>
          <ContactParagraph>
            {t("secoundDescription")}
          </ContactParagraph>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder={t("namePlaceholder")} required />
            <Input type="email" name="email" placeholder={t("emailPlaceholder")} required />
            <Input type="text" name="phone Number" placeholder={t("phonePlaceholder")} required />
            <Textarea name="message" placeholder={t("messagePlaceholder")}></Textarea>
            <Button type="submit">
              {t("button")}
            </Button>
            <PhoneNumber
              number="+37498889169"
            />
          </Form>
        </Wrapper>
      </ContactContainer>
    </ContactSection>
  );
}