import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity , StyleSheet,Image,ScrollView} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './config/firebase';
import {Card} from 'react-native-paper';


 export default function SignIn({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const sigin = (()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigation.navigate('Home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage)
    });
  


  })

  
  const SignUp = (()=>{
    
     navigation.navigate('SignUp')

  })

  
  return (
   
    <View style={styles.container} >
    <Card style= {styles.box}> 
    <Image style={styles.img1} source={require('../assets/images/Sea.jpg')} />
</Card>

<Card style={styles.container1}>

<Text style={styles.heading}>SEAFOODY RESTURANT</Text>

 <Text style={styles.signinHeader}>SIGN IN</Text>

 <Text style={styles.text}  > Email:</Text>

<TextInput placeholder="Enter Email" style={styles.input} onChangeText={(email => setEmail(email))} />

   <Text style={styles.text}   > Password:</Text>
        <TextInput placeholder="Enter Password" style={styles.input} onChangeText={(password => setPassword(password))} />

  <TouchableOpacity style={styles.btn1}  onPress={sigin}
          
        >
          <Text style={styles.signinText}   > SIGN IN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}
          onPress={SignUp}
        >
          <Text style={styles.signupText}> SIGN UP </Text>
        </TouchableOpacity>
        
</Card>

</View>
  
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A68383',
    padding: 8,
  },

  box:{
  width:340,
 height:230,
  borderRadius:50,
  },

  container1:{
backgroundColor: '#FFFF',
 justifyContent:'center',
 width: 330,
 height: 400,
 borderRadius:20,
 marginTop:-15,
  },

  img1:{
   width:340,
 height:230,
 justifyContent:'center',
 borderRadius:50,
  },
  heading:{
 width: 151,
 height: 34,
 marginLeft: 70,
 marginTop: 21,
 fontfamily: 'Inika',
fontstyle: 'normal',
fontweight: 400,
fontsize: 20,
lineheight: 26,
 
  },
  signinHeader:{
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color: '#00000'
  },
  text:{
    marginLeft: 45,
    marginTop: 20,
    fontWeight: '500',
    fontSize: 15,
  },
  input:{
  height: 44,
    width: 227,
    margin: 5,
    borderWidth: 1,
    marginLeft:40,
    borderColor: '#A68383',
   backgroundColor: '#FFFF',
  },


 btn1:{
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A68383',
    marginTop: 30,
    marginLeft: 30,
 },
 signinText:{
  textAlign: 'center',
    marginTop: 10,
    color: '#000',
    fontWeight: '500',
 },
 btn2:{
   width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A68383',
    marginLeft: 200,
    marginTop: -40,
 },
 signupText:{
   textAlign: 'center',
    marginTop: 10,
    color: '#000',
    fontWeight: '500',
 },
});