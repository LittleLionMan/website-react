import './footer.css';
import akash from '../../ressources/Download.jpeg';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>Powered by: </li>
                <li className="symbol">
                    <a href="https://akash.network/">
                        <img src={akash} alt='akash' />
                    </a>
                </li>
            </ul>
        </footer>
    )
}