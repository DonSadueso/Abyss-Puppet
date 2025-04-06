import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { View_Main } from './components/Views/View_Main';
import { View_List_Main } from './components/Views/View_List_Main';
import { View_Game_Recent } from './components/Views/View_Game_Recent';
import { View_Carrusel_Game } from './components/Views/View_Carrusel_Game';
import View_Footer from './components/Views/View_Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <View_List_Main />
    <View_Main />
    <View_Game_Recent />
    <View_Carrusel_Game />
    <View_Footer />
  </React.StrictMode>
);

