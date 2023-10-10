import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/home/TopBar';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <TopBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
