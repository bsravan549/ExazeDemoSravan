import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';
import Size from '../../utils/Size';

const InputTextStyle = StyleSheet.create({
  textinput: {
    height: Size.fourtyFive,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Size.two,
    borderColor: Color.subtitle,
    borderRadius: Size.ten,
    marginTop: Size.twenty,
    marginBottom: Size.fifty,
    marginRight: Size.thirty,
    color: Color.white,
    textAlignVertical: 'top',
    paddingLeft: Size.ten,
  },
});

export default InputTextStyle;
