import {
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';


const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    //send POST request to api to register the user
    axios
      .post(`${baseUrl}/register`, user)
      .then(response => {
        console.log(response);
        
        Alert.alert(
          'registration succesfully',
          'You have been registerd successfulyy',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => {
        console.log('error', err);
        Alert.alert(
          'registration error',
          'an  error occured while registering',
        );
      });
  };

  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: width * 0.3,
              height: height * 0.2,
            }}
            source={require('../assets/images/logo.png')}
          />
          <Text
            style={{
              color: '#0e336e',
              fontSize: 22,
              fontWeight: '600',
              marginTop: 15,
            }}>
            Register in to ShakeMatch
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 30,
              width: width * 0.9,
              paddingLeft: 20,
              fontSize: email ? 18 : 18,
            }}
            placeholderTextColor="black"
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 30,
              width: width * 0.9,
              paddingLeft: 20,
              fontSize: email ? 18 : 18,
              marginTop: 20,
            }}
            placeholderTextColor="black"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 30,
              width: width * 0.9,
              paddingLeft: 20,
              marginTop: 20,
              fontSize: password ? 18 : 18,
            }}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Pressable style={{marginTop: 20}} onPress={handleRegister}>
            <Text
              style={{
                width: '100%',
                backgroundColor: '#0e336e',
                padding: 15,

                marginRight: 'auto',
                marginLeft: 'auto',
                color: 'white',
                borderRadius: 29,
                textAlign: 'center',
              }}>
              Register
            </Text>
          </Pressable>
          <Pressable
            style={{marginTop: 10}}
            onPress={() => navigation.goBack()}>
            <Text style={{textAlign: 'center', fontSize: 16, color: 'gray'}}>
              Already have an account? Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
