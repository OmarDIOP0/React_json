import {Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <div className="navbar">
            <div><Link to="/" className="logo">OmarDIOP</Link></div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Accueil</Link>
                </li>
                <li>
                    <Link to="/ajouter" className="btn">CreerArticle</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;