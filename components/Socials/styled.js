import styled from "styled-components"
import { ListReset } from "@/styled/reset"


export const SocialList = styled.ul`
  ${ListReset}
  display: flex;
  gap: .5rem;
  margin-block-start: 1rem;
  `

export const Item = styled.li`

& svg {
  width: 1.7rem;
  height: 1.7rem;
  fill: ${({ theme }) => theme.colors.darkBlue};
  transition: fill 0.4s ease, transform 0.4s ease;
}
`