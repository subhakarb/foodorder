import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom"; 
import UseRestaurentMenu from "../utils/useRestaurentMenu";
import ResCard from "./RestCards";
import ResCategory from "./RestCategory";
import { useState } from "react";
const RestraMenu = () => { 
  const {resId} = useParams();
  const resInfo = UseRestaurentMenu(resId);
  const [showIndex, setShowIndex ] = useState(0)
  if (resInfo === null) {
    return <ShimmerCard />;
  }
  const { name, city, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

 // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>  c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
 //console.log(categories);
  return (
    <div className="restra_menu container m-auto max-w-3xl">
      <h3>{name}</h3>
      <p>{city}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <div className="my-4">
        {categories.map((category, index) => 
            <ResCategory
               data={ category?.card?.card }
               key={category?.card?.card.title} 
               showItems = {index == showIndex ? true : false}
               setShowIndex = {() => setShowIndex(index)}
            />
          )}
      </div>
    </div>
  );
};

export default RestraMenu;
