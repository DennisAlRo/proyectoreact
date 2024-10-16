import React from 'react'

export function Cabezera() {
  return (
    <h1>Clase de IAW 2024-25</h1>
  )
}

export function Cabezera1() {
  return (
    <h2>Otra Cabezera</h2>
  )
}

export function Cabezera2(props) {
  return (
    <>
    <li>{props.mensaje}</li>
    <li>{props.otros}</li>
    </>
  )
}

export function Cabezera3({mensaje="mensaje por dejecto",otros}) {
  return (
    <>
    <li>{mensaje}</li>
    <li>{otros}</li>
    </>
  )
}