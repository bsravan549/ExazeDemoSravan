import {Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import DetailStyle from './styles/DetailStyle';
import StringConstants from './utils/StringConstants';

const DetailScreen = ({ navigation }) => {
  const { inputValue } = useSelector(state => state.demoReducer);
  const onPressLogoutHandler = () => {
    navigation.popToTop();
  }
  return (
    <SafeAreaView style={DetailStyle.mainview}>
      <Text style={DetailStyle.title}>{StringConstants.helloText} {inputValue}</Text>
      <Text style={DetailStyle.subtitle}>{StringConstants.detailSubTitleText}</Text>
      <Text style={DetailStyle.body}>{StringConstants.detailBodyText}</Text>
      <TouchableOpacity onPress={onPressLogoutHandler} style={DetailStyle.logoutButton}>
        <Text style={DetailStyle.logoutButtonText}>{StringConstants.logout}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DetailScreen