"use client";
import { useTranslations } from "next-intl";
import CustomSelect from "react-select";
import PhoneNumber from "../PhoneNumber";

import {
  CoursesFormSection,
  CoursesFormContainer,
  Wrapper,
  ImgBox,
  CoursesFormContent,
  CoursesFormTitle,
  CoursesFormParagraph,
  Form,
  Input,
  LableContent,
  Lable,
  Textarea,
  Button,
  RadioInputField
} from "./styled";


export default function CoursesForm() {
  const t = useTranslations("CoursesForm");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8f6c1fb6-53d2-464a-a828-56a069e540a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form successfully submitted!");
      event.target.reset();
    }
  };

  return (
    <CoursesFormSection id="register">
      <CoursesFormContainer>
        <CoursesFormContent>
          <CoursesFormTitle>{t("title")}</CoursesFormTitle>
          <CoursesFormParagraph>{t("description")}</CoursesFormParagraph>
        </CoursesFormContent>
        <Wrapper>
          <ImgBox style={{
            background: "url(/imgs/SendInquiryImg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}></ImgBox>
          <Form onSubmit={onSubmit}>
            <Input type="text" name="name" placeholder={t("namePlaceholder")} required />
            <Input type="tel" name="phone" placeholder={t("phonePlaceholder")} required />
            <Input type="email" name="email" placeholder={t("emailPlaceholder")} />
            <CustomSelect
              name="Courses"
              placeholder={t("selectDeveloper")}
              options={[
                { value: "frontend", label: "Frontend" },
                { value: "backend", label: "Backend" },
                { value: "fullstack", label: "Full Stack" },
                { value: "smm", label: "SMM" },
              ]}
              isSearchable={false}
              required
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  border: "0.094rem solid rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  padding: "0.5rem",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#fff",
                  fontSize: "1rem",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "rgba(255, 255, 255, 0.05)" : "#fff",
                  color: "#222",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#fff",
                }),
              }}
            ></CustomSelect>
            <LableContent>
              <Lable>
                <RadioInputField type="radio" name="mode" value="online" required />
                online
              </Lable>
              <Lable>
                <RadioInputField type="radio" name="mode" value="offline" required />
                offline
              </Lable>
            </LableContent>
            <Textarea name="message" placeholder={t("messagePlaceholder")}></Textarea>
            <Button type="submit">{t("button")}</Button>
            <PhoneNumber
              number="+37498889169"
            />
          </Form>
        </Wrapper>
      </CoursesFormContainer>
    </CoursesFormSection>
  );
}

