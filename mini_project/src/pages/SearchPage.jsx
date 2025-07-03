
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SearchResults } from "../components/SearchResults";
import { useSearchParams } from "react-router";
import {useEffect} from "react"


const SearchPage = (params) => {
    const { text, handleSearchText } = params;
    const [searchParams,SetSearchParams]=useSearchParams();
   useEffect(()=>{
    const searchText=searchParams.get("text");
    console.log("searchText",searchText);
    if(searchText){
        handleSearchText(searchText);

    }
   },[]);
   useEffect(()=>{
    console.log("-----starting time---------");
    const timeoutId=setTimeout(getSearchResults,400);
    return()=>{
        console.log("cleaning effect");
        clearTimrout(timeoutId);
    }
   }[Page,searchQuary])


    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText} />
            <main>
                <p>
                    Search results for:
                    <span className="text-red-800 font-bold">{text}</span>
                </p>
                <SearchResults searchQuery={text} />
            </main>
            <Footer />
        </div>
    );
};

export { SearchPage };