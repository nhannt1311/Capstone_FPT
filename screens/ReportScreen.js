import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Report from '../components/Report';


const ReportScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Report navigation={navigation} />
    </SafeAreaView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
