import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const DetailsScreen = ({navigation}) => {
  const [inputText1, setInputText1] = useState(null);
  const [inputText2, setInputText2] = useState(null);
  const [inputText3, setInputText3] = useState(null);
  const [text, onChangeText] = React.useState(null);

  async function changePass() {
    const passNe = await AsyncStorage.getItem('passNe');
    if (inputText1 !== null || inputText2 !== null || inputText3 !== null ){
    if(inputText1 === passNe){
      if(inputText2 !== passNe) {
      if (inputText3 === inputText2){
    const idAcc = await AsyncStorage.getItem('idAcc');
    var formdata = new FormData();
    formdata.append('password', inputText2);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/accounts/'+idAcc+'/changePassword',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        Alert.alert(
          'Đổi mật khẩu thành công'
        );
        navigation.navigate('MainTabScreen');
      })
      .catch(error => console.log('error', error));
      Alert.alert(
        'Đổi mật khẩu không thành công'
      );
  }else{
    Alert.alert(
      'Mật khẩu nhập lại không đúng. Vui lòng kiểm tra lại'
    );
  }
}else{
  Alert.alert(
    'Mật khẩu thay đổi trùng với mật khẩu cũ. Vui lòng kiểm tra lại'
  );
}
}else {
  Alert.alert(
    'Mật khẩu không đúng. Vui lòng kiểm tra lại'
  );
}
}else{
  Alert.alert(
    'Không được bỏ trống. Vui lòng kiểm tra lại'
  );
}
}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <ScrollView>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Đổi mật khẩu</Text>
        </View>
        <View style={styles.list}>
            <View style={styles.action}>
              <Text style={{fontSize:14, fontWeight:'500',color:'black'}}>Mật khẩu cũ</Text>
              <TextInput
                placeholder="Mật khẩu của bạn"
                placeholderTextColor="#666666"
                secureTextEntry={true}
                style={{
                  flex: 1,
                  marginTop: -12,
                  color: '#05375a',
                  position: 'relative',
                  left: 110
                }}       
                autoCapitalize="none"
                value={inputText1}
                onChangeText={setInputText1}
              />  
            </View>
            <View style={styles.action}>
              <Text style={{fontSize:14, fontWeight:'500',color:'black'}}>Mật khẩu mới</Text>
              <TextInput
                placeholder="Mật khẩu của bạn"
                placeholderTextColor="#666666"
                secureTextEntry={true}
                style={{
                  flex: 1,
                  marginTop: -12,
                  color: '#05375a',
                  position: 'relative',
                  left: 103
                }}      
                autoCapitalize="none"
                value={inputText2}
                onChangeText={setInputText2}
              />  
            </View>
            <View style={styles.action}>
              <Text style={{fontSize:14, fontWeight:'500',color:'black'}}>Nhập lại mật khẩu</Text>
              <TextInput
                placeholder="Mật khẩu của bạn"
                placeholderTextColor="#666666"
                secureTextEntry={true}
                style={{
                  flex: 1,
                  marginTop: -12,
                  color: '#05375a',
                  position: 'relative',
                  left: 75
                }}       
                autoCapitalize="none"
                value={inputText3}
                onChangeText={setInputText3}
              /> 
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => changePass()}>
              <Text style={styles.buttonText}>Đổi mật khẩu</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#F3F3F3',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
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
    marginLeft: 90,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20
  },
  subTitles: {
    width: 150,
    marginTop: 25,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#454545',
  },
  text: {
    width: 350,
    height: 60,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#454545',
    backgroundColor: '#F5F6FB',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonContainer: {
    paddingTop: 60,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 280,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
});
