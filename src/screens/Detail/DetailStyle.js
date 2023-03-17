
import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
import Size from '../../utils/Size';

const DetailStyle = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: Color.background
  },
  title: {
    fontSize: Size.title,
    color: Color.white,
    margin: 10,
    marginTop: 20,
    marginLeft: 20
  },
  subtitle: {
    fontSize: Size.sub_title,
    color: Color.white,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: Size.body_text,
    color: Color.white,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  logoutButtonText: {
    fontSize: 15,
    color: Color.white,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: Color.blue,
    height: 40,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
})

export default DetailStyle;