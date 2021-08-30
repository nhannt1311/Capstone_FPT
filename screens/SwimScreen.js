/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListBasketball from '../components/ListBasketball';
import ListSoccer from '../components/ListSoccer';
import ListSwim from '../components/ListSwim';

const SwimScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListSwim navigation={navigation} />
    </SafeAreaView>
  );
};

export default SwimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
