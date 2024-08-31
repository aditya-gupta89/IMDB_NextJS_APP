import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

import React from 'react'

interface cardProps{
    id:number;
    image:string;
    description:string;
    date:string;
    likes:number;
    title:string;
}

const Card:React.FC<cardProps> = ({date,description,image,likes,id,title}) => {
  return (
    <div className='hover:animate-shadow-drop hover:z-10 z-0 relative border-slate-400 p-4 border flex flex-col gap-3'>
      <Link href={`/movie/${id}`} >
      <Image className='rounded-md' src={`https://image.tmdb.org/t/p/original/${image}`} width={300} height={500} alt='not found'/>
      </Link>
      <div className="flex flex-col">
        <p className='line-clamp-2'>
            {description}
        </p>
        <p className='text-xl font-bold line-clamp-1'>{title}</p>
        <div className='flex  gap-2'>
            <p>{date}</p>
            <FiThumbsUp className='h-5 mr-1 ml-3' />

            <p>{likes}</p>
        </div>
      </div>
    </div>
  )
}

interface cardProps{
    image:string;
    description:string;
    date:string;
    likes:number;
}

export default Card
