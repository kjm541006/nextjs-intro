import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Seo from "@/components/Seo";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await fetch(`/api/movies`)
        .then((response) => response.json())
        .catch((err) => console.error(err));
      console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((item) => (
        <div className={styles.movie} key={item.id}>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <h4>{item.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
