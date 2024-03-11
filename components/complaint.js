import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Complaint({navigation}) {
  return (
    <View style={styles.container}>
      <View style ={styles.container2}>
        <Text style = {styles.text}>Complaint Form</Text>
        <Text style = {styles.text1}>Please fill out the form below with your complaint.</Text>
      </View>
      <View style = {styles.container3}>
        <TextInput style = {styles.inputContainer}
        placeholder="Full Name"></TextInput>
      </View>
      <View style = {styles.container3}>
        <TextInput style = {styles.inputContainer}
        placeholder="Email Address"></TextInput>
      </View>
      <View style = {styles.container3}>
        <TextInput style = {styles.inputContainer}
        placeholder="Phone Number"></TextInput>
      </View>
      <View style = {styles.container4}>
        <TextInput style = {styles.inputContainer1}
        placeholder="Write here..."></TextInput>
      </View>
      <View style ={styles.btnContainer}>
      <TouchableOpacity
      onPress={() => {navigation.navigate('Home')}}
      >
        <View style = {styles.submitBtn}>
            <Text style ={styles.text2}>Submit</Text>
        </View>
      </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede9e9",
    height:'100%',
  },

  container2:{
    width:'90%',
    height:90,
    justifyContent:'center',
    alignItems:'center',
  },

  text:{
    fontSize:20,
    fontWeight:'bold',
  },
  text1:{
    marginTop:10,
    fontSize:14,
    textAlign:'center',
  },
  container3:{
    width:'100%',
    height:70,
    justifyContent:'center',
    alignItems:'center',
  },

  inputContainer:{
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
    width:'90%',
    height:40,
    padding:10,
  },
  container4:{
    width:'100%',
    height:200,
    justifyContent:'center',
    alignItems:'center',
  },
  
  inputContainer1:{
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
    width:'90%',
    height:160,
    padding:10,
  },
  btnContainer:{
    
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  submitBtn:{
    width:100,
    height:40,
    backgroundColor:'#2aa8a0',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18,
  },
  text2:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff',
    
  }
});
