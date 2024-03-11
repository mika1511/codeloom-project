import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

export default function Map({}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "105%",
        }}
      >
        <WebView
          source={{
            html: '<iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=81.30612909793855%2C21.216432971208697%2C81.30863964557648%2C21.218120737639993&amp;layer=mapnik&amp;marker=21.217278182639692%2C81.30738437175751" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=21.21728&amp;mlon=81.30738#map=19/21.21728/81.30738">View Larger Map</a></small>',
          }}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
