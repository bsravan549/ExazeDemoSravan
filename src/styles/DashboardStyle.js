import { StyleSheet } from 'react-native';
import Color from '../utils/Color';
import Size from '../utils/Size';

const DashboardStyle = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: Color.background
  },
  headerTitle: {
    marginTop: 50,
    fontSize: Size.title,
    color: Color.white,
    margin: 10,
    textAlign: 'center'
  },
  buttonsView: {
    bottom: 20,
    width: '100%',
    marginBottom: '10%',
    position: 'absolute',
    justifyContent: 'center',
  },
  buttonViewTitle: {
    fontSize: Size.button_text,
    color: Color.yellow,
    alignSelf: 'center'
  },
  firstButtonText: {
    fontSize: Size.button_text,
    color: Color.blue,
    alignSelf: 'center'
  },
  firstButton: {
    elevation: 2,
    borderWidth: 0.2,
    marginTop: 50,
    backgroundColor: Color.background,
    alignSelf: 'center',
  },
  secondButtonText: {
    fontSize: Size.button_text,
    color: Color.blue,
    alignSelf: 'center'
  },
  secondButton: {
    width: '90%',
    elevation: 2,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: Color.buttonBG,
    alignSelf: 'center',
    padding: Size.button_padding,
  },
  thirdButtonText: {
    fontSize: Size.button_text,
    color: Color.white,
    alignSelf: 'center'
  },
  thirdButton: {
    width: '90%',
    elevation: 2,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: Color.blue,
    alignSelf: 'center',
    padding: Size.button_padding,
  },
})

export default DashboardStyle;