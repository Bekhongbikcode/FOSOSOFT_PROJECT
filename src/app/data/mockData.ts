export const topProducts = [
    { name: 'Áo sơ mi dài tay', value: 48, change: '8.2%', trend: 'up' },
    { name: 'Quần tây', value: 18, change: '5%', trend: 'down' },
    { name: 'Áo hoodie', value: 40, change: '12%', trend: 'up' },
    { name: 'Đầm maxi', value: 23, change: '3.5%', trend: 'up' },
    { name: 'Áo thun cổ tròn', value: 48, change: '4.7%', trend: 'up' }
] satisfies { name: string; value: number; change: string; trend: 'up' | 'down' }[];

export const productionOrders = [
    { name: 'Áo sơ mi dài tay', quantity: 123, progress: 50 },
    { name: 'Áo sơ mi cụt tay', quantity: 321, progress: 75 },
    { name: 'Quần baggy', quantity: 231, progress: 45 },
    { name: 'Quần tây', quantity: 999, progress: 60 },
    { name: 'Đầm maxi', quantity: 876, progress: 90 },
    { name: 'Áo hoodie', quantity: 765, progress: 15 },
    { name: 'Áo khoác bomber', quantity: 543, progress: 24 }
];

export const customerData = [
    { name: 'Công ty Dệt may Happy Polla', value: 2900 },
    { name: 'Công ty May mặc Saigon trendy', value: 2400 },
    { name: 'Outlet Lemon squeeze', value: 1800 },
    { name: 'Shop quần áo streetwear New...', value: 1200 },
    { name: 'Shop thời trang công sở Basic Office', value: 800 }
];

export const productionPlan = [
    {
        product: "Áo ba lỗ",
        "Kế hoạch": 60,
        "Thực hiện": 40
    },
    {
        product: "Áo sơ mi",
        "Kế hoạch": 95,
        "Thực hiện": 60
    },
    {
        product: "Áo thun polo",
        "Kế hoạch": 80,
        "Thực hiện": 20
    },
    {
        product: "Quần baggy",
        "Kế hoạch": 70,
        "Thực hiện": 45
    },
    {
        product: "Quần jogger",
        "Kế hoạch": 85,
        "Thực hiện": 55
    }
];

export const materialsNeeded = [
    { id: 'NVL_000014', name: 'Chỉ cotton', unit: 'Cuộn', quantity: 8 },
    { id: 'NVL_000024', name: 'Vải lụa', unit: 'Mét', quantity: 8 },
    { id: 'NVL_000024', name: 'Vải lót', unit: 'Mét', quantity: 8 },
    { id: 'NVL_000024', name: 'Vải chống thấm', unit: 'Mét', quantity: 8 },
    { id: 'NVL_000024', name: 'Vải nỉ', unit: 'Mét', quantity: 8 }
];

export const statusData = [
    { name: 'Chưa hoàn thành', value: 30 },
    { name: 'Đang sản xuất', value: 40 },
    { name: 'Hoàn thành', value: 30 }
]; 