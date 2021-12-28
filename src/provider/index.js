import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
    const [provideBDFiltrado,setProvideBDFiltrado] = useState(undefined);

    return(
        <DataContext.Provider
        value={{
            provideBDFiltrado,
            setProvideBDFiltrado
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default Provider;