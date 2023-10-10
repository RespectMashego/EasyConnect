// ChatList.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const dummyChats = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: 'https://placekitten.com/50/50', // Replace with actual avatar URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: "What's up?",
    time: '9:45 AM',
    avatar: 'https://placekitten.com/55/55', // Replace with actual avatar URL
  },
  // Add more dummy data here
];

const ChatList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        // Navigate to the chat screen when a chat is selected
        navigation.navigate('Chat', { chatId: item.id });
      }}
    >
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyChats}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatContent: {
    flex: 1,
    marginLeft: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
  },
  lastMessage: {
    color: 'gray',
  },
});

export default ChatList;
