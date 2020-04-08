import React, {useEffect, useState} from "react";
import { HeaderComponent } from "../components/Header";
import { Search } from "../components/Search";
import { ListOfColumns } from "../components/ListOfColumns";
import StyledComponents from "styled-components";

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

  useEffect(function() {
    window.fetch(`http://localhost:3001/data`)
    .then(result => result.json())
    .then(response => {
      setHashtags(response);
    });
	},[]);

	const onSubmit = (value) => {
		window.fetch(`http://localhost:3001/data${value ?`?hashtag=${value}`:''}`)
		.then(result => result.json())
		.then(response => {
			setHashtags(response);
		});
	}

	return (
		<Body>
			<HeaderComponent />
			<Search onSubmit = { onSubmit }/>
			{
				hashtags && <ListOfColumns hashtags = {hashtags} />
			}
		</Body>
	);
};
