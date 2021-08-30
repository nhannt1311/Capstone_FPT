import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class ListNew extends Component {
  state = {
    data: [],
    data1: [],
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('http://192.168.1.10:8084/api/new');
    const json = await response.json();
    this.setState({data: json});
  };
  
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Image
                  style={styles.image}
                  source={{uri: `http://192.168.1.10:8084/${item.imgNew}`}}
                />
                <View style={{flex: 1, paddingLeft: 10}}>
                  <Text>{`${item.titleNew}`}</Text>
                  <Text>{`${item.shortDescription}`}</Text>
                </View>
                <FontAwesome name="circle" size={15} color={'#00B14F'} />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
