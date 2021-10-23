import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${props => props.theme.colors.black3};
  padding: 16px 24px;
  padding-bottom: ${`${getBottomSpace() + 16}px`};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 88px;
  color: ${props => props.theme.colors.white};
`;
