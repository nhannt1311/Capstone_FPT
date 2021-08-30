/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListPingpong from '../components/ListPingpong';

const PingpongScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListPingpong navigation={navigation} />
    </SafeAreaView>
  );
};

export default PingpongScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
