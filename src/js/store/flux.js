const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			starships:[],
			favorites:[],
		},
// map over the array and deleting !! look at mapping of homepage do inside drop down map names !!

		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

					fetch("https://swapi.dev/api/people")
					.then((res) => res.json())
					.then((data) => {
						setStore({characters:data.results})
						console.log("Characters")
					})
					// use catch always to catch errors!!//
					.catch((error) =>{console.log(error)})


					fetch("https://swapi.dev/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({planets:data.results})
						console.log("Planets")
					})
					.catch((error) =>{console.log(error)})
					
					
					fetch("https://swapi.dev/api/starships")
					.then((res) => res.json())
					.then((data) => {
						setStore({starships:data.results})
						console.log("Starships")
					})
					.catch((error) =>{console.log(error)})
			},

		
			getcharacter:(id) => {
				const characters = getStore().characters

				return(
					characters[id]
				)
			},

			getPlanet:(id) => {
				const planets = getStore().planets

				return(
					planets[id]
				)
			},
			
			getStarship:(id) => {
				const starships = getStore().starships

				return(
					starships[id]
				)
			},

			addFavorite:(name) => {
				const favorites = getStore().favorites
				favorites.push(name)
				setStore({favorites:favorites})
			},

			deleteFavorite:(idx) => {
				const favorites = getStore().favorites
				let filtered = favorites.filter((f,i)=> i !== idx)
				setStore({favorites:filtered})
			},



			// WOWWWW THIS IS ANNOYING --v

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;