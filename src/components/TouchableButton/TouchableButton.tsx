import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IProps {
  onClick: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonText: String;
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const TouchableButton = ({
  onClick,
  buttonStyle,
  buttonText,
  buttonTextStyle,
}: IProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={[buttonStyle]}>
      <Text style={[buttonTextStyle]}> {buttonText} </Text>
    </TouchableOpacity>
  );
};
