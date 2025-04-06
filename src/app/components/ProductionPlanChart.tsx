import React from 'react';
import { ProductionPlanProps } from '../../types/productionPlan';

const ProductionPlanChart = ({ data = [], title = "Kế hoạch sản xuất", subtitle = "Quý này" }: ProductionPlanProps) => {
    // Colors matching the Figma design
    const colors = {
        plan: "#0375F3",
        actual: "#1FC583",
        text: {
            title: "#141522",
            label: "#3A3E4C",
            subtitle: "#9295A4",
            axis: "#9295A4"
        }
    };

    // State for showing tooltip
    const [activeTooltip, setActiveTooltip] = React.useState<{
        visible: boolean,
        index: number,
        type: 'plan' | 'actual' | null,
        value: number
    }>({
        visible: false,
        index: -1,
        type: null,
        value: 0
    });

    const maxValue = 100; // Maximum value on Y-axis
    const chartHeight = 240; // Height for the chart area
    const barWidth = 20; // Width of each bar
    const groupWidth = 200; // Space between bar groups

    const getBarHeight = (value: number) => {
        return Math.max((value / maxValue) * chartHeight, 1);
    };

    // Empty state component
    const EmptyState = () => (
        <div className="flex flex-col items-center justify-center h-[340px]">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="80" height="80" rx="40" fill="#F8F9FC" />
                <path d="M45 60H75M60 45V75" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-[16px] font-normal text-[#9295A4] font-['Lexend_Deca']">
                Chưa có dữ liệu
            </p>
        </div>
    );

    return (
        <div className="bg-white p-6 rounded-2xl shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,158,171,0.2)] w-full max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-[8px]">
                <h2 className="text-[18px] font-bold text-[#141522] font-['Lexend_Deca']">{title}</h2>
                <div className="flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-3 py-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="6" width="18" height="15" rx="2" stroke="#9295A4" strokeWidth="2" />
                        <path d="M3 10H21" stroke="#9295A4" strokeWidth="2" />
                        <path d="M8 3V7" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M16 3V7" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-[16px] font-normal text-[#3A3E4C] font-['Lexend_Deca']">{subtitle}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Show empty state if no data */}
            {(!data || data.length === 0) ? (
                <EmptyState />
            ) : (
                <>
                    {/* Legend */}
                    <div className="flex justify-end gap-4 mb-6 px-4">
                        <div className="flex items-center gap-[10px] w-[102px]">
                            <div className="w-8 h-3 rounded-full" style={{ backgroundColor: colors.plan }}></div>
                            <span className="text-[14px] font-bold text-[#3A3E4C] font-['Lexend_Deca']">Kế hoạch</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-8 h-3 rounded-full" style={{ backgroundColor: colors.actual }}></div>
                            <span className="text-[14px] font-bold text-[#3A3E4C] font-['Lexend_Deca']">Thực hiện</span>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="relative px-6" style={{ height: `${chartHeight + 100}px` }}>
                        {/* Y-axis labels and unit */}
                        <div className="absolute left-0 top-0 flex flex-col justify-center items-end h-full gap-3">
                            {/* Unit label */}
                            <div className="text-[12px] font-normal text-[#667085] font-['Lexend_Deca'] mb-3">
                                Cái
                            </div>

                            {/* Y-axis value labels */}
                            <div className="flex flex-col justify-between h-full text-[12px] font-normal text-[#9295A4] font-['Lexend_Deca'] gap-7">
                                <div>100</div>
                                <div>80</div>
                                <div>60</div>
                                <div>40</div>
                                <div>20</div>
                                <div>0</div>
                            </div>
                        </div>

                        {/* Horizontal grid lines */}
                        <div className="absolute left-12 right-0 top-0 h-full">
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <div
                                    key={index}
                                    className="border-t border-dashed border-[rgba(145,158,171,0.2)]"
                                    style={{ position: 'absolute', width: '100%', top: `${(5 - index) * 20}%` }}
                                />
                            ))}

                            {/* Bars */}
                            <div className="flex justify-around h-full relative">
                                {data.map((item, index) => (
                                    <div key={index} className="flex items-end relative" style={{ height: '100%', width: `${groupWidth}px` }}>
                                        <div className="flex items-end gap-[2px]" style={{ height: '100%', padding: '0 4px' }}>
                                            {/* Plan bar */}
                                            <div className="relative">
                                                <div
                                                    className="rounded-t-[4px]"
                                                    style={{
                                                        height: `${getBarHeight(item["Kế hoạch"])}px`,
                                                        backgroundColor: colors.plan,
                                                        width: `${barWidth}px`,
                                                        opacity: 0.8
                                                    }}
                                                    onMouseEnter={() => {
                                                        setActiveTooltip({
                                                            visible: true,
                                                            index: index,
                                                            type: 'plan',
                                                            value: item["Kế hoạch"]
                                                        });
                                                    }}
                                                    onMouseLeave={() => {
                                                        setActiveTooltip({
                                                            visible: false,
                                                            index: -1,
                                                            type: null,
                                                            value: 0
                                                        });
                                                    }}
                                                />

                                                {/* Tooltip for plan bar */}
                                                {activeTooltip.visible &&
                                                    activeTooltip.index === index &&
                                                    activeTooltip.type === 'plan' && (
                                                        <div
                                                            className="absolute bg-[#17181A] text-white px-4 py-2 rounded-md text-[12px] font-medium font-['Lexend_Deca'] shadow-[0px_2px_4px_-1px_rgba(18,18,23,0.06),0px_4px_6px_-1px_rgba(18,18,23,0.08)]"
                                                            style={{
                                                                left: `${barWidth / 2}px`,
                                                                bottom: `${getBarHeight(item["Kế hoạch"]) + 8}px`,
                                                                transform: 'translateX(-50%)',
                                                                zIndex: 10,
                                                                lineHeight: '1.5'
                                                            }}
                                                        >
                                                            {item["Kế hoạch"]} cái
                                                            <div
                                                                className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#17181A] transform rotate-45 translate-y-1/2 -translate-x-1/2"
                                                            />
                                                        </div>
                                                    )}
                                            </div>

                                            {/* Actual bar */}
                                            <div className="relative">
                                                <div
                                                    className="rounded-t-[4px]"
                                                    style={{
                                                        height: `${getBarHeight(item["Thực hiện"])}px`,
                                                        backgroundColor: colors.actual,
                                                        width: `${barWidth}px`,
                                                        opacity: 0.8
                                                    }}
                                                    onMouseEnter={() => {
                                                        setActiveTooltip({
                                                            visible: true,
                                                            index: index,
                                                            type: 'actual',
                                                            value: item["Thực hiện"]
                                                        });
                                                    }}
                                                    onMouseLeave={() => {
                                                        setActiveTooltip({
                                                            visible: false,
                                                            index: -1,
                                                            type: null,
                                                            value: 0
                                                        });
                                                    }}
                                                />

                                                {/* Tooltip for actual bar */}
                                                {activeTooltip.visible &&
                                                    activeTooltip.index === index &&
                                                    activeTooltip.type === 'actual' && (
                                                        <div
                                                            className="absolute bg-[#17181A] text-white px-4 py-2 rounded-md text-[12px] font-medium font-['Lexend_Deca'] shadow-[0px_2px_4px_-1px_rgba(18,18,23,0.06),0px_4px_6px_-1px_rgba(18,18,23,0.08)]"
                                                            style={{
                                                                left: `${barWidth / 2}px`,
                                                                bottom: `${getBarHeight(item["Thực hiện"]) + 8}px`,
                                                                transform: 'translateX(-50%)',
                                                                zIndex: 10,
                                                                lineHeight: '1.5'
                                                            }}
                                                        >
                                                            {item["Thực hiện"]} cái
                                                            <div
                                                                className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#17181A] transform rotate-45 translate-y-1/2 -translate-x-1/2"
                                                            />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>

                                        {/* X-axis label */}
                                        <div
                                            className="absolute bottom-0 left-1/5 text-center mt-2 text-[12px] font-normal text-[#9295A4] font-['Lexend_Deca'] transform -translate-x-1/2 translate-y-6 whitespace-nowrap"
                                            style={{ width: 'max-content' }}
                                        >
                                            {item.product}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductionPlanChart;