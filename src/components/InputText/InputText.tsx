import React from 'react';
import {TextInput} from 'react-native';
import Color from '../../utils/Color';
import InputTextStyle from './InputTextStyle';

interface IProps {
  placeholder?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

export const InputText = ({placeholder, onChangeText}: IProps) => {
  return (
    <TextInput
      style={InputTextStyle.textinput}
      placeholderTextColor={Color.placeHolderColor}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};
