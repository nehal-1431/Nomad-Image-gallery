import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { GallerySearch } from "./gallery-search";
import { useToggle } from "../hooks/useToggle";
import { useImgSelect } from "../hooks/useImgSelect";
import "./gallery.css";

export function Gallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const { imgSelected, setImgSelected } = useImgSelect([]);
  const history = useHistory();
  const API_URL = `https://picsum.photos/v2/list`;

  useEffect(() => {
    async function fetchImages() {
      try{
      const response = await fetch(API_URL);
      const jsonResponse = await response.json();
      setImages(jsonResponse);
      setFilteredImages(jsonResponse);
      } catch (e) {
        console.log(e);
      }
    }
    fetchImages();
  }, [API_URL]);

  return (<div>
    <div><GallerySearch data={images} setSearchData={setFilteredImages} /></div>
    <div className="images-selected">No Of Images Selected:- {imgSelected?.length}</div>
    <div className="image_gallery">
      {filteredImages.map((img) => (
        <MapItemComponent key={img.id} key1={img.id} data={img} imgSelected={imgSelected} history={history} changeHandler={(e) => {
          setImgSelected(e)
        }} />
      ))}
    </div>
  </div>
  );
}

function MapItemComponent({ key1, data, history, imgSelected, changeHandler }) {
  const itemRef = useRef();
  const {isToggle, setToggle} = useToggle(() => {
    let found = {};
    found = imgSelected?.find((item) => {
      return (item.id === key1);
    });
    if (found) return true;
    return false;
  });
  const initialRender = useRef(true);
  useEffect(() => {
    if (imgSelected) {
      let found = {};
      found = imgSelected?.find((item) => {
        return (item.id === key1);
      });
      if (found) {
        itemRef.current.style.border = "4px";
        itemRef.current.style.borderColor = "green";
        itemRef.current.style.borderStyle = "solid";
      }
    }
  });

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (isToggle) {
        changeHandler([...imgSelected, { id: itemRef.current.id, toggle: isToggle }]);
        if (itemRef.current) {
          itemRef.current.style.border = "4px";
          itemRef.current.style.borderColor = "green";
          itemRef.current.style.borderStyle = "solid";
          setTimeout(() => {
            history.push(`/item/${data.id}/${encodeURIComponent(data.download_url)}/${data.height}/${data.width}/${encodeURIComponent(data.url)}`);
          }, 300);
        }
      } else {
        let filteredResult = imgSelected.filter((item) => {
          if (item.id === itemRef.current.id) return false;
          return true;
        });
        if (filteredResult) {
          changeHandler([...filteredResult]);
          if (itemRef.current) {
            itemRef.current.style.border = "0";
            itemRef.current.style.borderColor = "none";
            itemRef.current.style.borderStyle = "none";
          }
        }
      }
    }
  }, [isToggle]);

  const handleChange = (e) => {
    setToggle();
  }

  return (
    <div className="gallery-item" key={data.id}>
      <div className="item">
        <img id={data.id} src={`${data.download_url} `} width={`300`} height={`300`} alt={``} ref={itemRef} onClick={(e) => handleChange(e)}></img>
      </div>
      <p className="item">{data.author}</p>
    </div>
  );
}
