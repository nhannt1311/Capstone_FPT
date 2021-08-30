/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListAll from '../components/ListAll';
import ListBadminton from '../components/ListBadminton';

const MoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListAll navigation={navigation} />
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
