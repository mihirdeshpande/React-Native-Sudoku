import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThreeByThreeGrid } from './components/threebythreegrid.js';
import { SudokuGrid } from './components/sudokugrid.js';
import {theme} from './styles/colors.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}>
	      <Text style={{ fontSize:35, color:theme.titleColor, fontWeight:'bold'}}>Sudoku</Text>
        </View>
        <View style={{flex:7, flexDirection:'row'}}>
          <SudokuGrid />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column' 
  },
});
