import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${props => props.theme.colors.black2};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentText = styled.Text`
  color: ${props => props.theme.colors.white};
`;
