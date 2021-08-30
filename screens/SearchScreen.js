import React from 'react';
import {SafeAreaView, ScrollView, Dimensions, StyleSheet} from 'react-native';
import Search from '../components/Search';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Search navigation={navigation} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
