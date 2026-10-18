import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles.css';
if(new URLSearchParams(window.location.search).has('overview')){document.documentElement.classList.add('overview');document.documentElement.style.width='1440px';document.documentElement.style.zoom=String(window.innerWidth/1440);}
createRoot(document.getElementById('root')).render(<App/>);
