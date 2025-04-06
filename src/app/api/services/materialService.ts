import { API_ENDPOINTS } from "../apiConfig";
import { Material, ProductionStatus } from "@/types/material";

export const materialService = {
  getMaterialsNeeded: async (): Promise<Material[]> => {
    const response = await fetch(API_ENDPOINTS.materials.needed);
    if (!response.ok) {
      throw new Error("Failed to fetch needed materials");
    }
    return response.json();
  },

  getProductionStatus: async (): Promise<ProductionStatus[]> => {
    const response = await fetch(API_ENDPOINTS.production.status);
    if (!response.ok) {
      throw new Error("Failed to fetch production status");
    }
    return response.json();
  },
};
