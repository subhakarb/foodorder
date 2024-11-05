import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom"; 
import UseRestaurentMenu from "../utils/useRestaurentMenu";
const RestraMenu = () => { 
  const {resId} = useParams();
  const resInfo = UseRestaurentMenu(resId);
  if (resInfo === null) {
    return <ShimmerCard />;
  }
  const { name, city, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  return (
    <div className="restra_menu">
      <h3>{name}</h3>
      <p>{city}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs- "}{item.card.info.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestraMenu;
