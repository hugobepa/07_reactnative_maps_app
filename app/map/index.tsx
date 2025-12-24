import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        //showsPointsOfInterest={false}
        style={styles.map}
        initialRegion={{
          latitude: 41.38,
          longitude: 2.15,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    //backgroundColor: "red",
  },
});
