import React, {useState, useEffect} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseUrl} from '../../baseUrl';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          console.log('token from async', token);
          navigation.replace('BottomTab');
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    checkUserStatus();
  }, []);

  const handleLogin = async () => {
    setLoading(!loading);
    try {
      const user = {
        email,
        password,
      };
      const response = await axios.post(`${baseUrl}/login`, user);
      console.log('Login was successful');
      const token = response.data.token;
      await AsyncStorage.setItem('authToken', token);
      console.log('authToken', token);
      navigation.replace('BottomTab');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Login failed with error', error);
      Alert.alert(
        'Login Error',
        'Please check your credentials and try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../src/assets/images/logo.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>
              {loading ? 'Logging..' : 'Login'}
            </Text>
          </TouchableOpacity>
          <Pressable
            style={styles.signupLink}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupText}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '80%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupLink: {
    marginTop: 20,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
});

export default LogInScreen;
