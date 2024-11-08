import { createContext } from "react";

const UserContext = createContext(
    {
        LogedInUser: "Default User"
    }
);

export default UserContext;