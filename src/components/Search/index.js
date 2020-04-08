import React from "react";
import { HashTag, Input, Form, Button, InputContainer } from "./styles";
import { useInputValue } from "../../hooks/useImputValue";

export const Search = () => {
	const hashtag = useInputValue("");

	const handleSubmit = event => {
		event.preventDefault();
		console.log("Buscar ", hashtag.value);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<HashTag>#</HashTag>
					<Input placeholder="buscar" {...hashtag} />
					<Button></Button>
				</InputContainer>
			</Form>
		</>
	);
};
