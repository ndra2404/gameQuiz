import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Leaderboard from 'react-native-leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchleaderboards,
  storeLeaderboard,
} from 'redux/reducers/leaderboads.reducer';
import {Header} from 'react-native-elements';
const LeaderBoardScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchleaderboards());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {leaderboards} = useSelector(state => state.leaderboards);
  const [Data, setData] = useState([{name: 'Aman', score: 200}]);
  console.log('datal', leaderboards);
  return (
    <View>
      <Header
        centerComponent={{
          text: '',
          style: {color: '#fff'},
        }}
      />
      <Text style={styles.HeadLeaderboard}>LeaderBoard 📊</Text>
      <Leaderboard data={leaderboards} sortBy="score" labelBy="name" />
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  HeadLeaderboard: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
});
