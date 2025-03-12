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
type GalleryProps = {
  movieType: MovieType[];
  movieList: [];
}
'use client'
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "./constants";
import axios from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Play } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


// type MovieType = {
//   id: number;
//   title: string;
//   poster_path: string
// }

export default function Home() {
  const [movieList, setMoviesList] = useState<MovieType[]>([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/discover/movie", {
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
  }, []
  )
  
  return (
       <div className=" ">
      <Select >
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent  >
  {
        movieList.map((movie: MovieType)=>{
          return(
            <SelectItem key={movie.id}   value="Genres" >
              {movie.genre_ids}
     
            </SelectItem>
          )
        })
      }
    
    
  </SelectContent>
</Select>

      <input type="text" placeholder="Search for a movie" className=" p-4 text-lg border rounded-lg" />
      <Carousel>
        <CarouselContent className="p-3 h-full bg-cover flex items-center ">
          {
            movieList.map((movie: MovieType) => {
              return (
                <CarouselItem key={movie.id} className=" ">
                  {/* <h1>{movie.title}</h1> */}
                  <div className="relative">
                    <div className="space-y-2 flex flex-col ">
                      <img className="w-full rounded-lg   " src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>

                      </img>
                      <div className="p-(--spacing-5) absolute bottom-4 text-white space-y-2 flex flex-col  ">
                        <div className="flex w-full justify-between gap-[2px]">
                          <div className="flex flex-col" >
                            <p className="text-[14px] not-italic font-normal leading-5">
                              Now playing:
                            </p>
                            <p className="text-2xl not-italic font-semibold leading-8 ">
                              {movie.title}
                            </p>
                            <div className="flex">
                              <Star size={15} color="[#FDE047]" fill="#FDE047" /><span>{movie.vote_average}/10</span>
                            </div>

                          </div>
                          <p className="text-[14px] font-normal not-italic leading-5 py-4">
                            {movie.overview}
                          </p>
                          <Button>
                            <Play size={15} color="[#FDE047]" fill="#FDE047" /><span>Watch Trailer</span>

                          </Button>
                          <p className="text-white ">Watch Trailer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        < CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="p-8">

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

    </div>

  )
}



