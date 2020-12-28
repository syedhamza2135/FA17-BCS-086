import  React,{useState,useEffect} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity, TextInput  } from 'react-native';


const StartScreen = ({ navigation }) =>{

    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [getCountry,setCountry]=useState("")
    const [getF,setF]=useState(getData);

    console.log(getCountry)

    const getAPIData = () => {
      return fetch('https://api.covid19api.com/countries')
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          setLoading(false);
          if(isLoading==true){
            setF(getData)
          }
        })
      .catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
      getAPIData();
    });
 
const Loading=(
    <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
        <Text>Loading Data from Covid-19 API ...</Text>
      </View>
);
 
  
  const selectCountry=(item)=>{
    setCountry(item.Slug)
  }   

 const FlatListData=(
  <View style={styles.flatList}>
        <FlatList
        data={getF}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Country',{countryto: item.Slug})}  >
            <View style={{...styles.ScrollView, flexDirection: "row", padding: 5 }}>
              <View style={{...styles.ScrollViewItem, paddingLeft: 5, paddingRight: 5 }}>
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>{item.Country}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
 ) ;

  const filterList=(text)=>{
      if(text==''){
          setF(getData);
          return;
      }
    var list=getData.filter(item=>item.Country.includes(text));
    setF(list);
  }
  
  return(

   <View style={styles.flatList}>
    <TextInput
        style={styles.textInput} 
        placeholder="Enter country to search"
        onChangeText={(text)=>filterList(text)}
    ></TextInput>
    {isLoading === true ? Loading : FlatListData}
    </View>
    );
  

}

  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center'
      , paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      flatList: { flex: 1, alignItems: 'center', justifyContent: 'center' },
      ScrollViewItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"grey",
        alignSelf: "center",
        padding: 10,
        margin:5,
        width: '80%',
        borderRadius: 10,
    
      },
      ScrollViewText:{
        fontSize: 18,
        color: 'white',
      },
      ScrollView:{
        width: '100%'
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
  
  export default StartScreen
/*

const StartScreen = ({ navigation }) =>{

    const [getData, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [getCountry,setCountry]=useState("")
    const [getF,setF]=useState(getData);
  

    
    console.log(getCountry)

    const getAPIData = () => {
      return fetch('https://api.covid19api.com/countries')
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          setData(responseJson);
          if(isLoading==true){
            setF(getData)
          }
        })
      // .catch((error) => {
      //   console.error(error);
      // });
    }

    useEffect(() => {
      getAPIData();
    });
  /*
    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data from JSON Placeholder API ...</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={getData}
            key={Math.floor(Math.random()*100)}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={Math.floor(Math.random()*100)}
                onPress={() => selectCountry(item)}
              >
                <View style={{ flexDirection: "row", padding: 5 }}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.Country}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
    */
   /*
   const Loading=(
    <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
        <Text>Loading Data from JSON Placeholder API ...</Text>
      </View>
  );
 
  const selectCountry=(item)=>{
    setCountry(item.Slug)
  }   

 const FlatListData=(
  <View style={styles.flatList}>
        <FlatList
        data={getF}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <View style={{ flexDirection: "row", padding: 5 }}>
              <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Text style={{fontSize: 20}}>{item.Country}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
 ) ;
const filterList=(text)=>{
      if(text==''){
          setF(getData);
          return;
      }
    var list=getData.filter(item=>item.Country.includes(text));
    setF(list);
  }
  
  
  return(
      /*
      <View style={styles.container}>
        <Text>(Screen 1)</Text>
        <Text>Welcome to My App</Text>
        <Button
          title="Global Information"
          onPress={()=> navigation.navigate('Dashboard',{id: 12, name: "Shah"})}
        >
        </Button>
        <Button title="Country Wise" onPress={()=>FetchAPIData}></Button>
      </View>
    */
   /*
   <View style={styles.flatList}>
    {isLoading === true ? Loading : FlatListData}
    </View>

    );
  

}

  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center'
      , paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      flatList: { flex: 1, alignItems: 'center', justifyContent: 'center' }
    })
  
  export default StartScreen
  
*/
