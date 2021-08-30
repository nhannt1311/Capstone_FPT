/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import CheckOut from '../components/CheckOut';

const CheckOutScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CheckOut navigation={navigation} />
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
