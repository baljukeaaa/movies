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


import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { Play } from "lucide-react"
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";


//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//     },
//   };


const CarouselComp = () => {
    const [movieList, setMoviesList] = useState<MovieType[]>([]);
    const getMovies = async () => {
        const movies = await axios.get("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
        }
            // options
        );
        setMoviesList(movies.data.results)
    }
    useEffect(() => {
        getMovies();
    }, []
    );

    return (
        <div className="bg-amber-200">
            <Carousel className="relative">
                <CarouselContent className="p-3 h-full bg-cover flex items-center ">
                    {
                        movieList.map((movie: MovieType) => {
                            return (
                                <CarouselItem key={movie.id} className=" ">
                                    {/* <h1>{movie.title}</h1> */}
                                    <div className="relative">
                                        <div className="space-y-2 flex flex-col ">
                                            <img className="w-full rounded-lg   " src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                                            </img>
                                            <div className="p-(--spacing-5) absolute bottom-[158px] text-white space-y-2 flex flex-col left-[140px]  ">
                                                <div className="flex flex-col w-full justify-between gap-[2px]">
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
                                                    <div className="">
                                                        <p className="text-[14px] font-normal not-italic leading-5 py-4 w-[302px]">
                                                            {movie.overview}
                                                        </p>
                                                        <Button>
                                                            <Play size={15} color="[#FDE047]" fill="#FDE047" /><span>Watch Trailer</span>

                                                        </Button>
                                                    </div>
                                                    {/* <p className="text-white ">Watch Trailer</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious  />
                < CarouselNext />
            </Carousel>
        </div>
    )
}
export default CarouselComp