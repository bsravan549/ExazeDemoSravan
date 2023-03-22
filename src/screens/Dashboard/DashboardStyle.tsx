import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';
import Size from '../../utils/Size';

const DashboardStyle = StyleSheet.create({
  mainview: {
    flex: Size.one,
    backgroundColor: Color.background as any,
  },
  headerTitle: {
    marginTop: Size.fifty,
    fontSize: Size.title,
    color: Color.white,
    margin: Size.ten,
    textAlign: 'center',
  },
  sliderContainerStyle: {
    margin: Size.two,
    borderColor: Color.black,
    backgroundColor: Color.black,
    borderRadius: Size.eight,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginLeft: Size.twentyTwo,
    marginTop: Size.eighteen,
    height: Size.fifty,
  },
  sliderStyle: {
    borderRadius: Size.eight,
    backgroundColor: Color.transperentColor,
  },
  sliderIconStyle: {
    width: Size.fifty,
    borderRadius: Size.eight,
  },
  sliderTextStyle: {
    color: Color.blue,
    fontSize: Size.button_text,
  },
  buttonsView: {
    bottom: Size.twenty,
    width: '100%',
    marginBottom: '10%',
    position: 'absolute',
    justifyContent: 'center',
  },
  buttonViewTitle: {
    fontSize: Size.button_text,
    color: Color.yellow,
    alignSelf: 'center',
  },
  firstButtonText: {
    fontSize: Size.button_text,
    color: Color.blue,
    alignSelf: 'center',
  },
  firstButton: {
    elevation: Size.two,
    borderWidth: 0.2,
    marginTop: Size.fifty,
    backgroundColor: Color.background as any,
    alignSelf: 'center',
  },
  secondButtonText: {
    fontSize: Size.button_text,
    color: Color.blue,
    alignSelf: 'center',
  },
  secondButton: {
    width: '90%',
    elevation: Size.two,
    borderRadius: Size.eight,
    marginTop: Size.twenty,
    backgroundColor: Color.buttonBG as any,
    alignSelf: 'center',
    padding: Size.button_padding,
  },
  thirdButtonText: {
    fontSize: Size.button_text,
    color: Color.white,
    alignSelf: 'center',
  },
  thirdButton: {
    width: '90%',
    elevation: Size.two,
    borderRadius: Size.eight,
    marginTop: Size.twenty,
    backgroundColor: Color.blue as any,
    alignSelf: 'center',
    padding: Size.button_padding,
  },
});

export default DashboardStyle;
