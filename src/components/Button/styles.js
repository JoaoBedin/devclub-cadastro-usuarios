import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme === "primary" ? `linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);` : `transparent `};
  padding: 16px 32px;
  border-radius: 10px;
  font-size: 1.2rem;
  border:none; ${props => props.theme === "primary" ? `border:none` : `border:2px solid #ff0022ff`};
  font-weight: 600;
  margin: 0 auto;
  width: fit-content;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8; ${props => props.theme === "primary" ? `opacity: 0.8;` : `  border: 2px solid red; 
  box-shadow: 0 0 10px red,
              0 0 20px red,
              0 0 30px red;`};
  }

  &:active {
    opacity: 0.5;
  }
`;