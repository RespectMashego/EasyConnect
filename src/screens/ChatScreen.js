// ChatScreen.js

import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const messageScrollView = useRef(null);

  const dummyMessages = [
    { id: 1, text: 'Hello there!', sender: 'other' },
    { id: 2, text: 'Hi! How can I help you?', sender: 'self' },
    { id: 3, text: 'I have a question about the project.', sender: 'other' },
    { id: 4, text: 'Sure, feel free to ask.', sender: 'self' },
    // Add more dummy messages here
  ];

  const sendMessage = () => {
    // Implement logic to send the message
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>John Doe</Text>
        <View style={styles.callIcons}>
          <TouchableOpacity onPress={() => console.log('Video call')}>
            <MaterialIcons name="videocam" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Audio call')}>
            <MaterialIcons name="call" size={24} color="#333" style={{ marginLeft: 16 }} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        ref={messageScrollView}
        contentContainerStyle={styles.messagesContainer}
        onContentSizeChange={() => {
          if (messageScrollView.current) {
            messageScrollView.current.scrollToEnd({ animated: true });
          }
        }}
      >
        {dummyMessages.map((chat) => (
          <View
            key={chat.id}
            style={[
              styles.messageBubble,
              chat.sender === 'self' ? styles.selfMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{chat.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Messaging Input Section */}
      {/* ... Input code here ... */}

      {/* Messaging Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  callIcons: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
  },
  messagesContainer: {
    paddingHorizontal: 16,
  },
  messageBubble: {
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  selfMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  messageText: {
    color: 'white', // Set text color to match your design
  }
});

export default ChatScreen;
