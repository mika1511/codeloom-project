import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { getData } from "../endpoints";

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    // const res =  await getData();
    // res = res.json();
    setScanned(true);
    alert(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find a Qr</Text>
      <View style={styles.cameraview}>
        <CameraView
          facing="back"
          flash="true"
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={{height: '100%', width: '100%'}}
        />
      </View>

      {scanned ? (
        <TouchableOpacity
          style={styles.scanBtn}
          onPress={() => setScanned(false)}
        >
          <Text>Tap to Scan Again</Text>
        </TouchableOpacity>
      ): (<TouchableOpacity
        style={{height: 60}}
        onPress={() => setScanned(false)}
      >
        <Text></Text>
      </TouchableOpacity>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  cameraview: {
    height: 300,
    width: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 3
  },
  scanBtn: {
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    fontSize: 25,
    backgroundColor: "rgba(0, 0, 256, .1)",
  },
  text: {
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    fontSize: 25,
    
  },
});
