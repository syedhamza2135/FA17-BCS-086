import   React ,{useEffect,useState} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome,FontAwesome5,SimpleLineIcons,MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "./screens/HomeScreen"
import DashBoardScreen from "./screens/DashboardScreen"
import StartScreen from "./screens/StartScreen"
import SpecificCountry from "./screens/SpecificCountry"
import Asia from "./screens/Continents/Asia"
import Africa from "./screens/Continents/Africa"
import southAmerica from "./screens/Continents/southAmerica"
import northAmerica from "./screens/Continents/northAmerica"
import australia from "./screens/Continents/australia"
import Europe from "./screens/Continents/Europe"

const Tab = createMaterialBottomTabNavigator();

const tabScreenEurope=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="EuropeCountry" component={Europe} options={({navigation}) => ({
      headerTitle:"Europe",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const tabScreenaustralia=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="australiaCountry" component={australia} options={({navigation}) => ({
      headerTitle:"Australia",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const tabScreennorthAmerica=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="northAmericaCountry" component={northAmerica} options={({navigation}) => ({
      headerTitle:"North America",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const tabScreensouthAmerica=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="southAmericaCountry" component={southAmerica} options={({navigation}) => ({
      headerTitle:"South America",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const tabScreenAfrica=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="AfricaCountry" component={Africa} options={({navigation}) => ({
      headerTitle:"Africa",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const tabScreenAsia=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="AsienCountry" component={Asia} options={({navigation}) => ({
      headerTitle:"Asia",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Asia"
    activeColor="white"
    inactiveColor="grey"
    shifting={true}
    barStyle={{ 
      backgroundColor: 'white',
      paddingTop: 5
   }}
    >
      <Tab.Screen name="Asia" component={tabScreenAsia} 
        options={{
          tabBarColor: "#D02760",
          tabBarIcon: ({color}) => <FontAwesome5 name="globe-asia" size={24} color={color} />
        }}
      />
      <Tab.Screen name="Africa" component={tabScreenAfrica} 
      options={{
        tabBarColor: "#006D69",
        tabBarIcon: ({color}) => <FontAwesome5 name="globe-africa" size={24} color={color} />
      }}/>
      <Tab.Screen name="SouthAmerica" component={tabScreensouthAmerica} 
      options={{
        tabBarColor: "#6518f4",
        tabBarIcon: ({color}) => <FontAwesome5 name="globe-americas" size={24}  color={color} />
      }}/>
      <Tab.Screen name="North America" component={tabScreennorthAmerica} 
      options={{
        tabBarColor: "#1f65ff",
        tabBarIcon: ({color}) => <FontAwesome5 name="globe-americas" size={24} color={color} />
      }}/>
      <Tab.Screen name="Australia" component={tabScreenaustralia} 
      options={{
        tabBarColor: "#37265b",
        tabBarIcon: ({color}) => <FontAwesome5 name="globe-asia" size={24} color={color} />
      }}/>
      <Tab.Screen name="Europe" component={tabScreenEurope} 
      options={{
        tabBarColor: "#341234",
        tabBarIcon: ({color}) => <FontAwesome5 name="globe-europe" size={24} color={color} />
      }}/>
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
        <Drawer.Navigator 
          openByDefault={true}
          drawerType="slide"
          drawerStyle={{
            //backgroundColor: 'lightblue',
            width:300,
          }}
        > 
          <Drawer.Screen name="Home" component={StackNavigator} 
            options={{
            drawerLabel:"Welcome Home",
            drawerIcon: () => <Ionicons name="md-home" size={32}/>
          }}
          />
          <Drawer.Screen name="CountryWise" component={DrawerScreen12} options={{
            drawerLabel:"Screen 1",            drawerIcon: () => <MaterialIcons name="screen-share" size={24} color="black" />
          }}/>
          {/** 
          <Drawer.Screen name="CountryWise" component={StartScreen}

          options={{
            drawerLabel:"Screen 1",
            drawerIcon: () => <MaterialIcons name="screen-share" size={24} color="black" />,
          }}
          />
          */}

          <Drawer.Screen name="Glob" component={DrawerScreen3} options={{
            drawerLabel:"Screen 2",
            drawerIcon: () => <MaterialIcons name="screen-share" size={24} color="black" />
          }}/>
          
          {/* <Drawer.Screen name="Globally" component={DashBoardScreen} 
          options={{
            headerShown: true,
            drawerLabel:"Screen 2",
            drawerIcon: () => <MaterialIcons name="screen-share" size={24} color="black" />,
          }}/>*/}

          <Drawer.Screen name="DrawerTab" component={MyTabs} 
          options={{
            drawerLabel:"Screen 4",
            headerRight:  () => <View style={{paddingRight:10}}>            
            <Ionicons name="ios-build" size={24} color="black" />
          </View>,
            drawerIcon: () => <SimpleLineIcons name="drawer" size={24} color="black" />,
          }}
          />
      </Drawer.Navigator>
    
  );
}

const DrawerScreen3=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="Globalley" component={DashBoardScreen} options={({navigation}) => ({
      headerTitle:"Global Information",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const DrawerScreen12=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="Start" component={StartScreen} options={({navigation}) => ({
      headerTitle:"Country Wise",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
      <View style={{paddingRight:10}}>
      <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>

    <Stack.Screen name="Country" component={SpecificCountry} options ={({navigation})=>({
      title: "Specific Country",
      headerRight:  () => <View style={{paddingRight:10}}>            
      <Ionicons name="ios-build" size={24} color="black" />
    </View>,
      headerLeft: () => 
        <View style={{padding:10}}>  
          <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
      </View>
    })}/>
    </Stack.Navigator>
  )
}

const StackNavigator =()=>{

  return(
    <Stack.Navigator 
        //initialRouteName={'Home'}
        screenOptions={({navigation}) => ({
            headerTitleAlign: "Center",
            headerTintColor: "black",
            headerStyle:{
              backgroundColor: "lightgrey"
            },
            headerLeft: () =>
            <View style={{paddingLeft:10}}>
              <Ionicons
              name="md-menu" 
              size={30}
              onPress={()=>navigation.toggleDrawer()}/>
            </View> 
            
        })}
        >

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options ={{
            title: "Welcome",
            headerTitle:"Welcome",
            headerRight:  () => 
                <View style={{paddingRight:10}}>            
                  <Ionicons name="ios-build" size={24} color="black" />
                </View>
                }} />

        <Stack.Screen name="Start" component={StartScreen} options={({navigation}) => ({
          headerTitle:"Country Wise",
          headerRight:  () => <View style={{paddingRight:10}}>            
          <Ionicons name="ios-build" size={24} color="black" />
        </View>,
          headerLeft: () => 
          <View style={{paddingRight:10}}>
          <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
          </View>
        })}/>

        <Stack.Screen name="Dashboard" component={DashBoardScreen} options ={({navigation})=>({
            title: "Global Summery",
            headerTitle:"Global Summery",
            headerRight:  () => <View style={{paddingRight:10}}>            
            <Ionicons name="ios-build" size={24} color="black" />
          </View>,
            headerLeft: () => 
              <View style={{padding:10}}>  
                <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
            </View>
          })}/>

          <Stack.Screen name="Country" component={SpecificCountry} options ={({navigation})=>({
            title: "Specific Country",
            headerRight:  () => <View style={{paddingRight:10}}>            
            <Ionicons name="ios-build" size={24} color="black" />
          </View>,
            headerLeft: () => 
              <View style={{padding:10}}>  
                <Ionicons name="ios-arrow-round-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
            </View>
          })}/>
   

      </Stack.Navigator>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containers:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
    , paddingTop: 10,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  container:{
    flex: 1, alignItems: 'center', justifyContent: 'center' 
  },
})

export default App;
