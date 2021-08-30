import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import InfoMatch from '../components/InfoMatch';
const MatchInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, paddingVertical: 10}}>
        <InfoMatch navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MatchInfoScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#F3F3F3',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderBottomWidth: 15,
    borderColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 80,
  },
});
