import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavBarStyle = styled.nav`
  background-color: tomato;
`;

const LinkStyle = styled(Link)`
  color: red;

  &.active {
    color: blue;
  }
`;

const NavBar = () => {
  const router = useRouter();
  return (
    <NavBarStyle>
      <LinkStyle href="/" className={router.pathname === "/" && "active"}>
        Home
      </LinkStyle>
      <LinkStyle href="/about" className={router.pathname === "/about" && "active"}>
        About
      </LinkStyle>
    </NavBarStyle>
  );
};

export default NavBar;
