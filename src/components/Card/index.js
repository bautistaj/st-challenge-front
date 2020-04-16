import React from "react";
import { Header, Wrapper, Content, Ul, Tweet } from "./styles";

export const Card = ({username, text, favs, retweets}) => {
	return (
		<Wrapper>
			<Header>{username}</Header>
			<Content>
				<Tweet>
					{text}
				</Tweet>
				<Ul>
					<li>
						<strong>Favs:</strong> {favs}
					</li>
					<li>
						<strong>Retweets:</strong> {retweets}
					</li>
				</Ul>
			</Content>
		</Wrapper>
	);
};
