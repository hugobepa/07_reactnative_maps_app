import { PermissionStatus } from "@/infrastructure/interfaces/location";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      if (status === "denied") {
        manualPermissionRequest();
      }

      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checktLocationPermission = async () => {
  const { status } = await Location.getBackgroundPermissionsAsync();

  switch (status) {
    case "granted":
      return PermissionStatus.GRANTED;
    case "denied":
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  Alert.alert(
    "permiso de ubicacion necesario",
    "para continuar debe habilitar el permisode location en settings app",
    [
      {
        text: "Abrir ajustes",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancelar",
        style: "destructive",
      },
    ]
  );
};
