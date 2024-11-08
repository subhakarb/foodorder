import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data, showItems, setShowIndex}) => { 


    
  //  const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
    //    setShowItems(!showItems);
    setShowIndex();
    };
    return(
        <div className="acc-item border shadow-lg mb-6">
            <div className="item-header shadow-md flex justify-between p-4 bg-slate-100 cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span><span> ⬇️  </span>
            </div>
          {  showItems && <ItemList items = {data.itemCards} /> }
            
        </div>
    );
};

export default ResCategory;