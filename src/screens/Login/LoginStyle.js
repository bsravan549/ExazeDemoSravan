
import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const LoginStyle = StyleSheet.create({
  mainview: {
    backgroundColor: Color.background,
    flex: 1,
  },
  viewStyle: {
    marginTop: '30%',
    marginLeft: 30
  },
  title: {
    color: Color.white,
    fontSize: 25
  },
  subtitle: {
    color: Color.subtitle,
    fontSize: 15,
    margin: 5,
    marginBottom: 10
  },
  button: {
    backgroundColor: Color.blue,
    width: 150,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: Color.white,
    fontWeight: 'bold',
  },
})

export default LoginStyle;