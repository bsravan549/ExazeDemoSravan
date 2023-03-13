
import { StyleSheet } from 'react-native';
import Color from '../utils/Color';

const LoginStyle = StyleSheet.create({
    mainview: {
      backgroundColor: Color.background,
      flex: 1,
    },
    title: {
      color: Color.white,
      fontSize: 25,
    },
    subtitle: {
      color: Color.subtitle,
      fontSize: 15,
      margin: 5,
      marginBottom: 10
    },
    textinput: {
      height: 50,
      justifyContent: "center",
      borderWidth: 2,
      borderColor: Color.primary,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 50,
      marginRight: 30,
      color: Color.white,
      textAlignVertical: "top",
      paddingLeft: 10
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