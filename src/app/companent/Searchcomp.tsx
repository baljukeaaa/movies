import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const SearchComp = () => {
    return(
        <Button><Search ></Search> <span><input type="text" placeholder="Search for a movie" className=" p-4 text-lg rounded-lg outline-none" /></span></Button>
    )
}
export default SearchComp