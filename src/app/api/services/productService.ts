import { API_ENDPOINTS } from '../apiConfig';
import { Product, ProductionOrder, ProductionPlan } from '@/types/product';

export const productService = {
    getTopProducts: async (): Promise<Product[]> => {
        const response = await fetch(API_ENDPOINTS.products.topProducts);
        if (!response.ok) {
            throw new Error('Failed to fetch top products');
        }
        return response.json();
    },

    getProductionOrders: async (): Promise<ProductionOrder[]> => {
        const response = await fetch(API_ENDPOINTS.products.productionOrders);
        if (!response.ok) {
            throw new Error('Failed to fetch production orders');
        }
        return response.json();
    },

    getProductionPlan: async (): Promise<ProductionPlan[]> => {
        const response = await fetch(API_ENDPOINTS.products.productionPlan);
        if (!response.ok) {
            throw new Error('Failed to fetch production plan');
        }
        return response.json();
    },
}; 