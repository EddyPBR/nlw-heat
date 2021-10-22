import styled from "styled-components/native";

import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

interface IAvatarProps {
  isSmall?: boolean;
}

interface IGradientProps extends LinearGradientProps{
  isSmall?: boolean;
}

export const Avatar = styled.Image<IAvatarProps>`
  width: ${props => props.isSmall ? "28px" : "42px" };
  height: ${props => props.isSmall ? "28px" : "42px" };
  border-width: 4px;
  border-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.isSmall 
    ? `${(28/2)}px` 
    : `${(42/2)}px`
  };
`;

export const Gradient = styled(LinearGradient)<IGradientProps>`
  width: ${props => props.isSmall ? "32px" : "48px" };
  height: ${props => props.isSmall ? "32px" : "48px" };
  border-radius: ${props => props.isSmall 
    ? `${(32/2)}px` 
    : `${(48/2)}px`
  };
  justify-content: center;
  align-items: center;
`;
