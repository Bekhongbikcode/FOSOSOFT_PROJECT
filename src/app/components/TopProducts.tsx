import { BaseComponentProps } from '@/types/components';
import { Product } from '@/types/product';
import { CalendarBlank, CaretDown } from '@phosphor-icons/react';
import { Title } from '@tremor/react';

export interface TopProductsProps extends BaseComponentProps {
    products: Product[];
    title: string;
}

export function TopProducts({ products, title, subtitle }: TopProductsProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <Title className="text-lg font-bold font-['Lexend_Deca'] text-black leading-7 capitalize">
                        {title}
                    </Title>
                </div>
                <button className="flex items-center px-3 py-2 gap-2 bg-white border border-[#D0D5DD] rounded-lg">
                    <CalendarBlank size={16} className="text-[#9295A4]" />
                    <span className="text-base font-normal font-['Lexend_Deca'] text-[#3A3E4C]">
                        Tháng này
                    </span>
                    <CaretDown size={12} className="text-[#9295A4]" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.length === 0 ? (
                    Array(5).fill(0).map((_, index) => (
                        <div key={index} className="p-6 bg-white rounded-2xl shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-['Barlow'] font-bold text-[32px] leading-[48px] text-[#0375F3]">
                                        0
                                    </div>
                                    <div className="font-['Lexend_Deca'] font-normal text-sm leading-5 text-[#141522]">
                                        Chưa có mặt hàng
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    products.map((product, index) => (
                        <div key={index} className="p-6 bg-white rounded-2xl shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-['Barlow'] font-bold text-[32px] leading-[48px] text-[#0375F3]">
                                        {product.value}
                                    </div>
                                    <div className="font-['Lexend_Deca'] font-normal text-sm leading-5 text-[#141522]">
                                        {product.name}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className={`w-6 h-6 flex items-center justify-center text-white rounded ${product.trend === 'up'
                                        ? 'bg-gradient-to-br from-[#1FC583] to-[#1F9285]'
                                        : 'bg-gradient-to-br from-[#FFAC82] to-[#FF5630]'
                                        }`}>
                                        {product.trend === 'up' ? '↑' : '↓'}
                                    </div>
                                    <span className="font-['Lexend_Deca'] font-medium text-sm leading-5 text-[#3A3E4C]">
                                        {product.change}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
} 