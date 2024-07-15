import React, { useEffect } from 'react';
import './component.css';

export default function Flags(props) {

  return (
    <>
    <div className="countryCard">
      <img src={props.data.flag} alt="flag" style={{ width: '100%', height: 'auto' }} />
      <h2 className="title">{props.data.name}</h2>
    </div>
    </>
  );
}
