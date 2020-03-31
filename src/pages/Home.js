import React from "react";
import { HeaderComponent } from "../components/Header";
import { Search } from "../components/Search";
import { Column } from "../components/Colum";
import { Card } from "../components/Card";
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
	return (
		<Body>
			<HeaderComponent />
			<Search />
			<ListOfColumns>
				<Column>
					<Card />
					<Card />
				</Column>

				<Column>
					<Card />
				</Column>

				<Column>
					<Card />
				</Column>
			</ListOfColumns>
		</Body>
	);
};
