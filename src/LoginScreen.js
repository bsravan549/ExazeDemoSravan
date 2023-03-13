import { Alert, Text, View, TextInput, TouchableOpacity , Platform} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInputValue } from './redux/actions'
import { SafeAreaView } from 'react-native-safe-area-context'
import StringConstants from './utils/StringConstants'
import LoginStyle from './styles/LoginStyle';
import Color from './utils/Color'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onLoginPressHandler = () => {
    if (name === '') {
      Alert.alert('Exaze Demo', 'Please enter username', [
        { text: 'Okay' },
      ])
    }
    else {
      dispatch(setInputValue(name))
      navigation.navigate(StringConstants.dashBoardScreen)
    }
  }
  const [name, setName] = useState('')
  const value = value => {
    setName(value)
  }

  useEffect(() => {
      if (Platform.OS === 'android') {
        Alert.alert('Exaze Demo', 'You are using android emulator device');
      }
      else {
        Alert.alert('Exaze Demo', 'You are using iOS simulator device')
    }
  }, [])

  return (
    <SafeAreaView style={LoginStyle.mainview}>
      <View style={{ marginTop: '30%', marginLeft: 30 }}>
        <Text style={LoginStyle.title}>{StringConstants.login_welcome}</Text>
        <Text style={LoginStyle.subtitle}>{StringConstants.login_sub_title}</Text>
        <TextInput
          style={LoginStyle.textinput}
          placeholderTextColor={Color.placeHolderColor}
          placeholder={StringConstants.login_textField_placeholder}
          onChangeText={value}
        />
        <TouchableOpacity onPress={onLoginPressHandler} style={LoginStyle.button}>
          <Text style={LoginStyle.buttonText}>{StringConstants.login_nextButton}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen