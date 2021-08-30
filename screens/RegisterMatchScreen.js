/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import RegisterMatch from '../components/RegisterMatch';
const RegisterMatchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RegisterMatch navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterMatchScreen;

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
