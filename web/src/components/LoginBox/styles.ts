import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.black2} url("/assets/banner-girl.png") no-repeat center top;

  padding: 44rem 8rem 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 3.2rem;
    line-height: 3.6rem;
  }
`;

export const SignInButton = styled.a`
  background-color: ${(props) => props.theme.colors.yellow};
  margin-top: 3.2rem;
  padding: 0 4rem;
  height: 5.6rem;
  color: ${(props) => props.theme.colors.black1};
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.colors.yellow)};
  }
`;
