/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListBasketball from '../components/ListBasketball';
import ListSoccer from '../components/ListSoccer';
import ListVolleyball from '../components/ListVolleyball';

const VolleyballScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListVolleyball navigation={navigation} />
    </SafeAreaView>
  );
};

export default VolleyballScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
