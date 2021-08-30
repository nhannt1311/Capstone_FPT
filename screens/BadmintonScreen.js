/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListBadminton from '../components/ListBadminton';

const BadmintonScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListBadminton navigation={navigation} />
    </SafeAreaView>
  );
};

export default BadmintonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
