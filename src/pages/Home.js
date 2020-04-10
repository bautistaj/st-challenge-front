import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/Header";
import { Search } from "../components/Search";
import { ListOfColumns } from "../components/ListOfColumns";
import StyledComponents from "styled-components";
import axios from "axios";

const Body = StyledComponents.div`
	background-color: white;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: grid;
	grid-gap: 5px;
	grid-template-columns: 80%;
	grid-template-rows: 60px 60px 1fr;
	justify-content: center;	
`;

export const Home = () => {
	const [hashtags, setHashtags] = useState([]);

	useEffect(function () {
		axios
			.get(`http://localhost:3001/data`)
			.then((result) => result.data)
			.then((response) => {
				const hashtagsFiltered = response.filter((ht, i) => {
					return i < 4;
				});
				setHashtags(hashtagsFiltered);
			});
	}, []);

	const onSubmit = (value) => {
		axios
			.get(`http://localhost:3001/data${value ? `?hashtag=${value}` : ""}`)
			.then((result) => result.data)
			.then((response) => {
				if (response.length > 0) {
					console.log("response", response);

					if (hashtags.length >= 4) {
						const hashtagsFiltered = hashtags.filter((ht, i) => {
							return i > 0 && i < 4;
						});
						setHashtags(hashtagsFiltered.concat(response[0]) || []);
					} else {
						setHashtags(hashtags.concat(response[0]));
					}
				}
			});
	};

	return (
		<Body>
			<HeaderComponent />
			<Search onSubmit={onSubmit} />
			{hashtags && <ListOfColumns hashtags={hashtags} />}
		</Body>
	);
};
