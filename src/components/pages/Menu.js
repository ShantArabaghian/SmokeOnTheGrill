import React, {useEffect } from 'react';
import Mains from "../Mains";
import Extras from "../Extras";
import './Menu.css'
import { Provider } from "../Context"
import { steaks,kebabs,burgers,wings, sides, drinks } from "./data.json";


export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <Provider>
      <p className="h2-title">Menu</p>
      <div className="menu">
        <Mains type2="Burgers" meals={burgers} />
        <aside className="aside">
        <Mains type2="Steaks" meals={steaks} /> 
        <Mains type2="Kebabs" meals={kebabs} />
        </aside>
        <Extras type="Wings" items={wings} />
        <aside>
          <Extras type="Sides" items={sides} /></aside>
          <Extras type="Drinks" items={drinks} />
          
       
      
      </div>
    </Provider>
  );
}
