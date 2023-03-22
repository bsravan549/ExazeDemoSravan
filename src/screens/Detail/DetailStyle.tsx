import {StyleSheet} from 'react-native';
import Color from '../../utils/Color';
import Size from '../../utils/Size';

const DetailStyle = StyleSheet.create({
  mainview: {
    flex: Size.one,
    backgroundColor: Color.background as any,
  },
  title: {
    fontSize: Size.title,
    color: Color.white as any,
    margin: Size.ten,
    marginTop: Size.twenty,
    marginLeft: Size.twenty,
  },
  subtitle: {
    fontSize: Size.sub_title,
    color: Color.white as any,
    marginTop: Size.ten,
    marginLeft: Size.twenty,
    fontWeight: 'bold',
  },
  body: {
    fontSize: Size.body_text,
    color: Color.white as any,
    marginTop: Size.ten,
    marginLeft: Size.twenty,
    marginRight: Size.twenty,
  },
  logoutButtonText: {
    fontSize: Size.fiften,
    color: Color.white,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: Color.blue as any,
    height: Size.fourty,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.eight,
    alignSelf: 'center',
    position: 'absolute',
    bottom: Size.thirty,
  },
});

export default DetailStyle;
