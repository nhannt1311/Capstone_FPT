/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListSoccer from '../components/ListSoccer';

const SoccerScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListSoccer navigation={navigation} />
    </SafeAreaView>
  );
};

export default SoccerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
