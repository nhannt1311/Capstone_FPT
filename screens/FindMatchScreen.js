/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import FindMatch from '../components/FindMatch';
const FindMatchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FindMatch navigation={navigation} />
    </SafeAreaView>
  );
};

export default FindMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 5,
    marginLeft: 50,
  },
});
