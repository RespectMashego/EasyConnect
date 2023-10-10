import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/home/TopBar';
import ChatList from '../components/home/ChatList';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <TopBar />
      <ChatList/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
