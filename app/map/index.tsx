import CustomMap from "@/presentation/components/shared/maps/CustomMap";
import React from "react";
import { StyleSheet, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <CustomMap
        initialLocation={{
          latitude: 41.38,
          longitude: 2.15,
        }}
      />
      {/* <MapView
        //showsPointsOfInterest={false}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.38,
          longitude: 2.15,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
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
