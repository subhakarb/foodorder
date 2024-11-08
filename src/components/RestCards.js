
import {CDNCARD_IMG} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const ResCard = (props) => {
    const {resData} = props;
    const { id, name, cloudinaryImageId, avgRating, costForTwo, cuisines  } = resData?.info;
    const LogedInUser = useContext(UserContext);   
    return (
        <div className="card-item">
           <div className="card_img">
            <img className="h-[150px] w-[100%] object-cover rounded-lg " src={ CDNCARD_IMG + cloudinaryImageId }/>
           </div>
           <div className="card-info">
                <h3>{name}</h3>
                <div className="card_rating">{avgRating}</div>
                <p className="card_items">{cuisines.join(", ")}</p>
                <p className="d_time">{costForTwo}</p>
                <p>Name: {LogedInUser.LogedInUser}</p>
           </div>
        </div>
    );
}
export const withPromoteLable = () => {
    return(props) => {
        return(
            <div>
                <label>Promoted</label>
                <ResCard {...props} />
            </div> 
        );
    };
};
export default ResCard;