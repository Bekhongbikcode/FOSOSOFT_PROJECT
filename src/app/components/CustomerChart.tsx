import { Card, Title } from '@tremor/react';
import { useState } from 'react';
import { BaseComponentProps } from '@/types/components';
import { Customer } from '@/types/customer';

export interface CustomerChartProps extends BaseComponentProps {
    data: Customer[];
    title: string;
}

export function CustomerChart({ data, title }: CustomerChartProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const maxValue = Math.max(...(data.length ? data.map(item => item.value) : [0]));
    const ticks = [0, 800, 1600, 2400, 3200];

    return (
        <Card className="w-full max-w-4xl h-auto flex flex-col items-start p-0 rounded-2xl shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] bg-white">
            <div className="flex flex-row items-center justify-between px-6 py-4 w-full">
                <Title className="text-[18px] leading-7 font-bold text-[#141522] font-['Lexend_Deca','sans-serif']">
                    {title}
                </Title>
                <button className="flex flex-row items-center px-3 py-2 gap-2 h-10 bg-white border border-[#D0D5DD] rounded-lg">
                    <span className="w-4 h-4">
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33333 2.66667H10.6667V4H12V2.66667C12 1.93333 11.4 1.33333 10.6667 1.33333H5.33333C4.6 1.33333 4 1.93333 4 2.66667V4H5.33333V2.66667Z" fill="#9295A4" />
                            <path d="M12.6667 4H3.33333C2.96667 4 2.66667 4.3 2.66667 4.66667V5.33333C2.66667 5.7 2.96667 6 3.33333 6H12.6667C13.0333 6 13.3333 5.7 13.3333 5.33333V4.66667C13.3333 4.3 13.0333 4 12.6667 4Z" fill="#9295A4" />
                            <path d="M3.33333 13.3333H12.6667C13.0333 13.3333 13.3333 13.0333 13.3333 12.6667V6.66667H2.66667V12.6667C2.66667 13.0333 2.96667 13.3333 3.33333 13.3333ZM4 8H12V9.33333H4V8ZM4 10.6667H9.33333V12H4V10.6667Z" fill="#9295A4" />
                        </svg>
                    </span>
                    <span className="text-base font-normal text-[#3A3E4C] font-['Lexend_Deca','sans-serif']">Năm nay</span>
                    <span className="w-3 h-3">
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#9295A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>

            <div className="w-full px-6 pb-8">
                {data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 18.6667H56M8 32H56M8 45.3333H56" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <p className="mt-4 text-[#637381] text-base font-['Lexend_Deca','sans-serif']">
                            Không có dữ liệu để hiển thị
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Header row */}
                        <div className="flex w-full mb-4">
                            <div className="w-[100px] text-sm font-bold text-[#667085] font-['Lexend_Deca','sans-serif'] text-right">
                                Khách hàng
                            </div>
                        </div>

                        {/* Customer bars */}
                        <div className="flex flex-col gap-8">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="w-[110px] pr-4">
                                        <div className={`text-xs text-[#9295A4] font-['Lexend_Deca','sans-serif'] leading-tight text-right ${index < 5 ? 'font-bold' : ''}`}>
                                            {item.name.split(' ').map((word, i, arr) =>
                                                i === arr.length - 1 ? word : word + ' '
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-grow relative h-2">
                                        <div
                                            className="absolute h-2 bg-[#0375F3] rounded-r-[4px] transition-all duration-200"
                                            style={{ width: `${(item.value / maxValue) * 100}%` }}
                                        />
                                        {hoveredIndex === index && (
                                            <div className={`absolute -top-8 px-2 py-1 bg-black text-white rounded text-xs ${index < 5 ? 'font-bold' : 'font-medium'}`}
                                                style={{ left: `${(item.value / maxValue) * 100}%`, transform: 'translateX(-50%)' }}>
                                                {item.value.toLocaleString()}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* X-axis label */}
                        <div className="mt-8 flex w-full border-t border-[#F2F4F7] pt-1">
                            <div className="w-[90px] text-sm text-[#637381] font-['Lexend_Deca','sans-serif'] text-right text-black">
                                Sản lượng
                            </div>
                            <div className="flex-grow flex justify-between pl-4">
                                {ticks.map((tick, index) => (
                                    <div key={index} className="text-sm text-[#637381] font-['Lexend_Deca','sans-serif']">
                                        {tick.toLocaleString()}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
}