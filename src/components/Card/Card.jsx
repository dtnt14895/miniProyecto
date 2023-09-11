import React from "react";

function Card(props) {
  return (
    <div key={props.key}>
      <img className="responsive-image" src={props.src} alt="" />
      <div className="textContent">
        {props.superHost ? <span className="host">SUPER HOST</span> : <></>}
        {props.beds==null?<span className="beds">{`${props.type} 0 beds`}</span>:        
        <span className="beds">{`${props.type} ${props.beds} beds`}</span>
        }
        <div>
          <span className="material-symbols-outlined">star</span>
          <span>{props.rating}</span>
        </div>
      </div>
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Card;
