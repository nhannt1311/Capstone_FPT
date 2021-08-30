/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const Search = ({navigation}) => {
  const [data, setData] = useState([]);
  const [sportDay, setSportDay] = useState('');
  const [search, setSearch] = useState('');
  console.log('chekcthethao', data);
  console.log('checkKieuNay', sportDay);

  useEffect(() => {
    getData();
    SportDay();
  }, []);

  async function getData() {
    const id_stadium = await AsyncStorage.getItem('idstadium');
    console.log('datchekc', id_stadium);
    const api = 'http://192.168.1.10:8084/api/stadiums/';
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          console.log('checkContent', data.content);
          return data.content;
        })
        .catch(err => {
          console.log(err);
        });
    });
    setData(result);
  }
  async function SportDay() {
    const sportDay = await AsyncStorage.getItem('nameSport');
    setSportDay(sportDay);
    console.log('spd', sportDay);
  }

  async function nextScreen(idSta1, nameStadium1, priceMin1,priceMax1,descriptionstadium1, imgstadium1,sportsstadium1,addressstadium1) {
    navigation.navigate('StadiumDetails');
    AsyncStorage.setItem('idstadium',JSON.stringify(idSta1));
    AsyncStorage.setItem('namestadium',nameStadium1);
    AsyncStorage.setItem('addressstadium',addressstadium1);
    AsyncStorage.setItem('descriptionstadium',descriptionstadium1);
    AsyncStorage.setItem('sportsstadium',sportsstadium1);
    AsyncStorage.setItem('minprice',JSON.stringify(priceMin1));
    AsyncStorage.setItem('maxprice',JSON.stringify(priceMax1));
    AsyncStorage.setItem('imgstadium',imgstadium1);
  }
  const [text, onChangeText] = React.useState(null);
  return (
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
        <View style={styles.searchContainer}>
          <Pressable style={styles.searchButton}>
            <Fontisto name="search" size={25} color={'#D0D0D0'} />
            <TextInput
              style={styles.input}
              value={text}
              placeholder="Tên sân, Tên môn thao"
              onChangeText={e => {
                setSearch(e);
              }}
            />
          </Pressable>
        </View>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={data.filter(val => {
            if (search == '') {
              return val;
            } else if (
              val.nameStadium.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else if (
              val.sports.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })}
          showsVerticalScrollIndicatorScrollIndicator={false}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                paddingBottom: 10,
                borderBottomWidth: 5,
                borderColor: '#F3F3F3',
              }}>
              <View style={styles.cardView}>
                <View style={styles.textView}>
                  <Text
                    style={{
                      color: '#454545',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>{`${item.nameStadium}`}</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#454545',
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                      paddingTop: 5,
                    }}>
                    Thể loại : {`${item.sports}`}
                  </Text>
                  <Text
                    style={{
                      color: '#00B14F',
                      fontSize: 12,
                      fontWeight: '500',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}>
                    Đang hoạt động
                  </Text>
                  <Text
                    style={{
                      color: '#454545',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                      paddingTop: 10,
                    }}>
                    {`${item.priceMin}`
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    đ ~{' '}
                    {`${item.priceMax}`
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    đ
                  </Text>
                </View>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'stretch', 
                    borderRadius: 2,
                  }}
                  source={{
                    uri: `http://192.168.1.10:8084/${item.imgSta}`,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  nextScreen(
                    item.idSta,
                    item.nameStadium,
                    item.priceMin,
                    item.priceMax,
                    item.description,
                    item.imgSta,
                    item.sports,
                    item.address,
                  )
                }>
                <Text style={styles.buttonText}>Chọn sân</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
  },
  newContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 100,
  },
  cardView: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  textView: {
    flex: 1,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 350,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchButton: {
    backgroundColor: '#F5F6FB',
    width: 280,
    marginLeft: 15,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
    borderRadius: 20,
    color: '#A0A0A0',
  },
});
export default Search;
