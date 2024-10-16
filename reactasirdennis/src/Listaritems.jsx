import React from "react"
import './listaritems.css'

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'bird']; let contador=0;
    function getItemsList(){
    return ITEMS.map((item,index) => <li key={index}>{item}</li>);
    }
    return (
    <ul>
    {getItemsList()}
    </ul>
    );
   }

   export const ListarItems2= () => {
    let ITEMS = [{id:1,pet:'cat',dueño:'Domingo'},{id:2,pet:'dog',dueño:'dennis'},{id:3,pet:'bird',dueño:'fredy'}];
    function getItemsList(){
    return ITEMS.map(item => <li key={item.id}>{item.pet}</li>);
    }
    return (
    <ul>
    {getItemsList()}
    </ul>
    );
}

import json2 from './heroes.json';
export const ListarItems3= () => {
 function getItems(){ return json2.map((heroe,index) => {
 if (heroe.publisher=="Marvel Comics"){
 return <li key={index}> {heroe.superhero} </li>;
 }
 });
 }
 return (
 <ul>
 {getItems()}
 </ul>
 )
}


export const ListarItems4= () => {
 function getItems(){ return json2.map((heroe,index) => {
 if (heroe.publisher=="Marvel Comics"){
 return <li key={index}> {heroe.superhero} </li>;
 }
 });
 }
 return (
 <ul>
 {getItems()}
 </ul>
 )
}