/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default class ListCoupon extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('http://192.168.1.10:8084/api/coupon');
    const json = await response.json();
    this.setState({data: json});
    console.log(json);
  };

  onPressItem(
    idCp,
    titleCoupon,
    codeCoupon,
    shortDescription,
    content,
    percentDiscount,
    timeEnd,
    imgCoupon,
  ) {
    this.props.navigation.navigate('CheckOut');
    AsyncStorage.setItem('idcoupon', JSON.stringify(idCp));
    AsyncStorage.setItem('titlecp', titleCoupon);
    AsyncStorage.setItem('codecp', codeCoupon);
    AsyncStorage.setItem('shortcp', shortDescription);
    AsyncStorage.setItem('contentcp', content);
    AsyncStorage.setItem('percentcp', JSON.stringify(percentDiscount));
    AsyncStorage.setItem('timeendcp', JSON.stringify(timeEnd));
    AsyncStorage.setItem('imgcp', imgCoupon);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Montserrat-SemiBold',
            color: '#454545',
            paddingLeft: 20,
          }}>
          Mã giảm giá của bạn
        </Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  this.onPressItem(
                    item.idCp,
                    item.titleCoupon,
                    item.codeCoupon,
                    item.shortDescription,
                    item.content,
                    item.percentDiscount,
                    item.timeEnd,
                    item.imgCoupon,
                  )
                }>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.image}
                  source={{uri: `http://192.168.1.10:8084/${item.imgCoupon}`}}
                />
                <View style={{flex: 1,paddingHorizontal: 10}}>
                  <Text
                    style={{
                      color: '#454545',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>{`${item.titleCoupon}`}</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#454545',
                      fontWeight: '600',
                      paddingTop: 5,
                    }}>
                    Giá trị Coupon: {`${item.percentDiscount}`}%
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#454545',
                      fontWeight: '600',
                      paddingTop: 5,
                    }}>
                    Hạn sử dụng: {`${item.timeEnd.split('T')[0]}`}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.onPressItem(
                    item.idCp,
                    item.titleCoupon,
                    item.codeCoupon,
                    item.shortDescription,
                    item.content,
                    item.percentDiscount,
                    item.timeEnd,
                    item.imgCoupon,
                  )
                }>
                <Text style={styles.buttonText}>Tiếp tục ngay</Text>
              </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderColor: '#F3F3F3',
  },
  image: {
    width: 150,
    height: 75,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
});
