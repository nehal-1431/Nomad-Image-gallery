import { createContext, useContext, useState } from "react";

export const imgSelectContext = createContext([]);

export const ImgSelectProvider = (prop) => {
    const [imgSelected, setImgSelected] = useState([]);
    return (
        <imgSelectContext.Provider
          value={{
            imgSelected,
            setImgSelected
          }}
          >{prop.children}</imgSelectContext.Provider>);
};


export const useImgSelect = () => {
    return useContext(imgSelectContext);
  };
  export default useImgSelect;