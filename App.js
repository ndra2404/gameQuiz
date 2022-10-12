import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeScreen from 'screens/welcomeScreen';
import quizScreen from 'screens/quizScreen';
import {Provider} from 'react-redux';
import congratScreen from './src/screens/congratScreen';
import LeaderBoardScreen from './src/screens/leaderBoardScreen';
import {store} from 'redux/store';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={welcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QuestionScreen"
            component={quizScreen}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />
          <Stack.Screen
            name="CongratsScreen"
            component={congratScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="leaderBoardScreen"
            component={LeaderBoardScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
