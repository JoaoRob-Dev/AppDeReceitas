import * as React from 'react';
import{Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(props){
  return(
     <ScrollView> 
<View style={styles.container}>
  <Text style={styles.head}> Receitas de bolos </Text>



<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Chocolate')}}>
<Image style={styles.img} source={require('../assets/chocolateCake.png')} />
<Text style={styles.nomeBolo}>Chocolate</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Panqueca')}}>
<Image style={styles.img} source={require('../assets/pancake.png')} />
<Text style={styles.nomeBolo}>Panqueca</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Queijo')}}>
<Image style={styles.img} source={require('../assets/cheesecake.png')} />
<Text style={styles.nomeBolo}>Queijo</Text>
</TouchableOpacity>

</View>
 </ScrollView>
  );}

  const styles = StyleSheet.create({
      container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    button:{
      margin: 0,
      padding:10,
      borderRadius: 5,
      color:'#F0F8FF',
      fontSize: 30,
      alignItems:'center',
      fontWeight:'bold',
    },

    img:{
      width:150,
      height:150,
      resizeMode: 'contain' ,
    },

    head:{
      fontSize: 43,
      fontWeight:'bold',
      fontStyle:'italic',
      marginBottom: 30,
    }
    ,nomeBolo:{
      marginBottom: 30,
      fontSize: 35,

    }
  })