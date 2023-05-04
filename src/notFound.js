import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="404">
            <h2>OUps.......</h2>
            <p>La page que vous essayer d'acceder n'existe pas </p>
            <Link to={'/'}>Allez a la page d'accueil</Link>
        </div>
     );
}
 
export default NotFound;