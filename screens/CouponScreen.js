import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import Coupon from '../components/Coupon';
const CouponScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Mã giảm giá</Text>
    </View>
    <View style={styles.newContainer}>
      <Coupon navigation={navigation} />
    </View>
  </SafeAreaView>
);

export default CouponScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 15,
    borderColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
  },
  newContainer: {
    flex: 1,
  },
});
