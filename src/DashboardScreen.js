import { Text, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slide-to-unlock';
import DashboardStyle from './styles/DashboardStyle';
import Color from './utils/Color';
import Size from './utils/Size';
import StringConstants from './utils/StringConstants';

const DashboardScreen = ({navigation}) => {
    const {inputValue} = useSelector(state => state.demoReducer);
    const firstButtonEventHandler = () => {
      Alert.alert(StringConstants.firstButtonAlertText)
    }

    const secondButtonEventHandler = () => {
      Alert.alert(StringConstants.secondButtonAlertText)
    }

    const thirdButtonEventHandler = () => {
      Alert.alert(StringConstants.thirdButtonAlertText)
    }
  
  return (
    <SafeAreaView style={DashboardStyle.mainview}>
      <Text style={DashboardStyle.headerTitle}>{StringConstants.helloText} {inputValue}</Text>
        <View style={DashboardStyle.buttonsView}>
          <Text style={DashboardStyle.buttonViewTitle}>{StringConstants.buttonsViewTitleText}</Text>
          <TouchableOpacity style={DashboardStyle.firstButton} onPress={firstButtonEventHandler}>
            <Text style={DashboardStyle.firstButtonText}>{StringConstants.pressMeButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={DashboardStyle.secondButton} onPress={secondButtonEventHandler}>
            <Text style={DashboardStyle.secondButtonText}>{StringConstants.pressMeButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={DashboardStyle.thirdButton} onPress={thirdButtonEventHandler}>
            <Text style={DashboardStyle.thirdButtonText}>{StringConstants.pressMeButtonText}</Text>
          </TouchableOpacity>
          <Slider
              childrenContainer={{backgroundColor: Color.black}}
              onEndReached={() => {
              navigation.navigate(StringConstants.detailScreen)
              }}
                containerStyle={{
                  margin: 2,
                  backgroundColor: Color.black,
                  borderRadius: 8,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  marginLeft: 22,
                  marginTop: 18
                }}
              sliderElement={
                <View style={{
                    width: 50,
                    margin: 4,
                    borderRadius: 8,
                    height: 50,
                    backgroundColor: Color.blue,
                  }}>
                <Icon name="diamond" style={{
                    alignSelf:'center',
                    marginTop:8
                  }} size={30} color="#ffffff" />
                  </View>
              }
            >
              <Text style={{color: Color.blue, fontSize: Size.button_text}}>{StringConstants.silideMeButtonText}</Text>
            </Slider>
        </View>
    </SafeAreaView>
  )
}

export default DashboardScreen