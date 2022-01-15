import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ImgSelectProvider } from "../hooks/useImgSelect";

import "./app.css";
import { Header } from "./header";
import { Gallery } from "./gallery";
import { GalleryItem } from "./gallery-item";

export function App() {
  return (
    <ImgSelectProvider>
    <Router>
      <div className="app container">
        <Header />
        <div>
          <Switch>
            <Route path="/item/:id/:download_url?/:height?/:width?/:url?" component={GalleryItem} />
            <Route path="/" component={Gallery} />
          </Switch>
        </div>
      </div>
    </Router>
    </ImgSelectProvider>
  );
}
