import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/Header";
import { Search } from "../components/Search";
import { ListOfColumns } from "../components/ListOfColumns";
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Body } from './styles';
import axios from "axios";
import { cleanData } from '../util/util';
const API = 'https://st-challenge.now.sh/api/hashtags';

export const Home = () => {
	const [hashtags, setHashtags] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		axios
			.get(API)
			.then((result) => result.data)
			.then((response) => {
				if(response){
					let hashtags = cleanData(response);
					setHashtags(hashtags);
					setLoading(false);
				}
			});
	}, []);

	const onSubmit = (value) => {
		setLoading(true);
		const tmp = hashtags.find(ht => ht.hashtag === value)
		if(!tmp){
			axios
			.get(`${API}/${value}`)
			.then((result) => result.data)
			.then((response) => {
				if(response.data.length > 0){
					hashtags.pop();
					let newData = cleanData(response.data);
					setHashtags([...newData, ...hashtags]);
				}
				setLoading(false);
			});
		}else {
			setLoading(false);
		}
	};

	return (
		<Body>
			<HeaderComponent />
			<Search onSubmit={onSubmit} />
			{ !loading ?  <ListOfColumns hashtags={hashtags} /> : <LoadingSpinner/>} 
		</Body>
	);
};
