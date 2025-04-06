import { Card, Title, Text } from '@tremor/react';
import { BaseComponentProps } from '@/types/components';
import { Order } from '@/types/order';

export interface ProductionOrdersProps extends BaseComponentProps {
    orders: Order[];
    title: string;
}

export function ProductionOrders({ orders, title, subtitle, className }: ProductionOrdersProps) {
    return (
        <Card className={`flex flex-col h-[586px] bg-white shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] rounded-2xl ${className || ''}`}>
            <div className="flex flex-row items-center justify-between p-6 mt-[-6%]">
                <div className="flex flex-col items-start gap-1">
                    <Title className="font-['Lexend_Deca'] font-bold text-lg leading-7 capitalize text-[#141522]">
                        {title}
                    </Title>
                    {subtitle && (
                        <Text className="font-['Public_Sans'] font-bold text-sm leading-[22px] text-[#637381]">
                            {subtitle}
                        </Text>
                    )}
                </div>
                <button className="flex items-center gap-2 px-3 py-2 border border-[#D0D5DD] rounded-lg bg-white text-sm text-[#3A3E4C]">
                    <span className="text-sm">Hoàn Thành</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="#9295A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-start p-6 pb-8 gap-8 flex-1 mt-[-5%]">
                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <Text className="font-['Public_Sans'] text-sm text-[#637381]">
                            Chưa có mặt hàng
                        </Text>
                    </div>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="flex flex-col items-start gap-2 w-full">
                            <div className="flex flex-row justify-between items-start w-full">
                                <span className="font-['Lexend_Deca'] font-bold text-sm leading-5 text-[#1C252E]">
                                    {order.name}
                                </span>
                                <div className="flex flex-row items-start gap-0">
                                    <span className="font-['Public_Sans'] font-bold text-sm leading-[22px] text-right text-[#1C252E]">
                                        {order.quantity} cái
                                    </span>
                                    <span className="font-['Public_Sans'] font-bold text-sm leading-[22px] text-[#637381] ml-2">
                                        ({order.progress}%)
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-start p-0 isolate w-full h-2 bg-[rgba(145,158,171,0.12)] rounded-[500px]">
                                <div
                                    className="h-2 rounded-[500px] bg-[#1FC583]"
                                    style={{ width: `${order.progress}%` }}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
} 