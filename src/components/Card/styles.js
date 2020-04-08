import styled from "styled-components";

export const Ul = styled.ul`
	margin-top: 10px;
	list-style: none;
	display: grid;
	grid-gap: 1px;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
`;

export const Header = styled.header`
	background-color: #4ba5e4;
	border-radius: 5px 5px 0px 0px;
	color: #ffffff;
	font-weight: bold;
	padding: 5px 10px;
	height: 30px;
	display: flex;
	align-items: center;
`;

export const Wrapper = styled.div`
	margin: 5px;
	background-color: white;
	border-radius: 5px;
`;

export const Content = styled.div`
	font-size: 14px;
	padding: 15px;
`;

export const Tweet = styled.p`
	padding-bottom: 10px;
	border-bottom: 1px solid #eeedf3;
`;
