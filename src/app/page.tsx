type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}
export type GalleryProps = {
  movieType: MovieType[];
  movieList: [];
}
type myThis = {
  this: any
}

'use client'
import GenreSelector from "./companent/GenreSelector";
import CarouselComp from "./companent/CarouselComp";

import SearchComp from "./companent/Searchcomp";
import { Moon, Film, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardCompp from "./companent/Cardcompp";
import CardComppp from "./companent/Cardcomppp";
import CardCompppp from "./companent/Cardcompppp";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import PageFoot from "./companent/pagefoot";

// import CardCompp from "./companent/Cardcompp";
export default function Home() {
  const [movieList, setMoviesList] = useState([]);
  const [genreId, setGenreId] = useState(18);
  const getMovies = async () => {
    const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      }
    }
   
      // options
    );
    setMoviesList(movies.data.results);
    
    // const movies = await res.json();
    // console.log(movies);
  };
  useEffect(() => {
    getMovies();
  }, [genreId]
  );
  console.log(genreId)

  return (
    <div className=" ">

      <div className="flex col-row gap-2 pl-[508px]">
        <div className="flex col-row gap-1 text-indigo-700   ">
          <Film ></Film><span>Movie Z</span>
        </div>
        <GenreSelector setGenreId={setGenreId} genreId={genreId} />
        <SearchComp />
        <Button className="ml-[324px] ">
          <Moon ></Moon>

        </Button>

      </div>
      <CarouselComp />

      <CardCompp />
      <CardComppp />
      <CardCompppp />
      <div className="bg-indigo-700 w-full h-[280px]">
        <div className="">
        <Film ></Film><span>Movie Z</span>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div>
          <p>Contact Information</p>
          <Mail></Mail>

        </div>
      </div>


    </div>

  )
}



