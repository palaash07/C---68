import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstPage from './firstpage';
import AppHeader from '../Components/AppHeader';

export default class SecondPage extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text>Visit the first page</Text>
<AppHeader/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    background: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
