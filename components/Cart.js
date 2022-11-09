import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet,Image,ScrollView} from 'react-native';

import {Card} from 'react-native-paper';
 export default function Cart({ navigation }) {

  const nextpage = (()=>{
     navigation.navigate('home')

  })
  return (
    <ScrollView>
    <View style={styles.container} >
<View>
<Image style={styles.img1} source={require('../assets/images/Arrow.jpg.png')} />

<Text style={styles.text}> Cart</Text>

 <Image style={styles.img2} source={require('../assets/images/Hearty.png')} />
</View>   



<Card style={styles.box1}> 
<Image style={styles.image1} source={require('../assets/images/seamussles.png')} />
<Image style={styles.image2} source={require('../assets/images/Ellipsey.png')} />
<Text  style={styles.icon8}> - 2 + </Text>
<Text  style={styles.text1}> R360 </Text>

</Card>

<Card style={styles.box2}> 
<Text style={styles.text2}>Prawns & Salad bar</Text>
<Image style={styles.image3} source={require('../assets/images/seamussles.png')} />

</Card>

    </View>
     </ScrollView>
  );
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
img1:{
marginTop:20,
},
text:{
height:52,
width:50,
fontFamily:'Inknut Antiqua',
fontWeight:'bold',
marginLeft:150,
marginTop:-30,
textDecorationLine:'center',
},
img2:{
marginLeft:320,
marginTop:-55,
},
box1:{
width:340,
  height:120,
  backgroundColor:'#A68383',
  marginLeft:10,
  marginTop:50,
},
image1:{
borderRadius:100,
height:100,
width:134,
},
image2:{
marginTop:-39,
marginLeft:158,
},
image3:{
  height:100,
  width:134,
  borderRadius:100,
  marginTop:-26,
  marginLeft:5,
},
icon8:{
fontfamily: 'Inknut Antiqua',
fontstyle: 'normal',
fontSize:18,
marginTop:-38,
marginLeft:190,
},
text1:{
height:26,
width:228,
fontFamily:'Inika',
fontWeight:'bold',
marginLeft:300,
marginTop:-5,
},
})