
'use client'
import{useEffect, useState} from "react";
import { ACCESS_TOKEN } from "./constants";
import  axios  from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";


 type MovieType = {
  id: number;
  title : string;
  poster_path : string
 }

export default function Home() {
  const[movieList,setMoviesList]= useState<MovieType[]>([]);
  const options = {
    method:"GET",
    headers:{
      accept:"application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async() =>{
   const movies = await axios.get("https://api.themoviedb.org/3/discover/movie",{
    headers:{
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
   }
    // options
   );
  setMoviesList(movies.data.results);
    // const movies = await res.json();
    // console.log(movies);
};
    useEffect(()=> {
     getMovies();
    }, []
    )
    return(
      <div className=" ">
        <input></input>
       <Carousel>
        <CarouselContent className="p-10 ">
          {
          movieList.map((movie:MovieType )=>{
            return(
              <CarouselItem key={movie.id} className=" ">
              <h1>{movie.title}</h1>
              <img className="" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>
              </img></CarouselItem>
            )
          })
        }
        </CarouselContent>
        < CarouselNext/>
        <CarouselPrevious/>
        </Carousel>
       <div className="grid grid-flow-col grid-rows-4 gap-8">
         {
          movieList.map((movie:MovieType )=>{
            return<div key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
             
              </div>;
          })
        }
       </div>
      </div>
    )
  
}
 


