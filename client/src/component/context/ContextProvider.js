import React, { createContext, useState } from 'react'


export const adddata = createContext("");
export const updateddata = createContext("");
export const deleteddata = createContext("");

const ContextProvider = ({ children }) => {
    const [udata, setUdata] = useState("");
    const [updata, setUPdata] = useState("");
    const [deldata, setDLTdata] = useState("");
    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <updateddata.Provider value={{ updata, setUPdata }}>
                <deleteddata.Provider value={{ deldata, setDLTdata }}>
                    {children}
                </deleteddata.Provider> 
            </updateddata.Provider>
        </adddata.Provider>
    )
}

export default ContextProvider;