import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';

import { Card } from 'react-native-paper';

export default function Home({

  navigation }) {

  const nextpage = (()=>{
     navigation.navigate('Order')

  })
  return (
    <ScrollView>
    <View style={styles.container}>
    
<TouchableOpacity onPress={nextpage}>
    <Image style={styles.icon1} source={require('../assets/images/sushiiii.jpg')} />
</TouchableOpacity>
<View style={{ alignItems: 'center', justifyContent:'center', backgroundColor:'#ffff'}}>


<Image  style={styles.icon2} source={require('../assets/images/sushiiii.jpg')} />


  <Image style={styles.icon3} source={require('../assets/images/John-Dory-8-Mussels.png')} />

<Image style={styles.icon4} source={require('../assets/images/veg.jpg')} />

<Image style={styles.icon5} source={require('../assets/images/fodo.jpg')} />
   </View>

<Text style={styles.header}>Recommended</Text>

<View style={styles.borders1}>
<Image style={styles.box1} source={require('../assets/images/prawns.png')} />


<TouchableOpacity style={styles.subborder}  onPress={()=> navigation.navigate('Order' , {menuTitle:"prawns and salad",image:require('../assets/images/prawns.png') , price:"R160"})}>
<Text style={styles.subborder1}>prawns and salad</Text>
</TouchableOpacity>

<Text style={styles.subtext1}>R160</Text>
<Image style={styles.box3} source={require('../assets/images/Hearty.png')} /> 
 </View>


<View style={styles.borders1}> 
<Image style={styles.box1} source={require('../assets/images/fodo.jpg')} />

<TouchableOpacity style={styles.subborder}onPress={()=>navigation.navigate('Order', {menuTitle:"Grilled or cajun",image:require('../assets/images/fodo.jpg') , price:"246"})}>
<Text style={styles.subborder1}>Grilled or cajun </Text>
</TouchableOpacity>

<Text style={styles.subtext1}>R246</Text>
<Image style={styles.box3} source={require('../assets/images/Hearty.png')} />
</View>

<View style={styles.borders2}> 
<Image style={styles.box1} source={require('../assets/images/hake.png')} />

<TouchableOpacity style={styles.subborder}onPress={()=> navigation.navigate('Order',{menuTitle:"Full Deck platter", image:require('../assets/images/prawns.png') , price:"R140"})}>
<Text style={styles.subborder1}>Full Deck platter</Text>
</TouchableOpacity>

<Text style={styles.subtext1}>R140</Text>
<Image style={styles.box3} source={require('../assets/images/Hearty.png')} />
</View>

<View style={styles.borders3}> 
<Image style={styles.box1} source={require('../assets/images/images.png')} />

<TouchableOpacity style={styles.subborder}onPress={()=> navigation.navigate('Order', {menuTitle:"Rotti with chip", image:require('../assets/images/images.png'), price:"R120",
 decsriptin:"SeaFoody is a seafood restaurant serving the best authentic fish, steak and sushi in a fun, family-friendly environment. That's why everyone loves SeaFoody!with everything happening"})}>
<Text style={styles.subborder1}>Rotti with chip</Text>
</TouchableOpacity>

<Text style={styles.subtext1}>R120</Text>
<Image style={styles.box3} source={require('../assets/images/Hearty.png')} />
</View>



   
    </View>
    </ScrollView>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
 icon1: {
 width:430,
 height:330,
 marginTop:10,
 justifyContent:'center'
  },
icon2:{
width:70,
height:70,
borderRadius:100,
marginTop:10,

marginLeft:-240,
},
 
 icon3:{
 width:70,
 height:70,
 borderRadius:100,
marginLeft:-80,
marginTop:-70,
  },

  icon4:{
 width:70,
 height:70,
 borderRadius:100,
 marginTop:-70,
 marginLeft:80,
  },
icon5:{
 width:70,
 height:70,
 borderRadius:100,
 marginTop:-70,
 marginLeft:240,
},
header:{
  wdth:144,
  height:32,
 fontSize:16,
  textAlign: 'center',
  fontWeight:'bold',
  marginTop:1,
  backgroundColor:'#A68383'
},
borders1:{
  height:160,
  width:140,
  backgroundColor:'white',
  marginTop:40,
  marginRight:170,

},
box1:{
width:100,
height:100,
borderRadius:100,
marginTop:-30,
marginLeft:15,
},
subborder:{
width:120,
height:30,
marginLeft:8,
fontFamily:'Inter',
marginTop:20,
backgroundColor:'#A68383',
},
subborder1:{
width:134,
height:36,
marginLeft:10,
fontFamily:'Inknut Antiqua',
fontSize:14,
fontWeight:'bold',

},
subtext1:{
marginTop:20,
marginRight:-340,
fontFamily:'Inter',
fontWeight:'bold',
fontSize:12,
},
box3:{
height:20,
width:20,
marginLeft:120,
borderRadius:50,
marginTop:-15,
},
borders2:{
height:160,
width:140,
backgroundColor:'#F8F8F8',
marginRight:170,
marginLeft:180,
 marginTop:-360,
},
borders3:{
height:160,
width:140,
backgroundColor:'#F8F8F8',
marginRight:170,
marginLeft:180,
marginTop:40,
},

});
