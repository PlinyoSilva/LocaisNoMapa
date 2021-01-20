import React, { useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard,
    LogBox,
  } from 'react-native';

import styles from '../../assets/styles';

import AuthContext from '../../contexts/auth';

export default function Login(props) {
    // const signed = useContext(AuthContext);
    //     console.log(signed);

    function handleLogin() {
        console.log('Logar');
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 305, y:60}));

    useEffect(() => {
    
    keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    keyboardDidHideListener
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    Animated.parallel([
      
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100
      })
    ]).start();
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('../../assets/logo.png')}
          />
        </View>

        <Animated.View style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.buttonSubmit} onPress={()=>props.navigation.navigate('Map')}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister} onPress={()=>props.navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>Criar conta</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
    
}