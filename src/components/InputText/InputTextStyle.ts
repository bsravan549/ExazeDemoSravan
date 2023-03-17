import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const InputTextStyle = StyleSheet.create({
  textinput: {
    height: 45,
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.background,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 30,
    color: Color.white,
    textAlignVertical: "top",
    paddingLeft: 10
  },
})

export default InputTextStyle;

