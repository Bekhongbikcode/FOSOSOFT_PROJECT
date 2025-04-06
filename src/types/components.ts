// Common Types for all components
export interface BaseComponentProps {
    className?: string;
    title?: string;
    subtitle?: string;
}

// // MaterialsTable Types
// export interface MaterialsTableProps extends BaseComponentProps {
//     materials: Material[];
// }

// // ProductionOrders Types
// export interface ProductionOrdersProps extends BaseComponentProps {
//     orders: Order[];
//     title: string; // Required for ProductionOrders
// }

// export interface Order {
//     name: string;
//     quantity: number;
//     progress: number;
// }

// // TopProducts Types
// export interface TopProductsProps extends BaseComponentProps {
//     products: Product[];
//     title: string; // Required for TopProducts
// }

// export interface Product {
//     name: string;
//     value: number;
//     change: string;
//     trend: 'up' | 'down';
// }

// // CustomerChart Types
// export interface CustomerChartProps extends BaseComponentProps {
//     data: CustomerData[];
// }

// export interface CustomerData {
//     name: string;
//     value: number;
// }

// // ProductionPlanChart Types
// export interface ProductionPlanChartProps extends BaseComponentProps {
//     data: ProductionPlanData[];
// }

// export interface ProductionPlanData {
//     product: string;
//     "Kế hoạch": number;
//     "Thực hiện": number;
// }

// // ProductionStatus Types
// export interface ProductionStatusProps extends BaseComponentProps {
//     data: ProductionStatusData[];
// }

// export interface ProductionStatusData {
//     name: string;
//     value: number;
// } 