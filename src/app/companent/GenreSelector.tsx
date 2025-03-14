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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';
import { useEffect, useState } from "react";
type GenreType = {
  id : number;
  name: string;
}
type Props = {
  genreId: number;
  setGenreId: (genreId: number) => void;
}


const GenreSelector = (props: Props) => {
  const [genreList, setGenreList] = useState([])
  
  const [movieList, setMoviesList] = useState([]);
  
  const getGenreList = async () => {
    const genres = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      }
    }
      // options
    );
    setGenreList(genres.data.genres);
    // const movies = await res.json();
    // console.log(movies);
  };
  useEffect(() => {

    getGenreList();
  }, []
  )
//  const getMovies = async () => {
//   const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`, {
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//     }
//   }
 
//     // options
//   );
//   setMoviesList(movies.data.results);
//   // const movies = await res.json();
//   // console.log(movies);
// };
// useEffect(() => {
//   getMovies();
// }, []
// );


  return (
    <div>
      <Select onValueChange={(value) => props.setGenreId(Number(value))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genres" />
        </SelectTrigger>
        <SelectContent  >
        {genreList.map((genre: GenreType) => (
            <SelectItem key={genre.id} value={String(genre.id)}>{genre.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      
    </div>
  )
}

export default GenreSelector