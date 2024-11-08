import ResCard, { withPromoteLable } from "./RestCards";
import { useEffect, useState, useContext } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  const ResCardPromoted = withPromoteLable(ResCard);
  useEffect(() => {
    feachData();
  }, []);
  const [searchText, setSearchText] = useState("");

  const feachData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const apiJson = await apiData.json();
    setlistOfRes(
      apiJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListOfRes(
      apiJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //  if(listOfRes.length === 0){
  //     return (<ShimmerCard />);
  //  }
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your offline</h1>;
  }
  const { LogedInUser, setUserInfo } = useContext(UserContext);

  return listOfRes.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body_sec">
      <div className="body_header p-5 flex gap-3">
        <div className="search_sec flex gap-3">
          <input
            type="text"
            className="search_input border-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const FilterList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListOfRes(FilterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="cards-filter flex gap-4">
          <button
            className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filterList = listOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterListOfRes(filterList);
            }}
          >
            Filter
          </button>
          <button
            className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setFilterListOfRes(listOfRes);
            }}
          >
            clear
          </button>
          <div className="mx-5">
            <label className="pr-5">User Name</label>
            <input
              className="p-2 border border-blue-300"
              value={LogedInUser}
              onChange={(e) => setUserInfo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="p-5 cards_sec grid grid-cols-5 gap-4">
        {filterListOfRes.map((restra) => (
          <Link
            to={"/restaurent/" + restra.info.id}
            id={restra.info.id}
            key={restra.info.id}
            className="p-3 border  rounded-lg bg-slate-200 hover:translate-1 transform transition-transform hover:bg-slate-300"
          >
            {restra.info.Promoted ? (
              <ResCardPromoted resData={restra} />
            ) : (
              <ResCard resData={restra} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
