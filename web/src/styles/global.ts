import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.black2};
    color: ${props => props.theme.colors.gray3};
    font: ${props => props.theme.fonts.regular};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font: ${props => props.theme.fonts.bold};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    cursor: pointer;
  }

  @media(max-width: 768px) {
    html {
      font-size: 58.5939%;
    }
  }
`;

interface IContentWrapperProps {
  isSigned?: boolean;
}

export const ContentWrapper = styled.main<IContentWrapperProps>`
  max-width: 120rem;
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 45.3rem;
  column-gap: 12rem;
  position: relative;

  &::before {
    ${props => props.isSigned ? css`
      content: '';
      height: 100vh;
      width: 42rem;
      background: url("/assets/background.svg") no-repeat;
      background-size: cover;
      position: absolute;
      right: -20rem;
      top: 0;
    ` : null}

    @media(max-width: 1070px) {
      display: none;
    }
  }

  @media(max-width: 1070px) {
    display: flex;
    flex-direction: ${props => props.isSigned ? "column" : "column-reverse"};
    height: auto;
    min-height: 100vh;
    justify-content: space-around;
  }
`;