import styled from "styled-components";

export const Form = styled.form`
	padding: 16px 0;
	display: flex;
	grid-row-end: span 1;
	background-color: #eeedf3;
	border-radius: 5px;
	justify-content: center;
`;

export const SearchContainer = styled.input`
	height: 30px;
`;

export const Input = styled.input`
	width: 80%;
	border: none;
	outline: none;
`;

export const Button = styled.span`
	height: auto;
	width: 40px;
	background-image: url("https://st3.depositphotos.com/1507819/31910/v/450/depositphotos_319109974-stock-illustration-black-magnifier-icon-on-white.jpg");
	background-size: 25px;
	background-repeat: no-repeat;
`;

export const InputContainer = styled.div`
	width: 95%;
	display: grid;
	grid-template-columns: 25px 1fr 25px;
	justify-content: center;
	align-content: center;
	border-radius: 50px;
	background-color: white;
	padding 5px 10px;
`;

export const HashTag = styled.span`
	width: 20px;
	font-size: 20px;
	font-weight: bold;
`;
