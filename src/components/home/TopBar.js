import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const TopBar = () => {
  return (
    <View
      style={{
        backgroundColor: colors.primary.grey,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: Dimensions.get('window').height * 0.1,
          width: Dimensions.get('window').width * 0.1,
          marginLeft:5
        }}
        source={require('../../assets/images/logo.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <AntDesign name="search1" color={colors.primary.black} size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            name="dots-three-vertical"
            style={{marginLeft: 15}}
            color={colors.primary.black}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
