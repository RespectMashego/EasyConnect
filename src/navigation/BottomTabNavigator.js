import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoryScreen from '../screens/StoryScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesgin from 'react-native-vector-icons/AntDesign';
import {colors} from '../styles/colors';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary.grey,
          height: 85,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="chatbubble" size={40} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Chat
                </Text>
              </View>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons
                  name="chatbubble-outline"
                  size={40}
                  color={'#040824'}
                />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Chat
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AntDesgin name="play" size={38} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Story
                </Text>
              </View>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AntDesgin name="playcircleo" size={38} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Story
                </Text>
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="navigate-circle" size={45} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Discover
                </Text>
              </View>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons
                  name="navigate-circle-outline"
                  size={45}
                  color={'#040824'}
                />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Discover
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome name="user" size={38} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Profile
                </Text>
              </View>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome name="user-o" size={40} color={'#040824'} />
                <Text style={{color: '#040824', textAlign: 'center'}}>
                  Profile
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
