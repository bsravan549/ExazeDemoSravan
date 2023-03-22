import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';
import Size from '../../utils/Size';

const LoginStyle = StyleSheet.create({
  mainview: {
    backgroundColor: Color.background as any,
    flex: Size.one,
  },
  viewStyle: {
    marginTop: '30%',
    marginLeft: Size.thirty,
  },
  title: {
    color: Color.white as any,
    fontSize: Size.twentyFive,
  },
  subtitle: {
    color: Color.subtitle,
    fontSize: Size.fiften,
    margin: Size.five,
    marginBottom: Size.ten,
  },
  button: {
    backgroundColor: Color.blue as any,
    width: Size.oneFifty,
    height: Size.fourtyFive,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Size.two,
    borderRadius: Size.eight,
  },
  buttonText: {
    fontSize: Size.sixten,
    color: Color.white as any,
    fontWeight: 'bold',
  },
});

export default LoginStyle;
