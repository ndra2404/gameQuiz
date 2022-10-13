import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Divider} from 'react-native-elements';
import PieChart from 'react-native-pie-chart';
import {Button} from 'react-native-elements';
import Questions from '../questions.json';
import {useSelector} from 'react-redux';
const CongratScreen = ({navigation}) => {
  const {currentUser} = useSelector(state => state.users);
  const {questions} = useSelector(state => state.questions);
  const widthAndHeight = 150;
  const score = currentUser?.score;
  const series = [score, questions.length - score];
  const sliceColor = ['#00FF00'];
  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {currentUser?.name}, You've scored {score} points
      </Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.7}
        coverFill={'#FFF'}
      />
      <Text style={styles.scoreStyle}>{score}</Text>
      <Divider width={100} />
      <Button
        title="View Leaderboard"
        type="solid"
        onPress={() => {
          navigation.navigate('leaderBoardScreen');
        }}
        containerStyle={{
          width: 200,
          marginVertical: 10,
        }}
      />
      <Button
        title="Ulangi"
        type="solid"
        containerStyle={{
          width: 200,
        }}
        onPress={() => {
          navigation.navigate('WelcomeScreen', {
            index: 0,
          });
        }}
      />
    </View>
  );
};

export default CongratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 20,
  },
  scoreStyle: {
    position: 'relative',
    bottom: 105,
    fontSize: 45,
    fontWeight: '800',
  },
});
