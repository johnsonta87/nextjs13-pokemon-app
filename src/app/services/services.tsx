import axios from "axios";
import API from "./api";

export const getPokemons = async (amount = 151) => {
	try {
		const data = await API.get(`/pokemon/?limit=${amount}`);
		return data;
	} catch (e) {
		console.log("We have the error in services", e);
	}
};

export const getPokemon = async (id: string) => {
	try {
		const data = await API.get(`/pokemon/${id}`);
		return data;
	} catch (e) {
		console.log("We have the error in services", e);
	}
};

export const getAbility = async (url: string) => {
	try {
		const data = await axios.get(url);
		return data;
	} catch (e) {
		console.log("We have the error in services", e);
	}
};
