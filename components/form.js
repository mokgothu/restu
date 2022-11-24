import React from 'react';
import { View, Text,TextInput, TouchableOpacity , StyleSheet,Image,ScrollView} from 'react-native';

 
 import {Card} from 'react-native-paper';
 export default function Form({ navigation }) {

return(
  <View> 
  
  <Text style={{ fontStyle:'italic' , color:'#000',  fontSize:30}}>Enter Details</Text>

 <TextInput placeholder="name" style={styles.input}  onChangeText={(name)=> setName(name)} />

 <TextInput placeholder="email" style={styles.input}  onChangeText={(email)=> setEmail(email)} />

 <TextInput placeholder="cell" style={styles.input}  onChangeText={(cell)=> setCell(cell)} />

 <TextInput placeholder="street" style={styles.input}  onChangeText={(street)=> setStreet(street)}/>

 <TextInput placeholder="suburb" style={styles.input}  onChangeText={(suburb)=> setSuburb(suburb)}/>
  
  <TouchableOpacity style={styles.btn} onPress={''}>
<Text style={{ fontSize:20, color: '#000', fontStyle:'italic', paddingLeft:30, paddingTop:12}}>Submit</Text>
</TouchableOpacity>
  
  </View>
  
);

 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    padding: 8,
  },
   btn :{
    backgroundColor:"#A68383",
    width:117,
    height:52,
    borderRadius:30,
    marginTop:30
  

  }, 

  input:{
    backgroundColor:'#A68383',
    borderRadius:30,
    width:265,
    height:62,
    paddingLeft:15,
    marginTop:30,
    color:'white',           
    fontStyle:'italic',
    fontSize:20,

  }
  
});

