import React from 'react'
import '../Card/Card.css';
import { FaPlayCircle } from "react-icons/fa";


const Card = (props) => {
  return (
    <div id="card_wrapper_col">
        <div id="img">{props.name}</div>
        <div id="card_info_row">
            <h3>5<h6>Chapters</h6></h3>
            <div id="line"></div>
            <h3>12<h6>Topics</h6></h3>
            <div id="circle_play"><FaPlayCircle size={70}/></div>
        </div>
    </div>
  )
}

export default Card
