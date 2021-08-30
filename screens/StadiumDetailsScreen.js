/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Stadium from '../components/Stadium';
const StadiumDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Stadium navigation={navigation} />
    </SafeAreaView>
  );
};

export default StadiumDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
