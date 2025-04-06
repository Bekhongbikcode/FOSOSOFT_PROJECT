export interface ProductionData {
    product: string;
    "Kế hoạch": number;
    "Thực hiện": number;
}

export interface ProductionPlanProps {
    data: ProductionData[];
    title?: string;
    subtitle?: string;
} 