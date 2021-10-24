import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  background-color: ${props => props.theme.colors.black2};
  flex: 1;
  padding-top: ${getStatusBarHeight() + 17}px;
`;
