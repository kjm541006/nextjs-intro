import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "@/components/Seo";
const API_KEY = "199101e6ba781284310c37a3ebb66d7f";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response) => response.json())
        .catch((err) => console.error(err));
      console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
      {movies.map((item) => {
        <div key={item.id}>
          <h4>{item.original_title}</h4>
        </div>;
      })}
    </div>
  );
}
