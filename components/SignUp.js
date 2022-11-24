import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './config/firebase';
import { Card } from 'react-native-paper';

export default function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const[Surname, setSurname] = useState('');

  const home = (() => {
    navigation.navigate('Home')
  })

  const signup = (() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        navigation.navigate('SignIn')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorMessage)


      });

  })


  return (

    <View style={styles.container} >

      <Card style={styles.box2}>
        <Image style={styles.img12} source={require('../assets/images/Sea.jpg')} />
      </Card>

      <Card style={styles.container1}>

        <Text style={styles.heading}>SEAFOODY RESTURANT</Text>

        <Text style={styles.signinHeader}>SIGN UP</Text>

        <Text style={styles.text}   > Name:</Text>
        <TextInput placeholder="Enter Name" style={styles.input} onChangeText={(Name => setName(Name))} />

        <Text style={styles.text}   > Surname:</Text>
        <TextInput placeholder="Enter Surname" style={styles.input} onChangeText={(Surname => setSurname(Surname))} />

 

        <Text style={styles.text}  > Email:</Text>

        <TextInput placeholder="Enter Email" style={styles.input} onChangeText={(email => setEmail(email))} />

        <Text style={styles.text}   > Password:</Text>
        <TextInput placeholder="Enter Password" style={styles.input} onChangeText={(password => setPassword(password))} />

        

        <TouchableOpacity style={styles.btn1} onPress={signup} >
          <Text style={styles.signinText} > SIGN UP </Text>
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
  box2: {
    width: 340,
    height: 230,
    borderRadius: 50,
  },
  container1: {
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    width: 330,
    height: 430,
    borderRadius: 20,
    marginTop: -15,
  },
  img12: {
    width: 340,
    height: 230,
    justifyContent: 'center',
    borderRadius: 50,
  },

  heading: {
    width: 151,
    height: 34,
    marginLeft: 70,
    marginTop: 10,
    fontfamily: 'Inika',
    fontstyle: 'normal',
    fontweight: 400,
    fontsize: 20,
    lineheight: 26,

  },

  signinHeader: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -5,
    color: '#00000'
  },

  text: {
    marginLeft: 45,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 15,
  },

  input: {
    height: 44,
    width: 227,
    margin: 5,
    borderWidth: 1,
    marginLeft: 40,
    marginTop: -2,
    borderColor: '#A68383',
    backgroundColor: '#FFFF',
  },

  btn1: {
    width: 100,
    height: 40,
    borderRadius: 20,
    marginTop:-10,
    backgroundColor: '#A68383',
    marginTop: 10,
    marginLeft: 110,
  },

  signinText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
    fontWeight: '500',
  },

  signupText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
    fontWeight: '500',
  },
});
