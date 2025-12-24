import {
  checktLocationPermission,
  requestLocationPermission,
} from "@/core/actions/permissions/location";
import { create } from "zustand";
import { PermissionStatus } from "../../infrastructure/interfaces/location";

interface PermissionState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<PermissionState>()((set) => ({
  locationStatus: PermissionStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();

    set({ locationStatus: status });

    return status;
  },
  checkLocationPermission: async () => {
    const status = await checktLocationPermission();

    set({ locationStatus: status });

    return status;
  },
}));
