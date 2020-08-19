import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigation} from 'react-navigation-tab';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});

const TabNavigation = createBottomTabNavigation({
  ScanScreen:{screen: ScanScreen},
  SearchScreen:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigation);

