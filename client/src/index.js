import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { createGlobalStyle } from 'styled-components'
import { Index } from "./components/pages/index";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {AllLinks as AllLinksPage} from "./components/pages/allLinks/allLinks";
import {Redirect as RedirectPage} from "./components/pages/redirect/redirect";
import {PageNotFound} from "./components/pages/pageNotFound/pageNotFound";
import {Navigation} from "./components/molecules/navigation/navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f5f3;
    background-image: url("https://uploads-ssl.webflow.com/5f75e0f174f7120ec5adba3e/5f8e78f09a0f00b29c59ea06_Background%20Website%20Cropped%402x.png");
    background-position: 0 0;
    font-family: sans-serif;
  }
`

root.render(
    <BrowserRouter>
        <GlobalStyle whiteColor />
        <Navigation/>
        <Routes>
            <Route index element={<Index />}/>
            <Route path='/all-links' element={<AllLinksPage />} />
            <Route path='/s/:shortUrl' element={<RedirectPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);
