'use client';

import { Navigation } from './components/Navigation';
import { TopProducts } from './components/TopProducts';
import ProductionPlanChart from './components/ProductionPlanChart';
import { CustomerChart } from './components/CustomerChart';
import ProductionStatus from './components/ProductionStatus';
import { ProductionOrders } from './components/ProductionOrders';
import { MaterialsTable } from './components/MaterialsTable';
import {
  topProducts,
  productionOrders,
  customerData,
  productionPlan,
  materialsNeeded,
  statusData
} from './data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <TopProducts
          products={topProducts}
          title="Top sản phẩm sản xuất nhiều nhất"
          subtitle="Tháng này"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ProductionPlanChart
            data={productionPlan}
            title="Kế hoạch sản xuất"
            subtitle="Quý này"
          />

          <CustomerChart
            data={customerData}
            title="Top 5 khách hàng có sản lượng nhiều nhất"
            subtitle="Năm nay"
          />
        </div>


        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ProductionStatus
            data={statusData}
            title="Tình hình sản xuất"
            subtitle="Hôm nay"
          />

          <ProductionOrders
            orders={productionOrders}
            title="Tiến độ sản xuất theo nhóm"
          />

          <MaterialsTable
            materials={materialsNeeded}
            title="Nguyên vật liệu cần mua"
          />
        </div>
      </main>
    </div>
  );
} 