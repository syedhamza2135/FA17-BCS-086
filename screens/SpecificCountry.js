import  React,{useState,useEffect} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native';


const SpecificCountry = ({ navigation,route }) => {
    const [getData, setData] = useState({
        "Country": "None",
        "CountryCode": "none",
        "Lat": "0",
        "Lon": "0",
        "Confirmed": 0,
        "Deaths": 0,
        "Recovered": 0,
        "Active": 0,
    });
    const [get1sData, set1sData] = useState({
        "Confirmed": 0,
        "Deaths": 0,
        "Recovered": 0,
        "Active": 0,
        "Date":0,
    });
    const [isLoading, setLoading] = useState(false);
   
    React.useEffect(() => {
        apiCall();
    }, [])
    var appender= route.params.countryto != undefined ? route.params.countryto :'none'
    console.log(appender)
    appender = appender ;
    let url = 'https://api.covid19api.com/dayone/country/' + appender;

    const apiCall = () => {
        const abortController = new AbortController()
        const signal = abortController.signal
        fetch(url,{signal:signal}).then(response => {
            response.json().then(responseData => {
                let myList = [];
                Object.keys(responseData).map(x => {
                    myList.push(responseData[x]);
                })
                if (myList.length === 0) {
                    myList.push({
                        "Country": "Pakistan",
                        "CountryCode": "PK",
                        "Lat": "30.38",
                        "Lon": "69.35",
                        "Confirmed": 0,
                        "Deaths": 0,
                        "Recovered": 0,
                        "Active": 0,
                        "FirstCaseDate": 0,
                        "NumberFirstDayActiveCase":0,

                    });
                }
                setData(myList[myList.length-1]);
                setLoading(true);
                console.log(myList[myList.length-1])
                set1sData(myList[0])
                console.log(myList[0])
            })
            return function cleanup(){
                abortController.abort()
            }
        }).catch(error => {
            console.log(error);
        })
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.textview}>First Day Report</Text>
        <View style={styles.ScrollView}>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Country : {getData.Country}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Country Code : {getData.CountryCode}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Lat : {getData.Lat}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Lon : {getData.Lon}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Date of 1st Case: {get1sData.Date}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Active : {get1sData.Active}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Confirmed : {get1sData.Confirmed}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Deaths : {get1sData.Deaths}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Recovered : {get1sData.Recovered}</Text>
            </View>
        </View>

        <Text style={styles.textview}>Current Stats</Text>
        <View style={styles.ScrollView}>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Active : {getData.Active}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Confirmed : {getData.Confirmed}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Deaths : {getData.Deaths}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
                <Text style={styles.ScrollViewText}>Recovered : {getData.Recovered}</Text>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center' 
    },
    ScrollViewItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:"grey",
      alignSelf: "center",
      padding: 7,
      margin:5,
      width: '70%',
      borderRadius: 10,
  
    },
    ScrollViewText:{
      fontSize: 18,
      color: 'white',
    },
    ScrollView:{
      width: '130%'
    },
    textview:{
        fontSize: 26, fontWeight: "bold",color: "black"
      },

  })
  
  export default SpecificCountry;
