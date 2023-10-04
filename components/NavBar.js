import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    // <nav className={styles.nav}>
    //    <Link href="/" className={`${styles.link} ${router.pathname === "/" && styles.active}`}>
    //     Home
    //   </Link>
    //   <Link href="/about" className={`${styles.link} ${router.pathname === "/about" && styles.active}`}>
    //     About
    //   </Link>
    // </nav>
    <nav className="nav">
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        <span>Home</span>
      </Link>
      <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
        <span>About</span>
      </Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          span {
            text-decoration: none;
            color: pink;
          }
          .active {
            color: blue;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
