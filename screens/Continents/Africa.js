import  React,{useState,useEffect} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native';

const Africa = ({ navigation }) => {

    const [getData, setData] = useState([{
      "name": "none",
      "cases": "none",
      "deaths": 0,
      "continent": 0,
    }]
    );
    const [isLoading, setLoading] = useState(false);
   
    React.useEffect(() => {
        apiCall();
    }, [])
    let url = 'https://covid19-update-api.herokuapp.com/api/v1/world/continent/africa'
    const apiCall = () => {
      fetch(url).then(response => {
            response.json().then(responseData => {
                let myList = [];
                Object.keys(responseData).map(x => {
                    myList.push(responseData[x]);
                })
                console.log("no")
                setLoading(true);
                var arra1 = [].concat.apply([],myList)
              //  console.log("array 1 is ", arra1)
                setData(arra1)
                console.log(arra1.length)
                console.log(getData)
            })

        }).catch(error => {
            console.log(error);
        })
        
       
    }
    
    return (
      <View style={styles.flatList}>
      <FlatList
      data={getData}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
        >
          <View style={{...styles.ScrollView, flexDirection: "row", padding: 5 }}>
            <View style={{...styles.ScrollViewItem, paddingLeft: 5, paddingRight: 10 }}>
              <View style={{flexDirection:"column"}}>  
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>Country: {item.name}</Text>
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>Active Cases: {item.cases}</Text>
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>Total Deaths: {item.deaths}</Text>
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>Continent : {item.continent}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
      </View>   
      );
    }
    
    const styles = StyleSheet.create({
      container:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
      },flatList: { flex: 1, alignItems: 'center', justifyContent: 'center' }
      ,
        ScrollViewItem:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:"grey",
          alignSelf: "center",
          padding: 10,
          margin:5,
          width: '50%',
          borderRadius: 10,
      
        },
        ScrollViewText:{
          fontSize: 18,
          color: 'white',
        },
        ScrollView:{
          width: '190%'
        },
        textInput:{
          paddingTop:10,
          color:"black",
          borderColor: 'red',
          //borderWidth: 2,
          borderBottomWidth:2,
          width: "80%",
          fontSize: 24,
          //borderRadius: 40,
          fontSize: 16,
          padding: 10,
        },
    })
  
  export default Africa;
