import { createContext } from "react";
import { ProjectsData } from "../assets/assets";


export const AppContext = createContext()


const AppContextProvider = (props) => {


    const value = {
        ProjectsData
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider