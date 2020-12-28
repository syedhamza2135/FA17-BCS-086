import  React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet ,TouchableOpacity} from 'react-native';

const DashBoardScreen = ({ navigation , route }) =>{
      const [getRecord,setRecords]=useState({"Country": "None",
      "CountryCode": "none",
      "Slug": "none",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-05-29T02:12:51Z"},);
      
      React.useEffect(() => {
      
        apiCall();
        
        
    }, [])
    let url = "https://api.covid19api.com/summary"
    
    const apiCall = () => {
        fetch(url).then(response => {
            response.json().then(responseData => {
                let myList = [];
                Object.keys(responseData).map(x => {
                    myList.push(responseData[x]);
                })
                /*
                if (myList.length === 0) {
                    myList.push({
                      "Country": "None",
                      "CountryCode": "none",
                      "Slug": "none",
                      "NewConfirmed": 103063,
                      "TotalConfirmed": 5780056,
                      "NewDeaths": 5299,
                      "TotalDeaths": 362488,
                      "NewRecovered": 63132,
                      "TotalRecovered": 2349437,
                      "Date": "2020-05-29T02:12:51Z"
                    });
                }*/
                console.log(myList[0])
                console.log("no")
                console.log(getRecord)
                /*
                setRecords({"Country": "None",
                "CountryCode": "none",
                "Slug": "None",
                "NewConfirmed": myList[0].NewConfirmed,
                "TotalConfirmed": myList[0].TotalConfirmed,
                "NewDeaths": myList[0].NewDeaths,
                "TotalDeaths": myList[0].TotalDeaths,
                "NewRecovered": myList[0].NewRecovered,
                "TotalRecovered": myList[0].TotalRecovered,
                "Date": "None"});
                */
                setRecords(myList[0])
                console.log("After")
                console.log(getRecord)
            })
    
        }).catch(error => {
            console.log(error);
        })

       
    }
    
    return(
      <View style={styles.container}>      
        <Text style={styles.textview}>Global Information</Text>
        <View style={styles.ScrollView}>
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>New Confirmed Cases : {getRecord.NewConfirmed} </Text>
            </View>
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>Total Confirmed Cases : {getRecord.TotalConfirmed}</Text>
            </View>
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>New Deaths : {getRecord.NewDeaths}</Text>
            </View> 
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>Total Deaths: {getRecord.TotalDeaths}</Text>
            </View> 
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>New Recovered: {getRecord.NewRecovered}</Text>
            </View> 
            <View style={styles.ScrollViewItem}>
            <Text style={styles.ScrollViewText}>Total Recovered: {getRecord.TotalRecovered}</Text>
            </View> 
        </View>
        {/* <Button title="Black" onPress={()=> navigation.goBack()} > </Button> */}    
        <View style={{ padding:10 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.goBack()}>
            <View style={{...styles.ButtonCss, height:45, alignSelf:"flex-start"}}>
              <Text style={styles.ButtonText}>Back To Home</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*<View style={{Padding:10}}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.popToTop()}>
            <View style={{...styles.ButtonCss, height:45, alignSelf:"flex-start"}}>
              <Text style={styles.ButtonText}>Back To Home</Text>
            </View>
          </TouchableOpacity>
    </View>*/}
      
        </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center' 
    },
    ButtonCss:{
      paddingHorizontal:20,backgroundColor:"#ff336b",padding: 10,borderRadius:50,alignItems:"center"
    },
    ButtonText:{
      color:'white', fontSize:20
    },
    wholetext:{
      fontSize:20,
      alignContent:"center",
      alignItems:"center",
    },resultText:{
      fontSize:20,
      fontWeight:"bold"
    },
    textview:{
      fontSize: 26, fontWeight: "bold",color: "black"
    },
    ScrollViewItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:"grey",
      alignSelf: "center",
      padding: 10,
      margin:5,
      width: '70%',
      borderRadius: 10,
  
    },
    ScrollViewText:{
      fontSize: 18,
      color: 'white',
    },
    ScrollView:{
      width: '100%'
    },  
  })
  
  export default DashBoardScreen;


  // In App.js in a new project
