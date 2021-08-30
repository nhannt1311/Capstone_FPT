import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CheckOutSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <FontAwesome
            name="check-circle"
            size={25}
            color={'#00B14F'}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            size={100}
          />
          <Text style={styles.title}>Đặt sân thành công</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Vui lòng đến sân đúng giờ và đọc
            {/* họ tên người đặt sân và số điện
            thoại tại lễ tân để nhận sân */}
          </Text>
          <Text style={styles.subTitle1}>
            họ tên người đặt sân và số điện thoại
          </Text>
          <Text style={styles.subTitle}>tại lễ tân để nhận sân</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MainTabScreen')}>
          <Text style={styles.buttonText}>Quay về trang chủ</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 150,
  },
  title: {
    color: '#00B14F',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subTitleContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  subTitle: {
    color: '#454545',
    fontWeight: '600',
    fontSize: 18,
  },
  subTitle1: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 0,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CheckOutSuccess;
