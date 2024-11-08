import { ITEM_IMG } from "../utils/constants"; 

const ItemList = ({items}) => { 
    console.log(items); 
    return (
        <div className="item-body p-4"> 
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 mb-4">
                    
                    <div className=" p-3 flex justify-between">
                        <div>
                            <p>{item.card.info.name}</p>
                            <p>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice / 100}</p>
                        </div>
                        <div className="relative">
                            <img className="w-20 rounded" src={ ITEM_IMG + item.card.info.imageId} />
                            <button className="bg-white rounded absolute bottom-0 p-2 py-1 left-2">Add</button>
                        </div>
                    </div>
                    <div className="p-4">
                    <p className=" text-slate-400 ">{item.card.info.description}</p>
                    </div>
                </div> 

            ))} 
        </div>  
    );
};

export default ItemList;