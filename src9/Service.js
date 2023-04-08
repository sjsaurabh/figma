import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Service({navigation}) {
  return (
    <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 120,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          
         
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 5,marginTop:40 }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={25}
            style={{}}
            color="pink"
          />
          <Text style={{ fontSize: 18, color: "white" }}> New Common Area Request</Text>
        </View>
      </View>
      <View></View>
      <Text></Text>
      <View style={{backgroundColor:'#f1f2f6', width:"90%" ,height:50,alignSelf:"center",borderWidth:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:15}}>
      
      <View> 
      <Text>Emergency?</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <FontAwesome5 name="phone-square-alt" size={27} color="#20c997" style={{ }}/>
      <Text>  8005566</Text>
      </View>
      </View>
      <View style={{marginVertical:10}}>
      <Text style={{marginLeft:18,marginVertical:10}}>Common Area</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Air-Conditioning failure</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>

      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Service Type</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Water leak</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>

      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Issue Description</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Water leak</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>
      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Title</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Water leak</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>
      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Caller Name</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Water leak</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>
      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Caller Mobile Number</Text>
      <View style={{width:"90%",height:45,borderWidth:1,alignSelf:"center"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      <Text>Water leak</Text>
      <Ionicons name='chevron-down' size={27} color="#20c997"/>
      </View>
      </View>
      </View>
      <View style={{marginVertical:10}} >
      <Text style={{marginLeft:18,marginVertical:10}}>Description</Text>
      <View style={{width:"90%",height:145,borderWidth:1,alignSelf:"center",borderColor:"grey"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
      
      </View>
      </View>
      </View>
      <View>
      <Text style={{marginLeft:21,marginVertical:15}}>Attach Images/Video(Option)</Text>
      <View style={{width:"90%",height:45,alignSelf:"center",borderColor:"grey",backgroundColor:"#ffcccc"}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent: "space-between",marginTop:5,paddingHorizontal:10}}>
       <Text style={{textAlign:"center",marginLeft:85,marginTop:7}}>Attach Images/Videos</Text>
      </View>
      </View>
      </View>
      <View style={{marginTop:20
      }}>
      
       <TouchableOpacity style={{backgroundColor:"black",width:"80%",height:45,flexDirection:"row",alignItems:"center",alignContent:"center",justifyContent:"center",marginLeft:40,}}
       onPress={()=>navigation.navigate("ModalUiii")}
       >
       <Text>     </Text><Ionicons name='chevron-forward-outline' size={27} color="#20c997"/>
       <Text  style={{color:"white",textAlign:"center",fontSize:20}}>SUMMIT</Text>
       </TouchableOpacity>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
    height: 45,
    margin: 15,
    alignSelf: "center",
  },
});
