/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ListCoupon from '../components/ListCoupon';
import Feather from 'react-native-vector-icons/Feather';
import ConfirmInfo from '../components/ConfirmInfo';
const ListCouponScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left-circle"
          size={25}
          color={'#2E3A59'}
          style={{marginLeft: 20}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Ưu đãi thành viên</Text>
    </View>
    <View style={{flex: 1}}>
      <ConfirmInfo navigation={navigation} />
    </View>
    <View style={styles.newContainer}>
      <ListCoupon navigation={navigation} />
    </View>
  </SafeAreaView>
);

export default ListCouponScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 80,
  },
  newContainer: {
    flex: 3,
    paddingTop: 10,
  },
});
