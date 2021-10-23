import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface StyledButtonProps extends TouchableOpacityProps {
  backgroundColor: string;
}

interface TitleProps {
  color: string;
}

export const StyledButton = styled(TouchableOpacity) <StyledButtonProps>`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.color};
`;

export const Icon = styled(AntDesign)`
  margin-right: 20px;
`;
