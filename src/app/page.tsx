// type MovieType = {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;

// }


'use client'
import GenreSelector from "./companent/GenreSelector";
import CarouselComp from "./companent/CarouselComp";

import SearchComp from "./companent/Searchcomp";
import { Moon, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardCompp from "./companent/Cardcompp";
import CardComppp from "./companent/Cardcomppp";
import CardCompppp from "./companent/Cardcompppp";

// import CardCompp from "./companent/Cardcompp";
export default function Home() {


  return (
    <div className=" ">

      <div className="flex col-row gap-2 pl-[508px]">
        <div className="flex col-row gap-1 text-indigo-700   ">
          <Film ></Film><span>Movie Z</span>
        </div>
        <GenreSelector />
        <SearchComp />
        <Button className="ml-[324px] ">
          <Moon ></Moon>

        </Button>

      </div>
      <CarouselComp />

      <CardCompp />
      <CardComppp />
      <CardCompppp />


    </div>

  )
}



