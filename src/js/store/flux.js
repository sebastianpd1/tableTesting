const getState = ({ getStore, setStore }) => {
	return {
		store: {
			tabla1: [],
			tabla2: [],
			tabla3: [],
			pivot: []
		},
		actions: {
			addToTable1: object => {
				console.log(object);
				fetch("https://3000-adde859e-1f2d-4d6a-b7eb-5e2c7b5a138a.ws-us0.gitpod.io/products/all", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				})
					.then(response => {
						if (response.status == 200) return response.json;
						else console.error("BAD RESPONSE code: " + response.status);
					})
					.catch(function(error) {
						console.error(error);
					});
			},
			table1: () => {
				fetch("https://3000-adde859e-1f2d-4d6a-b7eb-5e2c7b5a138a.ws-us0.gitpod.io/products/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ tabla1: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},

			table2: () => {
				fetch("https://3000-adde859e-1f2d-4d6a-b7eb-5e2c7b5a138a.ws-us0.gitpod.io/products/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ tabla2: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},

			table3: () => {
				fetch("https://3000-adde859e-1f2d-4d6a-b7eb-5e2c7b5a138a.ws-us0.gitpod.io/products/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ tabla3: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},

			pivot: () => {
				fetch("https://3000-adde859e-1f2d-4d6a-b7eb-5e2c7b5a138a.ws-us0.gitpod.io/products/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ pivot: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			}
		}
	};
};

export default getState;
