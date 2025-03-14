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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";

const CardCompppp = () => {
    const [movieList, setMoviesList] = useState<MovieType[]>([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      }
    }
      // options
    );
    setMoviesList(movies.data.results);
    // const movies = await res.json();
    console.log(movies);
  };
  useEffect(() => {
    getMovies();
  }, []
  );
    return(
        
        <div className="p-8">
            <h3 className="text-3xl font-semibold flex ml-20">Top Rated</h3>
        <div className="grid grid-cols-5 items-center justify-items-center justify-self-center w-fit min-h-screen gap-8 sm:p-20 font-[familyname:var(--font-geist-sans)]">
          {movieList.map((movie: MovieType) => {
            return <Card key={movie.id} className=" p-0 gap-0 w-[230px]">
              <CardContent className="p-0 h-[340px]">
                <img
                  className="rounded-t-xl"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </CardContent>
              <CardHeader className="p-2">
                <CardDescription className="flex items-center gap-1 p-0">
                  {/* <Star size={18} color="black" fill="black" />
                <span>{movie.vote_average}/10</span> */
                  }
                  <Star size={15} color="[#FDE047]" fill="#FDE047" />
                  <span>{movie.vote_average}/10</span>
                </CardDescription>
                <CardTitle>{movie.title}</CardTitle>
              </CardHeader>
            </Card>
          })}
        </div>
      </div>
    )
}
export default CardCompppp