import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("LogIn")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center p-6">
            <div  >
                <img className="w-24" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" />
            </div>
            <div className="flex align-middle">
                <ul className="flex gap-3">
                    <li>Online Status: { onlineStatus ? "" : "No" }</li>
                    <li>
                        <Link to="/" className="text-sm/6 font-semibold text-gray-900">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li onClick={ () => {
                        { btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn") }
                    }}
                    >{btnName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;