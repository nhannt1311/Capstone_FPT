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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ListHistory from '../components/ListHistory';
const DetailsScreen = ({navigation}) => {
  const [inputText, setInputText] = useState(null);
  const [inputText2, setInputText2] = useState(null);
  const [inputText3, setInputText3] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />

      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left-circle"
            size={25}
            color={'#2E3A59'}
            style={{marginLeft: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Lịch sử giao dịch</Text>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ListHistory navigation={navigation} />
      </SafeAreaView>
    </View>
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
    marginLeft: 80,
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
    width: 330,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
