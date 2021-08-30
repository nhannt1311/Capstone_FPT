import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import ConfirmMatch from '../components/ConfirmMatch';
import MatchDone from '../components/MatchDone';
const MatchDoneScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={25} color={'#2E3A59'} />
        </TouchableOpacity>
        <Text style={styles.title}>Trận đấu đang chờ</Text>
      </View>
      <View style={{flex: 1, paddingVertical: 10}}>
        <MatchDone navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MatchDoneScreen;

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
    marginLeft: 70
  },
});
