import React from "react";
import { Info } from '../Eintraege/info';
import './style.css';
import { Link } from 'react-router-dom';

Info.reverse();

export default function Archiv() {
    return (
        <div>
            <div id="aMain">
                {
                    Info.map((container, index) => {
                        return (
                            <div className='container' key={index}>
                                <Link to={`/archiv/eintrag${index + 1}`} id={index + 1}>
                                    <figure>
                                        <img src={require(`../Eintraege/Eintrag ${index + 1}/pics/1.jpg`)} alt={container.location}/>
                                    </figure>
                                    <figcaption>
                                        {container.date}: {container.name}
                                    </figcaption>
                                </Link>
                            </div>
                        )
                          
                    })
                }
            </div>
        </div>
    );
}