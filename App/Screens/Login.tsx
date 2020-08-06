// components/Hello.tsx
import React from 'react';
import {TextInput, StyleSheet, Text, View, Button} from 'react-native';
import {RootStackParamList} from '../Routes/MainRoutes';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {change, reset} from '../redux/reducer/LoginReducer';

const mapStateToProps = (state) => ({LoginData: state.LoginReducer});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({change, reset}, dispatch);

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof reduxConnector>;

type Props = PropsFromRedux & {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const App: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.formCont}>
        <Text style={styles.greeting}>LOGIN</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(t) => props.change({username: t})}
          />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(t) => {
              props.change({password: t});
              // console.log('submit => ', props.LoginData);
            }}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.submitBtn}>
          <Button
            onPress={() => console.log('submit => ', props.LoginData)}
            title="Submit"
            color="#6666FF"
            accessibilityLabel="Submit login information"
          />
        </View>
      </View>
    </View>
  );
};

export default reduxConnector(App);

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  formCont: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: '#FFF',
    width: '80%',
    justifyContent: 'center',
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 20,
    marginBottom: 12,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginVertical: 5,
  },
  submitBtn: {
    marginTop: 20,
  },
});
