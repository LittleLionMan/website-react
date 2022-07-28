import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import './style.css';
import { Info } from './info';
import GetCityButton from '../../components/locationButton';

export default function Eintraege() {
    const { id } = useParams();
    let idN = parseInt(id);
    const [data, setData] = useState(null);
    const [location, setLocation] = useState(null);
    let counter = 1;
    let keyC = 0;
    const navigate = useNavigate();

    const back = () => {
        if (idN > 1) {
            setData(null);
            navigate(`/archiv/eintrag${idN - 1}`);
        }
    }

    const forward = () => {
        if (idN !== Info.length) {
            setData(null);
            navigate(`/archiv/eintrag${idN + 1}`);
        } 
    }

    useEffect(()=> {
        function selection(item) {
            
            if (item.number === idN) {
                const packet = item.data;
                setData(packet);
            }
        }
        Info.forEach(selection); 
    }, [idN]);

    useEffect(() => {
        const loc = Info[idN - 1].location;
        setLocation(loc);
    }, [idN])


    if (data === null) {
        return 'Loading...'
    }

    return(
        <div>
            <div className="actions-container-up">
                <button className={idN === 1? "hidden" : "button"} onClick={back}>
                    Vorheriger Artikel
                </button>
                <GetCityButton location={location}/>
                <button className={idN === Info.length ? "hidden" : "button"} onClick={forward}>
                    Nächster Artikel
                </button>
            </div>
            <div id='mainE'>
                {
    
                    data.map((div) => {
                        keyC++
                        let arr = Object.keys(div);
                        let key = arr[0];
                        switch(key) {
                            case 'Title':
                                return (
                                    <h1 key={keyC}>{div.Title}</h1>
                                );
                                case 'Title2':
                                    return (
                                        <h2 key={keyC}>{div.Title}</h2>
                                    );
                            case 'Text':
                                return (
                                    <p key={keyC}>{div.Text}</p>
                                );
                                case 'Zitat':
                                    return (
                                        <p key={keyC} className='zitat'>{div.Zitat}</p>
                                    );
                            case 'ImageH':
                                counter++;
                                return (
                                    <figure key={keyC}>
                                        <img src={require(`./Eintrag ${idN}/pics/${counter}.jpg`)} alt='Huch' className='imgH'/>
                                        <figcaption>{div.ImageH}</figcaption>
                                    </figure>
                                );
                                case 'ImageS':
                                    counter++;
                                    return (
                                        <figure key={keyC}>
                                            <img src={require(`./Eintrag ${idN}/pics/${counter}.jpg`)} alt='Huch' className='imgS'/>
                                            <figcaption>{div.ImageS}</figcaption>
                                        </figure>
                                    );
                            case 'Link':
                                return (
                                    <a key={keyC} href={`${div.Link}`}>{div.Text}</a>
                                );
                            case 'Liste':
                                return (
                                    <ol key={keyC}>{div.Liste.map((li) => {
                                        keyC++
                                       return (
                                        <li key={keyC}>{li}</li>
                                       ) 
                                    })}</ol>
                                )
                            default:
                                return (
                                    <p key={keyC}>Hier fehlt Info</p>
                                );
                        }
                    }

                    )
                }    
            </div>
            <div className="actions-container-down">
                <button className={idN === 1? "hidden" : "button"} onClick={back}>
                    Vorheriger Artikel
                </button>
                <button className={idN === Info.length ? "hidden" : "button"} onClick={forward}>
                    Nächster Artikel
                </button>
            </div>
        </div>
    )
}