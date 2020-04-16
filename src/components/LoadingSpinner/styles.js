import styled from "styled-components";
import loading from "../../img/loading.gif";

export const Image = styled.img.attrs({
  src: loading
})`
width: 100px;
height: 100px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`