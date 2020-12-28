import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textview}>Welcome to Covid-19 Tracker App</Text>
        <View style={styles.innerView}>
          <View style={{ padding: 10 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Start')}>
            <View style={styles.ButtonCss}>
              <Text style={styles.ButtonText}>Country Wise Analysis</Text>
            </View>
          </TouchableOpacity>
   
{/*
          <Button style={styles.ButtonCss} title="Country Wise" 
            onPress={()=> navigation.navigate('Start') }/>
*/} 
            </View>
          <View style={{ padding: 10 }}>
{/**             <Button style={styles.ButtonCss} title="Global Information" onPress={()=> {navigation.navigate('Dashboard',{id: 12, name: "Shah"})}}/> */}
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {navigation.navigate('Dashboard',{id: 12, name: "Shah"})}}>
            <View style={styles.ButtonCss}>
              <Text style={styles.ButtonText}>Global Information</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
     </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center', 
    }, 
    ButtonCss:{
      paddingHorizontal:20,backgroundColor:"#ff336b",padding: 10,borderRadius:50,alignItems:"center"
    },
    ButtonText:{
      color:'white', fontSize:20
    },  
    innerView: {
      padding: 10
    },
    textview:{
      fontSize: 26, fontWeight: "bold",color: "black"
    },
  })
  
  export default HomeScreen;
