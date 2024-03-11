import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Advertisement</Text>
        </View>
        <View style={styles.adContainer}>
          <Image
            style={styles.img}
            source={require("../assets copy/images/Green.jpg")}
          />
        </View>
      </View>
      <View style={styles.services}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Services</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('Map')}} >
              <View style={styles.serviceBox}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.img}
                    source={require("../assets copy/images/base_icon.png")}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text style={styles.text1}> Track</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Scan')}} >
              <View style={styles.serviceBox}>
                <View style={styles.imgContainer1}>
                  <Image
                    style={styles.img1}
                    source={require("../assets copy/images/qrcode.png")}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text style={styles.text1}> Scan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Complaint')}} >
              <View style={styles.serviceBox}>
                <View style={styles.imgContainer2}>
                  <Image
                    style={styles.img2}
                    source={require("../assets copy/images/person_icon.png")}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text style={styles.text1}> Complaint</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    color: "#ede9e9",
  },
  container1: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    width: "90%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  adContainer: {
    height: 150,

    width: "90%",
    borderRadius: 10,
    marginTop: 10,
  },
  img: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  services: {
    height: 170,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: "row",
    gap: 20,
    width: '100%',
  },
  serviceBox: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    width: 90,
    height: '80%'
  },
  imgContainer: {
    width: '100%',
    height: '77%',
    //marginTop: 10,
    backgroundColor: "#2aa8a0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer1: {
    width: '100%',
    height: '77%',
    //marginTop: 10,
    backgroundColor: "#ff8989",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer2: {
    width: '100%',
    height: '77%',
    //marginTop: 10,
    backgroundColor: "#ffea61",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img1: {
    resizeMode: "cover",
    height: "50%",
    width: "50%",
  },

  img2: {
    resizeMode: "cover",
    height: "50%",
    width: "60%",
  },
  textCont: {
    //backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 2
  },
  text1: {
    fontWeight: "bold",
    color: "grey",
  },
});
