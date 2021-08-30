/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';

const Review = ({navigation}) => {
  const [data, setData] = useState({
    iddSta: '',
    iddYa: '',
    namSta: '',
    dayy: '',
    periodd: '',
    sportss: '',
    imgNe: '',
    costNe: '',
  });
  const [comments, setComments] = useState('');
  const [text, onChangeText] = React.useState(null);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const iddSta = await AsyncStorage.getItem('iddSta');
    const iddYa = await AsyncStorage.getItem('iddYa');
    const namSta = await AsyncStorage.getItem('namSta');
    const dayy = await AsyncStorage.getItem('dayy');
    const periodd = await AsyncStorage.getItem('periodd');
    const sportss = await AsyncStorage.getItem('sportss');
    const imgNe = await AsyncStorage.getItem('picNe');
    const costNe = await AsyncStorage.getItem('costNe');
    setData({
      iddSta,
      iddYa,
      namSta,
      dayy,
      periodd,
      sportss,
      imgNe,
      costNe,
    });
  }
  async function addComment() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    const idSta = await AsyncStorage.getItem('iddSta');
    console.warn(comments);

    var formdata = new FormData();
    formdata.append('cmt', comments);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/comments/crecomments/' +
        idAcc +
        '/' +
        idSta,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        navigation.navigate('HistoryBook');
      })
      .catch(error => console.log('error', error));
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Đánh giá</Text>
        </View>
        <View style={{flex: 1, borderBottomWidth: 5, borderColor: '#F3F3F3', paddingBottom: 10}}>
          <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10}}>
          <Image
                style={{width: 75, height: 75, resizeMode: 'stretch'}}
                source={{
                  uri: `http://192.168.1.10:8084/${data.imgNe}`,
                }}
              />
              <View style={{flex: 2, paddingLeft: 10}}>
              <Text
                  style={{
                    color: '#454545',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {data.namSta}
                  </Text>
                  <Text
                  style={{
                    color: '#454545',
                    fontSize: 15,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {data.namYard}
                </Text>
                <Text
                  style={{
                    color: '#454545',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {`${data.dayy}`} {`${data.periodd}`}
                  </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{
                  fontWeight: '500',
                  color: '#00B14F',
                  fontSize: 12, 
                  position: 'relative',
                  right: -30}}>Hoàn thành
                </Text>
                <Text
                      style={{
                        color: '#00B14F',
                        fontWeight: '600',
                        fontSize: 14,
                        fontFamily: 'Montserrat-SemiBold',
                        paddingTop: 50,
                        paddingLeft: 20
                      }}>{data.costNe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
                    </Text>
          </View>
          </View>
        </View>
        <View style={{flex: 1, paddingVertical: 10, paddingHorizontal: 20}}>
              <Text
                style={{
                  color: '#454545',
                  fontSize: 16,
                  fontWeight: '600',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Lưu ý
              </Text>
              <Text
                style={{
                  color: '#454545',
                  fontSize: 13,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Đánh giá của bạn sẽ là thông tin tham khảo cho người sau và sẽ ảnh hưởng đến uy tin của sân vậy nên mong bạn đánh giá chính xác. Xin cảm ơn!
              </Text>
              <Text
                style={{
                  color: '#454545',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-SemiBold',
                  paddingTop: 10
                }}>
                Đánh giá
              </Text>
              <TextInput
                style={{
                  width: 350,
                  height: 140,
                  borderWidth: 1,
                  borderColor: '#6D6D6D',
                  marginTop: 10,
                  borderRadius: 7,
                  justifyContent: 'flex-start',
                  textAlignVertical: 'top',
                  fontSize: 15,
                }}
                onChangeText={e => {
                  setComments(e);
                }}
                value={text}
                multiline={true}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#00B14F', 
                  width: 120, 
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 115,
                  marginTop: 20
                }}
                onPress={
                  () => addComment()
                  //   nextScreen(item.idYa, item.nameYard, item.price, item.capacity)
                }>
                <Text style={{
                  color: '#FFFFFF',
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                  }}>Gửi Đánh Giá</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    paddingTop: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
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
    width: 330,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default Review;
