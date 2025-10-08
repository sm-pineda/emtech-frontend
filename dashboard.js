import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ReviewPage from './pages/ReviewPage';
import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Review" component={ReviewPage} />
        <Stack.Screen name="UserList" component={UserListPage} />
        <Stack.Screen name="EditUser" component={EditUserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}