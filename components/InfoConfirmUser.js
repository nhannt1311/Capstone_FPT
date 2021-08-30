/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const InfoConfirmUser = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 80,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 350,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
});
export default InfoConfirmUser;
