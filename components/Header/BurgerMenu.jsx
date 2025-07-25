import { Burger, BurgerLine } from "./styled";

export default function BurgerMenu({ isOpen, setIsOpen }) {
  return (
    <Burger onClick={() => setIsOpen(!isOpen)}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </Burger>
  );
}