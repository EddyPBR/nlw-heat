import styled from "styled-components/native";

import { MotiView } from "moti";

export const MotiContainer = styled(MotiView)`
  width: 100%;
  margin-bottom: 36px;
`;

export const Content = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  margin-left: 16px;
`;
