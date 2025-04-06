export interface Product {
    name: string;
    value: number;
    change: string;
    trend: 'up' | 'down';
}

export interface ProductionOrder {
    name: string;
    quantity: number;
    progress: number;
}

export interface ProductionPlan {
    product: string;
    "Kế hoạch": number;
    "Thực hiện": number;
} 