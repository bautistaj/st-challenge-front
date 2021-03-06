import React from "react";
import { HashTag, Input, Form, Button, InputContainer } from "./styles";
import { useInputValue } from "../../hooks/useImputValue";

export const Search = ({ onSubmit }) => {
	const hashtag = useInputValue("");

	const handleSubmit = (event) => {
		hashtag.setValue("");
		event.preventDefault();
		onSubmit(hashtag.value);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<HashTag>#</HashTag>
					<Input placeholder="buscar" {...hashtag} required/>
					<Button></Button>
				</InputContainer>
			</Form>
		</>
	);
};
