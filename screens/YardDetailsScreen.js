/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Yard from '../components/Yard';

const YardDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Yard navigation={navigation} />
    </SafeAreaView>
  );
};

export default YardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
