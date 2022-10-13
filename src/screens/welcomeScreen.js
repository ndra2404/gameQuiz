/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import usersSlice from 'redux/reducers/users.reducer';
import {fetchQuestions} from 'redux/reducers/question.reducer';

const welcomeScreen = ({navigation}) => {
  const {users} = useSelector(state => state.users);
  const {questions, loading} = useSelector(state => state.questions);
  const {setCurrentUser} = usersSlice.actions;
  const [Name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.welcomeScreen}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {/* <Text style={styles.welcomeText}>Welcome To Quiz App</Text>
      <Text style={styles.welcomeText}>Enter your name to Proceed...</Text> */}
      <TextInput
        style={styles.inputBox}
        value={Name}
        onChangeText={setName}
        placeholder="Masukan Nama"
        placeholderTextColor="black"
      />
      <Button
        icon={<Icon name="arrow-circle-right" size={70} color="blue" />}
        type="clear"
        onPress={() => {
          if (Name === '') {
            ToastAndroid.show(
              'Silahkan masukan nama Anda',
              ToastAndroid.CENTER,
            );
          } else {
            dispatch(
              setCurrentUser({
                name: Name,
                score: 0,
              }),
            );
            navigation.navigate('QuestionScreen');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 300,
    width: 400,
  },
  welcomeText: {
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
  },
  inputBox: {
    width: '85%',
    height: 40,
    margin: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#3700B3',
    marginTop: 60,
    color: 'black',
  },
});
export default welcomeScreen;
