import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SettingsScreen = ({navigation}) => {
  const [inputText, setInputText] = useState(null);
  const [inputText2, setInputText2] = useState(null);
  const [inputText3, setInputText3] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đổi mật khẩu</Text>
      <View style={styles.list}>
        <Text style={styles.subTitles}>Mật khẩu cũ</Text>
        <TextInput
          style={styles.text}
          secureTextEntry={true}
          placeholder=""
          value={inputText}
          onChangeText={setInputText}
        />
        <Text style={styles.subTitles}>Mật khẩu mới</Text>
        <TextInput
          style={styles.text}
          secureTextEntry={true}
          placeholder=""
          value={inputText2}
          onChangeText={setInputText2}
        />
        <Text style={styles.subTitles}>Nhập lại mật khẩu</Text>
        <TextInput
          style={styles.text}
          secureTextEntry={true}
          placeholder=""
          value={inputText3}
          onChangeText={setInputText3}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Change Btn clicked')}>
            <Text style={styles.buttonText}>Xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Hủy bỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  list: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    width: 310,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
