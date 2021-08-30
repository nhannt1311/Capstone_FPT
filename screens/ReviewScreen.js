import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Report from '../components/Report';
import Review from '../components/Review';

const ReviewScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Review navigation={navigation} />
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
