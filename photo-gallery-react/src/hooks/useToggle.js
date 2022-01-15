
import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isToggle, setIsToggle] = useState(initialState);
  const setToggle = () => setIsToggle(isToggle => !isToggle);  
  return {isToggle, setToggle}
}