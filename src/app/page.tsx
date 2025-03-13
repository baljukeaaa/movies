'use client'
import GenreSelector from "./companent/GenreSelector";
import CarouselComp from "./companent/CarouselComp";
import CardComp from "./companent/CardComp";
import SearchComp from "./companent/Searchcomp";
import CardCompp from "./companent/Cardcompp";
export default function Home() {
  return (
    <div className=" ">
      <GenreSelector />
      <SearchComp/>
      <CarouselComp />
      <CardComp />
      <CardCompp/>
    </div>

  )
}



