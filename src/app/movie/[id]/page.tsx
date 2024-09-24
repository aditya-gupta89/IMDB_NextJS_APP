import Image from 'next/image';
import React from 'react'

export default async function MoviePage({ params }:{
    params:{
        id:string;
    }
}) {
    const movieId = params.id;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    const movie = await res.json();
  
    return (
      <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col lg:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="not found"
            width={500}
            height={300}
            className='rounded-lg w-full max-w-full h-full'
          
          ></Image>
          <div className='p-2 mt-8 lg:mt-0 '>
            <h2 className='text-2xl mb-3 font-bold'>
              {movie.title || movie.name}
            </h2>
            <p className='text-lg mb-3'>{movie.overview}</p>
            <p className='mb-3 text-lg'>
              <span className='font-semibold text-lg mr-1'>Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className='mb-3 text-lg'>
              <span className='font-semibold mr-1'>Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    );
  }

  