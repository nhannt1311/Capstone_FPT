/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ChangeInformationUser from '../components/ChangeInformationUser';

const InformationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Thông tin cá nhân</Text>
        </View>
        <View slyle={{flex: 1}}>
          <ChangeInformationUser navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
