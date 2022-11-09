import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet,Image,ScrollView} from 'react-native';

import {Card} from 'react-native-paper';
 export default function Order({ navigation }) {

  const nextpage = (()=>{
     navigation.navigate('home')

  })
  return (
    <ScrollView>
    <View style={styles.container} >
<View>
<Image style={styles.img1} source={require('../assets/images/Arrow.jpg.png')} />

<Text style={styles.text}> SEAFOODY RESTURANT</Text>
 <Image style={styles.img2} source={require('../assets/images/Hearty.png')} />
</View>   
    <Image style={styles.image33} source={require('../assets/images/seamussles.png')} />

<Text  style={styles.text2}> SEA FOOD </Text>
<Text style={styles.text3}>  R360 </Text>

<Image source={require('../assets/images/Star.png')} />
<Image style={styles.icon2} source={require('../assets/images/Star.png')} />
<Image style={styles.icon3} source={require('../assets/images/Star.png')} />
<Image style={styles.icon4} source={require('../assets/images/Star.png')} />

<Card style={styles.box1}> 
<Image style={styles.icon5} source={require('../assets/images/Hot.png')} />
<Text style={styles.textbox1}>
hot spice
</Text>

<Image style={styles.icon6} source={require('../assets/images/source.jpg.png')} />
<Text style={styles.textbox2}>
Mild
</Text>
<Image style={styles.icon7} source={require('../assets/images/Ellipse.png')} />

<Text style={styles.icon8}> - 2 +</Text>
</Card>

<Card style={styles.box2}> 

<Text style={styles.text1}>
Details
</Text>

<Text style={styles.text4}>
SeaFoody is a seafood restaurant serving the best authentic fish, steak and sushi in a fun, family-friendly environment. That's why everyone loves SeaFoody!
</Text>
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
img2:{

marginLeft:300,
marginTop:-30,
},
text:{
height:26,
width:228,
fontFamily:'Inika',
fontWeight:'bold',
marginLeft:90,
marginTop:-30,
},
image33:{
marginLeft:30,
},
text2:{
height:26,
width:228,
fontFamily:'Inika',
fontWeight:'bold',
marginTop:30,
},
text3:{
height:26,
width:228,
fontFamily:'Inika',
fontWeight:'bold',
marginLeft:280,
marginTop:-30,
},
icon2:{
  marginLeft:30,
  marginTop:-30

},
icon3:{
  marginLeft:60,
  marginTop:-30

},
icon4:{
  marginLeft:90,
  marginTop:-30
},
box1:{
  width:340,
  height:50,
  backgroundColor:'#FFFFFF',
  marginLeft:10,

},
box2:{
  width:340,
  height:120,
  backgroundColor:'#FFFFFF',
  margin:10,
},
icon5:{
  width:30,
  height:30,
  marginTop:10,
},
icon6:{
  width:30,
  height:30,
  marginLeft:100,
  marginTop:-30,
},
icon7:{
marginTop:-38,
marginLeft:225,
},
icon8:{
marginTop:-38,
marginLeft:260,
fontfamily: 'Inknut Antiqua',
},
textbox1:{
  marginLeft:30,
  marginTop:-20,
  fontfamily: 'Inknut Antiqua'
},
textbox2:{
  marginLeft:130,
  marginTop:-20,
  fontfamily: 'Inknut Antiqua',
},
text1:{
textDecorationLine:'center',
fontFamily:'Inika',
fontWeight:'bold',


},
text4:{
fontFamily:'Inika',
fontSize:14,
lineHeight:21,
fontStyle:'normal',
},
})