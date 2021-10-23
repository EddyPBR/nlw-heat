import React, { ComponentProps } from "react";
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import { StyledButton, Title, Icon } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  backgroundColor: string;
  icon?: ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
}

export function Button({ title, color, backgroundColor, icon, isLoading, ...rest }: IButtonProps) {
  return (
    <StyledButton backgroundColor={backgroundColor} activeOpacity={0.7} disabled={isLoading} {...rest}>
      {
        isLoading
          ? <ActivityIndicator color={color} />
          : (
            <>
              <Icon name={icon} size={24} />
              <Title color={color}>
                {title}
              </Title>
            </>
          )
      }
    </StyledButton>
  )
}
