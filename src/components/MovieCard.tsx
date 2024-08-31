import React from "react";
import Card from "./Card";

interface movieData{
    title:string;
    name:string;
    id:number;
    overview:string;
    vote_count:number;
    poster_path:string;
    backdrop_path:string;
    release_date:string;
     first_air_date:string;
}

const MovieCard = ({ results }: any) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto mt-10 mb-8 gap-4">
      {results.map((result: movieData) => {
        return (
          <Card title={result?.title||result?.name} id={result?.id} description={result?.overview} date={result?.release_date||result?.first_air_date} image={result?.backdrop_path||result?.poster_path} likes={result?.vote_count} key={result.id}>

          </Card>
        );
      })}
    </div>
  );
};

export default MovieCard;
