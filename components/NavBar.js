import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.link} ${router.pathname === "/" && styles.active}`}>
        Home
      </Link>
      <Link href="/about" className={`${styles.link} ${router.pathname === "/about" && styles.active}`}>
        About
      </Link>
    </nav>
  );
};

export default NavBar;
