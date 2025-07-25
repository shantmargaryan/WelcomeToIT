import { useState } from "react";
import { Nav, NavList } from "./styled";
import { TransitionLink } from "@/Utils/TransitionLink";
import { links } from "./links";
import Overlay from "@/components/Overlay";
import IntersectionComponent from "@/Utils/Intersection";
import MultiLangButton from "@/components/MultiLangButton";



export default function Navigation({ isOpen, headerHeight, linkActive, setIsOpen, t }) {
  const handleTouchEnd = () => setIsOpen(false);
  const [isvisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <>
      <IntersectionComponent onIntersect={handleIntersect} />
      <Nav
        isopen={isOpen ? "true" : "false"}
        headerheight={headerHeight}
        role="navigation"
        onTouchEnd={handleTouchEnd}
      >
        <NavList isvisible={isvisible? "true" : "false"}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <TransitionLink
                isVisible={isvisible}
                href={href}
                isactive={label === linkActive ? "true" : "false"}
                onClick={() => setIsOpen(false)}
              >
                {t(label)}
              </TransitionLink>
            </li>
          ))}
          <MultiLangButton />
        </NavList>
      </Nav>
      {
        isOpen && (
          <Overlay setIsOpen={setIsOpen} onClick={() => setIsOpen(false)} />
        )
      }
    </>
  );
}