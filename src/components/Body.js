import ResCard from "./RestCards";
//import restaurants from "../utils/mockdata";
import Search from "./Search";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRes, setlistOfRes] = useState([]);
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    useEffect (() => {
        feachData();
     }, []);
     const [searchText, setSearchText] = useState("");

     const feachData = async () => {
            const apiData = await fetch (
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const apiJson = await apiData.json();
            setlistOfRes(apiJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterListOfRes(apiJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     }; 
    
    //  if(listOfRes.length === 0){
    //     return (<ShimmerCard />);
    //  } 
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>Your offline</h1>
        )
    };

    return ( listOfRes.length === 0 ? (<ShimmerCard />) :
        <div className="body_sec">
            <div className="body_header">

            
            <div className="search_sec">
                <input type="text" className="search_input" value={searchText} onChange={ (e) => setSearchText(e.target.value) } />
                <button className="search-btn" onClick={()=> { 
                    const FilterList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilterListOfRes(FilterList);
                }}>Search</button>
            </div>
            <div className="cards-filter">
                <button className="filter-btn" 
                     onClick= { () => {
                        const filterList = listOfRes.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilterListOfRes(filterList);
                     }
                    }
                >Filter</button> 
                <button className="filter-btn" 
                     onClick= { () => { 
                        setFilterListOfRes(listOfRes);
                     }
                    }
                >clear</button>
            </div>
            </div>
            <div className="cards_sec">
                {
                    filterListOfRes.map(restra => <Link to={"/restaurent/" + restra.info.id} id= {restra.info.id} key={restra.info.id}><ResCard  resData = {restra} /></Link>) 
                } 
            </div> 
        </div>
    );
}
export default Body;