/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListBasketball from '../components/ListBasketball';
import ListSoccer from '../components/ListSoccer';
import ListTennis from '../components/ListTennis';

const TennisScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListTennis navigation={navigation} />
    </SafeAreaView>
  );
};

export default TennisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
