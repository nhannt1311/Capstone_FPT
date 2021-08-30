/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ChooseDate from '../components/ChooseDate';



const ChooseDateScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ChooseDate navigation={navigation} />
    </SafeAreaView>
  );
};

export default ChooseDateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
