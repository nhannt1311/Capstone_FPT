/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import ListYards from '../components/ListYards';
const YardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListYards navigation={navigation} />
    </SafeAreaView>
  );
};

export default YardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
