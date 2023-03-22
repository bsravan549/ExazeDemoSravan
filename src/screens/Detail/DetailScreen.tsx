import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {StringConstants} from '../../utils/StringConstants';
import DetailStyle from './DetailStyle';
import {TouchableButton} from '../../components/TouchableButton/TouchableButton';
import {RootState} from '../../redux/store';

type DetailProps = {
  navigation: any;
};

const DetailScreen = ({navigation}: DetailProps) => {
  const {inputValue} = useSelector((state: RootState) => state.demoReducer);
  const onPressLogoutHandler = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={DetailStyle.mainview}>
      <Text style={DetailStyle.title}>
        {StringConstants.helloText} {inputValue}
      </Text>
      <Text style={DetailStyle.subtitle}>
        {StringConstants.detailSubTitleText}
      </Text>
      <Text style={DetailStyle.body}>{StringConstants.detailBodyText}</Text>

      <TouchableButton
        onClick={() => onPressLogoutHandler()}
        buttonStyle={DetailStyle.logoutButton}
        buttonText={StringConstants.logout}
        buttonTextStyle={DetailStyle.logoutButtonText}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
