import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class StadiumHomeMain extends Component {
  state = {
    data: [],
  };
  constructor(props) {
    super(props);
    console.log('test');
    console.log(props);
    this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('http://192.168.1.10:8084/api/stadiums');
    const json = await response.json();
    this.setState({data: json.content.filter(data => data.account.lock == '0')});
    console.log('checkStalok', json.content.filter(data => data.account.lock != '0'));
  };

  onPressItem(
    idSta,
    nameStadium,
    address,
    description,
    sports,
    priceMin,
    priceMax,
    imgSta,
  ) {
    this.props.navigation.navigate('StadiumDetails');
    AsyncStorage.setItem('idstadium', JSON.stringify(idSta));
    AsyncStorage.setItem('namestadium', nameStadium);
    AsyncStorage.setItem('addressstadium', address);
    AsyncStorage.setItem('descriptionstadium', description);
    AsyncStorage.setItem('sportsstadium', sports);
    AsyncStorage.setItem('minprice', JSON.stringify(priceMin));
    AsyncStorage.setItem('maxprice', JSON.stringify(priceMax));
    AsyncStorage.setItem('imgstadium', imgSta);
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
          <View style={styles.cardView}>
            <TouchableOpacity
              onPress={() =>
                this.onPressItem(
                  item.idSta,
                  item.nameStadium,
                  item.address,
                  item.description,
                  item.sports,
                  item.priceMin,
                  item.priceMax,
                  item.imgSta,
                )
              }>
              <Image
                style={styles.image}
                source={{uri: `http://192.168.1.10:8084/${item.imgSta}`}}
              />
            </TouchableOpacity>
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>{`${item.nameStadium}`}</Text>
              <Text style={styles.itemDescription}>{`${item.sports}`}</Text>
              <Text style={styles.itemPrice}>{`${item.priceMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}đ ~ {`${item.priceMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}đ</Text>
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 5,
    padding: 5,
  },
  image: {
    width: 140,
    height: 120,
    resizeMode: 'stretch', 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textView: {
    flex: 1,
  },
  itemTitle: {
    color: '#454545',
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
    fontFamily: 'Montserrat-Bold',
  },
  itemDescription: {
    color: '#454545',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginTop: -5,
  },
  itemPrice: {
    color: '#454545',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat-Bold',
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 5,
  },
});
