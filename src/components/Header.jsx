//arrow function
//Name Funciton

import React from 'react'
import '../assets/css/header.css'

export const Header = (props) => {
    //props object
    //{title: "Welcome to React"}
    console.log("header comp...",props)
  return (
    <div className='header'>
        <h1>HEADER COMPONENNT</h1>
        <h2>{props.title} - {props.c}</h2>
    </div>
  )
}
