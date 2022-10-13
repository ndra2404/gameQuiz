/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Option from 'components/Option';
import usersSlice from 'redux/reducers/users.reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from 'react-native-elements';
import {storeLeaderboard} from 'redux/reducers/leaderboads.reducer';
const quizScreen = ({route, navigation}) => {
  const {index} = route.params;
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.users);
  const {questions, loading} = useSelector(state => state.questions);
  const {updateScore} = usersSlice.actions;
  return (
    <>
      <Header
        centerComponent={{
          text: 'Question no: ' + (index + 1) + '/' + questions.length,
          style: {color: '#fff'},
        }}
      />
      <View>
        <Text style={styles.Question}>
          No {index + 1} : {questions[index].question}
        </Text>
        {questions[index].answers.split('|').map((a, i) => (
          <>
            <Option
              value={a}
              key={i}
              index={i}
              onPress={item => {
                dispatch(
                  updateScore(item === questions[index].correct ? 1 : 0),
                );
                if (questions.length === index + 1) {
                  dispatch(
                    storeLeaderboard({
                      name: currentUser.name,
                      score:
                        currentUser.score +
                        (item === questions[index].correct ? 1 : 0),
                    }),
                  );
                  navigation.navigate('CongratsScreen');
                } else {
                  navigation.navigate('QuestionScreen', {
                    index: index + 1,
                  });
                }
              }}
            />
          </>
        ))}

        {/* <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
        /> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Question: {
    fontSize: 30,
    margin: 10,
  },
});

export default quizScreen;
