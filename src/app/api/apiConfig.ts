// Base URL for the API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// API endpoints
export const API_ENDPOINTS = {
    products: {
        topProducts: `${API_BASE_URL}/products/top`,
        productionOrders: `${API_BASE_URL}/products/orders`,
        productionPlan: `${API_BASE_URL}/products/plan`,
    },
    customers: {
        top: `${API_BASE_URL}/customers/top`,
    },
    materials: {
        needed: `${API_BASE_URL}/materials/needed`,
    },
    production: {
        status: `${API_BASE_URL}/production/status`,
    },
}; 