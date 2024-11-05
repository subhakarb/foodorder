
import {CDNCARD_IMG} from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    const { id, name, cloudinaryImageId, avgRating, costForTwo, cuisines  } = resData?.info;
    return (
        <div className="card-item">
           <div className="card_img">
            <img src={ CDNCARD_IMG + cloudinaryImageId }/>
           </div>
           <div className="card-info">
                <h3>{name}</h3>
                <div className="card_rating">{avgRating}</div>
                <p className="card_items">{cuisines.join(", ")}</p>
                <p className="d_time">{costForTwo}</p>
           </div>
        </div>
    );
}

export default ResCard;