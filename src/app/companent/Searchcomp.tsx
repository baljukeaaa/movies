import { Button } from "@/components/ui/button"
import { Search, Moon } from "lucide-react"

const SearchComp = () => {
    return(
        <div>
            <Button><Search ></Search> <span><input type="text" placeholder="Search for a movie" className=" p-4 text-lg rounded-lg outline-none" /></span></Button>
        
        </div>
    )
}
export default SearchComp