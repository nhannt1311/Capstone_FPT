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
import AsyncStorage from '@react-native-community/async-storage';
export default class Coupon extends Component {
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

  onPressItem(titleCoupon, shortDescription, timeEnd, imgCoupon) {
    this.props.navigation.navigate('CouponDetails');
    AsyncStorage.setItem('titlecp', titleCoupon);
    AsyncStorage.setItem('shortcp', shortDescription);
    AsyncStorage.setItem('timecp', timeEnd);
    AsyncStorage.setItem('imgcp', imgCoupon);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.onPressItem(
                  item.titleCoupon,
                  item.shortDescription,
                  item.timeEnd,
                  item.imgCoupon,
                )
              }>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{uri: `http://192.168.1.10:8084/${item.imgCoupon}`}}
              />
              <View style={{flex: 1, paddingLeft: 15}}>
                <Text
                  style={{
                    color: '#454545',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>{`${item.titleCoupon}`}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454545',
                    fontWeight: '600',
                    paddingTop: 10,
                  }}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}>
                  {`${item.shortDescription}`}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454545',
                    fontWeight: '600',
                    paddingTop: 10,
                  }}>
                  Hạn sử dụng: {`${item.timeEnd.split('T')[0]}`}
                </Text>
              </View>
              
            </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 75,
    resizeMode: 'stretch', 
    borderRadius: 5,
  },
});
