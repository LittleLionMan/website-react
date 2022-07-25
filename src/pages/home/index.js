import React from "react";
import './style.css';
import { Info } from '../Eintraege/info';
import { Link } from 'react-router-dom';

const aktuell = Info.length;

function text () {
    const intro = document.getElementById('intro');
    const spoiler = document.getElementById('spoiler');

    if (spoiler != null) {
        
        if (intro.style.display === 'none') {
            intro.style.display = 'block';
            spoiler.innerHTML = 'Text einklappen';
        } else {
            intro.style.display = 'none';
            spoiler.innerHTML = 'Text ausklappen';
        
        };
    };
}

export default function Home() {
    return (
        <div>
            
            <div id="main">
                <div id="about">
                    <div id="headlines">
                        <h1>Endlich mal was Sinnvolles</h1>
                        <h2>Der vermutlich erste Reiseblog im Internet</h2>
                        
                    
                    </div>
                    <p id="spoiler" onClick={text}>Text ausklappen</p>
                    <div id="intro" style={{display: 'none'}}>
                        <p>Update 1: Die Homepage läuft nun endlich mit React. Falls irgendetwas nicht mehr funktioniert,
                            freue ich mich über Feedback! <a href='https://github.com/LittleLionMan/website-react'>GitHub für Interessierte</a><br />
                            Neu ist vorerst die Navigation für die einzelnen Artikel.
                        </p><br />
                    <p>Am 2.6. starte ich mit Jonny nach Bangkok. Damit geht eine formidable Zeit vorbei, 
                        in der ich es geschafft habe, Europa nie zu verlassen. Nichtsdestotrotz werden wir versuchen
                        das beste daraus zu machen. Damit aber nicht nur wir uns an unseren aufregenden Abenteuern
                        ergötzen können, werde ich diesen Blog nach besten Wissen und Gewissen pflegen. 
                        Das heißt es wird fantastische Bilder von Tauchgängen in kristallklarem Wasser, Shoppingtouren 
                        auf exotischen Märkten und überwältigender Architektur geben. Genau der Kontent, der euch, wenn ihr
                        mal wieder gelangweilt bei der Arbeit nichts besseres zu tun habt als diesen Blog anzusurfen,
                        großartig durch den Tag kommen lassen wird - aus Freude für uns und unsere Erlebnisse.<br />
                        Ich bereite mich vor, die volle Ladung Kultur nicht nur aufzusaugen, sondern in Bild und Sprache
                        an euch weiterzugeben. "จบด้วยดี" habe ich beim aufpeppeln meines japanesisch bereits gelernt. 
                        Freut euch also auf tiefgreifende Einblicke in eine fremde Welt aus meiner vielleicht etwas 
                        naiven, aber weltoffenen und begeisterten Perspektive.<br />
                        <br />
                        Eine unwesentliche Nebenmotivation für diesen Blog war es, meine neuen und offensichtlich überschaubaren
                        Kenntnisse in frontend-design anzuwenden. Aus diesem Grund ist die Funktionalität der Seite auch noch
                        überschaubar. Vielleicht verbessert sich also noch einiges über den Urlaub. Vermutlich aber nicht, weil 
                        jede Zeile CSS nachhaltigen Seelenschmerz in mir auslöst.
                    </p>
                    </div>
                </div>
                <div id="preview">
                    <Link to={`/archiv/eintrag${aktuell}`}>
                    <figure>
                        <img src={require(`../Eintraege/Eintrag ${aktuell}/pics/1.jpg`)} alt='Hier fehlt ein Bild'/>
                        <figcaption>17.07.</figcaption>
                    </figure>
                    </Link>
                </div>
            </div>
        </div>
    );
}