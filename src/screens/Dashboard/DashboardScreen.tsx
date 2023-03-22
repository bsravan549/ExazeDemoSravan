import {Text, View, Alert, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import DashboardStyle from './DashboardStyle';
import Color from '../../utils/Color';
import {TouchableButton} from '../../components/TouchableButton/TouchableButton';
import {StringConstants} from '../../utils/StringConstants';
import {RootState} from '../../redux/store';
import SwipeButton from 'rn-swipe-button';

type DashBoardProps = {
  navigation: any;
};

const DashboardScreen = ({navigation}: DashBoardProps) => {
  const arrowImage = require('../../assets/thumbIcon.png');
  const {inputValue} = useSelector((state: RootState) => state.demoReducer);

  const buttonEventHandler = (buttonTitle: string) => {
    Alert.alert(buttonTitle + StringConstants.buttonAlertText);
  };

  return (
    <SafeAreaView style={DashboardStyle.mainview}>
      <Text style={DashboardStyle.headerTitle}>
        {StringConstants.helloText} {inputValue}
      </Text>
      <View style={DashboardStyle.buttonsView}>
        <Text style={DashboardStyle.buttonViewTitle}>
          {StringConstants.buttonsViewTitleText}
        </Text>
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
        <SwipeButton
          containerStyles={DashboardStyle.sliderContainerStyle}
          railBackgroundColor={Color.black}
          railStyles={DashboardStyle.sliderStyle}
          thumbIconImageSource={arrowImage}
          thumbIconStyles={DashboardStyle.sliderIconStyle}
          title={StringConstants.silideMeButtonText}
          titleStyles={DashboardStyle.sliderTextStyle}
          onSwipeSuccess={() => {
            navigation.navigate(StringConstants.detailScreen);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
