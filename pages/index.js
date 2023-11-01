import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {results?.map((item) => (
        <div key={item.id} onClick={() => onClick(item.id, item.original_title)} className={styles.movie}>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
          <Link href={`/movies/${item.original_title}/${item.id}`}>
            <h4>{item.original_title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

// 서버에서 동작 ssr
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
