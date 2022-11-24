import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet,Image,ScrollView} from 'react-native';
import seamussles from '../assets/images/seamussles.png'

import {Card} from 'react-native-paper';
 export default function Order({ navigation,route }) {

  const nextpage = (()=>{
  navigation.navigate('home')
  })

  return (
    <ScrollView>
    <View style={styles.container} >
<View>


<Text style={styles.text}> SEAFOODY RESTURANT</Text>

</View>   
    <Image style={styles.image33} source={seamussles} />


<TouchableOpacity style={styles.subborder}onPress={()=> navigation.navigate('Order',{menuTitle:"Full Deck platter", image:require('../assets/images/prawns.png') , price:"R140"})}>
<Text  style={styles.text2}> {route.params.menuTitle} </Text>
<Text style={styles.text3}>  {route.params.price} </Text>
<Text style={styles.text3}>  {route.params.description} </Text>

</TouchableOpacity>

<Card style={styles.box1}> 
<Image source={require('../assets/images/Star.png')} />
<Image style={styles.icon2} source={require('../assets/images/Star.png')} />
<Image style={styles.icon3} source={require('../assets/images/Star.png')} />
<Image style={styles.icon4} source={require('../assets/images/Star.png')} />

<TouchableOpacity >
<Image style={styles.icon7} source={require('../assets/images/Ellipse.png')} />

<Text style={styles.icon8}> - 2 +</Text>
</TouchableOpacity>
</Card>

<Card style={styles.box2}> 

<Text style={styles.text1}>
Details
</Text>

<Text style={styles.text4}>
SeaFoody is a seafood restaurant serving the best authentic fish, steak and sushi in a fun, family-friendly environment. That's why everyone loves SeaFoody!
</Text>

</Card>

<TouchableOpacity style={styles.subborder2}>
<Text style={styles.subborder1}>Add to Cart</Text>
</TouchableOpacity>
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
  marginTop:10,

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
marginTop:-25,
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
    subborder1:{
      width:134,
      height:36,
      marginLeft:20,
      fontFamily:'Inknut Antiqua',
      fontSize:14,
      fontWeight:'bold',
  },
  subborder2:{
    width:120,
    height:30,
    marginLeft:100,
    fontFamily:'Inter',
    marginTop:10,
    backgroundColor:'#A68383',
    borderRadius:60,
  },
})