import MovieCard from "@/components/MovieCard";
import Image from "next/image";
const API_KEY=process.env.API_KEY;

const Home = async ({searchParams}:{params:unknown,searchParams:{genre:string}})=>{
  const genre = searchParams.genre ||'fetchTreading';
  const res = await fetch(`https://api.themoviedb.org/3${genre==='fetchTopRated'?'/movie/top_rated':'/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  if(!res.ok){
    throw new Error("Failed to fetch movie data")
  }
  const results = data?.results

  return (
    <>
   <MovieCard results={results}/>
   </>
  );
}

export default Home;