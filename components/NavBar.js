import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/" className="Home" style={{ color: router.pathname === "/" ? "red" : "blue" }}>
        Home
      </Link>
      <Link href="/about" style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
        About
      </Link>
    </nav>
  );
};

export default NavBar;
