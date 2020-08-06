// components/Hello.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Routes/MainRoutes';

export interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

const Splash: React.FC<Props> = (props) => {
  setTimeout(() => props.navigation.replace('Login'), 1500);
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Welcome React App</Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    color: '#888',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default Splash;
