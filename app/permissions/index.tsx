import { ThemedText } from "@/presentation/components/shared/themed-text";
import ThemedPressable from "@/presentation/components/shared/ThemedPressable";
import { usePermissionStore } from "@/presentation/store/usePermissions";
import React from "react";
import { View } from "react-native";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        habilitar ubicacion
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  );
};

export default PermissionsScreen;
