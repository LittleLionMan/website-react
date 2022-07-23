import React from "react";
import './style.css';
import {Info} from './data/info';

export default function Projekte() {
    return (
        <div>
            <div id="sMain">
                <div id="headlines">
                    <h1>Sinnloses</h1>
                    <h2>Eine größer werdende Sammlung kleiner Anwendungen, die mir Spaß bereitet haben, aber garantiert Niemandem weiterhelfen</h2>
                </div>
                <div id="apps">
                    {
                        Info.map((project, index) => {
                            return (
                                <div className="container" key={index}>
                                    <div className="pic">
                                        <a href={project.link}><img src={require(`./data/${project.pic}`)} alt={project.name}/></a>
                                    </div>
                                    <div className="text">
                                        <h3>{project.name}</h3>
                                        <a href={project.source}><p>{project.sourceT}</p></a>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
        </div>
    );
}