/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListStadium from '../components/ListStadium';
const StadiumScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListStadium navigation={navigation} />
    </SafeAreaView>
  );
};

export default StadiumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
