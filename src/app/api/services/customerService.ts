import { API_ENDPOINTS } from '../apiConfig';
import { Customer } from '@/types/customer';

export const customerService = {
    getTopCustomers: async (): Promise<Customer[]> => {
        const response = await fetch(API_ENDPOINTS.customers.top);
        if (!response.ok) {
            throw new Error('Failed to fetch top customers');
        }
        return response.json();
    },
}; 