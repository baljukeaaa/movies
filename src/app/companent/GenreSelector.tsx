
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';
import { useEffect, useState } from "react";



const GenreSelector = () =>{
    const [genreList, setGenreList] = useState ([])
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


    return(
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genres" />
        </SelectTrigger>
        <SelectContent  >
          {
            genreList.map((genre) => {
              return (
                <SelectItem key={genre.id} value="Genres" >
                  {genre.name}
                
                </SelectItem>
              )
            })
          }


        </SelectContent>
      </Select>
    )
}
 
export default GenreSelector