import React from 'react'
import {Cabezera,Cabezera1,Cabezera2, Cabezera3} from './Cabezera'
import { ListarItems, ListarItems2, ListarItems3 } from './Listaritems'

function Web() {
  return (
    <div>
    <div>Dennis Alvarez Rodriguez</div>
    <Cabezera/>
    <Cabezera1/>
    <Cabezera2 mensaje="Que guay es REACT" otros="IAW LA MEJOR ASIGNATURA"/>
    <Cabezera3 mensaje="Vaya Rollo a las 14:30" otros="Mucho texto a estas horas"/>
    <ul>
      <ListarItems/>
      <ListarItems2/>
      <ListarItems3/>
    </ul>
    </div>
    
  )
}

export default Web