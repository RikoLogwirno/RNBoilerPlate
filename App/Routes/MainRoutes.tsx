import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from '../redux/store';

// Import screens / stack
import SplashScreen from '../Screens/Splash';
import LoginScreen from '../Screens/Login';

export type RootStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export interface Props {}

const MainRoutes: React.FC<Props> = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{header: () => null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default MainRoutes;
