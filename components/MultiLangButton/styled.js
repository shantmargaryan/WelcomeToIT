import styled from "styled-components";
import { ButtonReset } from "@/styled/reset";

export const MultiLangBox = styled.div`
  display: flex;
  gap : 0.5rem;
`;

export const LangButton = styled.button`
  ${ButtonReset}

  & svg {
    width: 30px;
    height: 32px;
  }
`;
