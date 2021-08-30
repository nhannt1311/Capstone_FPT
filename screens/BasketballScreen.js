/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListBasketball from '../components/ListBasketball';
import ListSoccer from '../components/ListSoccer';

const BasketballScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListBasketball navigation={navigation} />
    </SafeAreaView>
  );
};

export default BasketballScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
