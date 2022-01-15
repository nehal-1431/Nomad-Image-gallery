import React, {useState, useEffect} from "react";
import { useDebounce } from "./../hooks/useDebounce";
import "./gallery-search.css";

export function GallerySearch({data, setSearchData}) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
      if(debouncedSearchTerm) {
        if(data?.length){
            let filteredImages = data.filter((item) => {
                  return item.author.toLowerCase().indexOf(debouncedSearchTerm.toLowerCase()) > -1 ? true : false;
            });
            setSearchData(filteredImages);
          }
      } else {
        setSearchData(data);
      }
  },[debouncedSearchTerm]);

  return (<div className="gallery-search">
    <div><input type="search" placeholder="Search..." onChange={(e) => {
        setSearchTerm(e.target.value)
    }}></input></div>
  </div>);
}
