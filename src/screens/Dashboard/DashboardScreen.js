import { Text, View, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slide-to-unlock';
import DashboardStyle from './DashboardStyle';
import Color from '../../utils/Color';
import Size from '../../utils/Size';
import { TouchableButton } from '../../components/TouchableButton/TouchableButton';
import { StringConstants } from '../../utils/StringConstants';

const DashboardScreen = ({ navigation }) => {
  const { inputValue } = useSelector(state => state.demoReducer);

  const buttonEventHandler = (buttonTitle) => {
    Alert.alert(buttonTitle + StringConstants.buttonAlertText);
  }

  return (
    <SafeAreaView style={DashboardStyle.mainview}>
      <Text style={DashboardStyle.headerTitle}>{DashboardStyle.helloText} {inputValue}</Text>
      <View style={DashboardStyle.buttonsView}>
        <Text style={DashboardStyle.buttonViewTitle}>{StringConstants.buttonsViewTitleText}</Text>

        <TouchableButton
          onClick={() => buttonEventHandler(StringConstants.firstAlertText)}
          buttonStyle={DashboardStyle.firstButton}
          buttonText={StringConstants.pressMeButtonText}
          buttonTextStyle={DashboardStyle.firstButtonText}
        />

        <TouchableButton
          onClick={() => buttonEventHandler(StringConstants.secondAlertText)}
          buttonStyle={DashboardStyle.secondButton}
          buttonText={StringConstants.pressMeButtonText}
          buttonTextStyle={DashboardStyle.secondButtonText}
        />

        <TouchableButton
          onClick={() => buttonEventHandler(StringConstants.thirdAlertText)}
          buttonStyle={DashboardStyle.thirdButton}
          buttonText={StringConstants.pressMeButtonText}
          buttonTextStyle={DashboardStyle.thirdButtonText}
        />

        <Slider
          childrenContainer={DashboardStyle.sliderContainer}
          onEndReached={() => {
            navigation.navigate(StringConstants.detailScreen)
          }}
          containerStyle={DashboardStyle.sliderContainerStyle}
          sliderElement={
            <View style={DashboardStyle.sliderElementView}>
              <Icon name={StringConstants.diamondIcon} style={DashboardStyle.sliderIconStyle} size={Size.icon_size} color={Color.white} />
            </View>
          }
        >
          <Text style={{ color: Color.blue, fontSize: Size.button_text }}>{StringConstants.silideMeButtonText}</Text>
        </Slider>
      </View>
    </SafeAreaView>
  )
}

export default DashboardScreen;