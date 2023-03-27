/* eslint-disable @typescript-eslint/no-shadow */
import {Alert, Platform, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginStyle from './LoginStyle';
import {StringConstants} from '../../utils/StringConstants';
import {TouchableButton} from '../../components/TouchableButton/TouchableButton';
import {setInputValue} from '../../redux/actions';
import {InputText} from '../../components/InputText/InputText';
import {NativeModules} from 'react-native';

type LoginProps = {
  navigation: any;
  name: string;
};

const LoginScreen = ({navigation}: LoginProps) => {
  const [name, setName] = useState('');
  const value = (value: React.SetStateAction<string>) => {
    setName(value);
  };
  const dispatch = useDispatch();
  const onLoginPressHandler = () => {
    if (name === '') {
      Alert.alert('Exaze Demo', 'Please enter username');
    } else {
      dispatch(setInputValue(name));
      navigation.navigate(StringConstants.dashBoardScreen);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      NativeModules.DeviceTypeInfo.userDeviceType((value: string) => {
        Alert.alert('Exaze Demo', `You are using iOS ${value}`);
      });
    } else {
      const {EmulatorChecker} = NativeModules;
      EmulatorChecker.isEmulator((result: string) => {
        if (result === 'emulator') {
          Alert.alert('Exaze Demo', `You are using android ${result}`);
        } else {
          Alert.alert('Exaze Demo', `You are using ${result}`);
        }
      });
    }
  }, []);

  return (
    <SafeAreaView style={LoginStyle.mainview}>
      <View style={LoginStyle.viewStyle}>
        <Text style={LoginStyle.title}>{StringConstants.login_welcome}</Text>
        <Text style={LoginStyle.subtitle}>
          {StringConstants.login_sub_title}
        </Text>

        <InputText
          placeholder={StringConstants.login_textField_placeholder}
          onChangeText={value}
        />

        <TouchableButton
          onClick={() => onLoginPressHandler()}
          buttonStyle={LoginStyle.button}
          buttonText={StringConstants.login_nextButton}
          buttonTextStyle={LoginStyle.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
