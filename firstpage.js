import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SecondPage from './secondpage'
import AppHeader from '../Components/AppHeader';

export default class FirstPage extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text>Visit the second page</Text>

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
