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

export default class NewHomeMain extends Component {
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
    const response = await fetch('http://192.168.1.10:8084/api/new');
    console.log('abc', response);
    const json = await response.json();
    this.setState({data: json});
    console.log(json);
  };

  onPressItem(titleNew, shortDescription, content, imgNew) {
    this.props.navigation.navigate('NewDetails');
    AsyncStorage.setItem('titlenew', titleNew);
    AsyncStorage.setItem('shortnew', shortDescription);
    AsyncStorage.setItem('contentnew', content);
    AsyncStorage.setItem('imgnew', imgNew);
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
                  item.titleNew,
                  item.shortDescription,
                  item.content,
                  item.imgNew,
                )
              }>
              <Image
                style={styles.image}
                source={{uri: `http://192.168.1.10:8084/${item.imgNew}`}}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 200,
    resizeMode: 'stretch', 
    borderRadius: 10,
  },
  cardView: {
    flex: 1,
    backgroundColor: 'white',
    margin: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    padding: 5,
  },
  textView: {
    flex: 1,
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'black',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
