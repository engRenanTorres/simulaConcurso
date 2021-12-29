import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
    const [provideBDFiltrado,setProvideBDFiltrado] = useState([]);

    return(
        <DataContext.Provider
        value={{
            provideBDFiltrado,
            setProvideBDFiltrado: (item)=>setProvideBDFiltrado(item)
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default Provider;