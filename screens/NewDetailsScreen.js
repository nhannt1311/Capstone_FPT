/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
export default class NewDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {titlenew: null};
    this.state = {shortnew: null};
    this.state = {contentnew: null};
    this.state = {imgnew: null};
    this.loadCredentials();
  }

  async loadCredentials() {
    try {
      const titlenew = await AsyncStorage.getItem('titlenew');
      const shortnew = await AsyncStorage.getItem('shortnew');
      const contentnew = await AsyncStorage.getItem('contentnew');
      const imgnew = await AsyncStorage.getItem('imgnew');
      this.setState({titlenew: titlenew});
      this.setState({shortnew: shortnew});
      this.setState({contentnew: contentnew});
      this.setState({imgnew: imgnew});
    } catch (error) {
      // Manage error handling
    }
  }

  render() {
    const {titlenew} = this.state;
    const {shortnew} = this.state;
    const {contentnew} = this.state;
    const {imgnew} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Feather
                name="arrow-left-circle"
                size={25}
                color={'#2E3A59'}
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Thông tin sự kiện</Text>
          </View>
          <View style={styles.newContainer}>
            <Image
              style={{width: 330, height: 200, borderRadius: 10, resizeMode: 'stretch'}}
              source={{uri: `http://192.168.1.10:8084/${imgnew}`}}
            />
          </View>
          <View style={styles.titlenew}>
            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
              }}>
              {titlenew}
            </Text>

            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }}>
              {shortnew}
            </Text>

            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }}>
              {contentnew}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  newContainer: {
    flex: 1,
    borderColor: '#F3F3F3',
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 10,
    borderTopWidth: 10,
  },
  title: {
    color: '#454545',
    fontSize: 18,
    marginRight: 110,
    padding: 10,
    marginTop: -10,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  titlenew: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
