import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
    const[userId, setUserId] = useState("");
    const[password, setPassword] = useState("");
    const[isLogin, setIsLogin] = useState(false);

    return(
        <UserContext.Provider value={{userId, setUserId, password, setPassword, isLogin, setIsLogin}}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserStore;