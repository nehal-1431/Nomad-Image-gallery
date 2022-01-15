import React from "react";
import { useParams } from "react-router-dom";
import "./gallery-item.css";

export function GalleryItem() {
  const { url, download_url, height, width } = useParams();
  return (<div className="card">
    <div className="card-item">
      <img src={`${decodeURIComponent(download_url)}`} width={1060} height={860} alt={``}></img>
    </div>
    <p className="card-item">Height:- {height}</p>
    <p className="card-item">Width:- {width}</p>
    <p className="card-item">Url:- {decodeURIComponent(url)}</p>
    <p className="card-item">Download_url:- {decodeURIComponent(download_url)}</p>
  </div>);
}
