import React from "react";
import { Header, Wrapper, Content, Ul, Tweet } from "./styles";

export const Card = () => {
	return (
		<Wrapper>
			<Header>User name</Header>
			<Content>
				<Tweet>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</Tweet>
				<Ul>
					<li>
						<strong>Favs:</strong> 5
					</li>
					<li>
						<strong>Retweets:</strong> 3
					</li>
				</Ul>
			</Content>
		</Wrapper>
	);
};
