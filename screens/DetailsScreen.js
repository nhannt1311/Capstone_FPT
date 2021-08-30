import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ListNew from '../components/ListNew';
const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={25} color={'#2E3A59'} />
        </TouchableOpacity> */}
        <Text style={styles.title}>Thông báo</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
        <ListNew />
      </View>
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
    paddingHorizontal: 20,
    marginBottom: 10,
    borderBottomWidth: 15,
    borderColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 110,
  },
});
