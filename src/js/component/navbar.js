import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	console.log(store.favorites)

	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<div className="nav-logo">
				<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" style={{width: "100px", height: "35px", margin:"15px"}}/>
				</div>
			</Link>
			

			<div className="dropdown">
					<button className="btn dropdown-toggle" type="button" id="favoritesBTN" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((fav, i) => {

							return <a className="dropdown-item" key={i} href="#"> {fav} <i onClick={()=>actions.deleteFavorite(i)} className="fas fa-trash" id="delete"></i></a>

						})}
						
					</div>
				</div>			
		
		</nav>
	);
};
export default Navbar;