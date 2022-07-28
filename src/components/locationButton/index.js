import React, { useState } from 'react';
import './style.css';
import GetCityInfo from '../locationInfo';


export default function GetCityButton(location) {
    const [infoB, setInfoB] = useState(false);
    const [id, setId] = useState('');
    const loc = location.location;
    let number = 0;

    function close () {
        setInfoB(false);
    }

    const buttonHandler = (e) => {
        const city = e.target.innerHTML;
        function search (item) {
            if (item.name === city) {
                setId(item.wikiId);
            }
        } 
        loc.forEach(search);
        setInfoB(current => !current);
      }

    const locations = (arr) => {
        switch(arr.length) {
            case 1:
                return (
                    <div className="ort">
                        <p>Ort:</p>
                        <button onClick={buttonHandler}>{arr[0].name}</button>
                    </div>
                );
            case 0:
                return ""; 
            default: 
                return (
                    <div className="ort">
                        <p>Orte: </p>
                        
                        {
                            arr.map((ort) => {
                                number++
                                return <button onClick={buttonHandler} key={number}>{ort.name}</button>;
                            })
                        }
                        
                    </div>
                )
        }
    }

    return (
        <div className="containerL">
            <div 
                className="location" 
                onMouseLeave={close}
            >
            {locations(loc)}</div>
            {infoB ? <GetCityInfo id={id} /> : null}
        </div>
    );
}
