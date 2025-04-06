import React from 'react';

interface ProductionStatusProps {
    data: Array<{
        name: string;
        value: number;
    }>;
    title?: string;
    subtitle?: string;
    className?: string;
}

const ProductionStatus: React.FC<ProductionStatusProps> = ({
    data,
    title = "Tình Hình Sản Xuất",
    subtitle,
    className
}) => {
    const totalOrders = data.length > 0 ? 16 : 0;

    const statusColors = {
        'Chưa hoàn thành': '#FF8F0D',
        'Đang sản xuất': '#0375F3',
        'Hoàn thành': '#1FC583'
    };

    const EmptyState = () => (
        <div className="flex flex-col items-center justify-center w-full h-64">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
            </svg>
            <p className="mt-4 text-gray-500 text-center">
                Chưa có dữ liệu sản xuất
            </p>
        </div>
    );

    return (
        <div className={`
            flex flex-col justify-between items-center 
            p-6 gap-8 w-full max-w-lg 
            bg-white rounded-xl shadow-lg
            border border-gray-100
            hover:shadow-xl transition-shadow duration-300
            ${className || ''}
        `}>
            {/* Header */}
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col">
                    <h2 className="font-bold text-lg text-[#141522] leading-7">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-sm text-gray-500 mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div>
                    <button className="flex flex-row items-center p-2 gap-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.33333 3.33333H10.6667M3.33333 6.66667H12.6667M4 3.33333V2M12 3.33333V2M4.66667 14H11.3333C12.0667 14 12.6667 13.4 12.6667 12.6667V5.33333C12.6667 4.6 12.0667 4 11.3333 4H4.66667C3.93333 4 3.33333 4.6 3.33333 5.33333V12.6667C3.33333 13.4 3.93333 14 4.66667 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-sm text-gray-700">Hôm nay</span>
                        </div>
                        <span className="text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Chart Section */}
            {data.length > 0 ? (
                <>
                    <div className="relative w-64 h-64">
                        <svg className="w-full h-full" viewBox="0 0 256 256">
                            {data.map((item, index) => {
                                const startAngle = data
                                    .slice(0, index)
                                    .reduce((sum, d) => sum + (d.value / 100) * 360, 0);
                                const endAngle = startAngle + (item.value / 100) * 360;
                                const startRad = ((startAngle - 90) * Math.PI) / 180;
                                const endRad = ((endAngle - 90) * Math.PI) / 180;

                                const x1 = 128 + 100 * Math.cos(startRad);
                                const y1 = 128 + 100 * Math.sin(startRad);
                                const x2 = 128 + 100 * Math.cos(endRad);
                                const y2 = 128 + 100 * Math.sin(endRad);

                                const largeArcFlag = item.value > 50 ? 1 : 0;

                                return (
                                    <path
                                        key={item.name}
                                        d={`M ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2}`}
                                        fill="none"
                                        stroke={statusColors[item.name as keyof typeof statusColors]}
                                        strokeWidth="24"
                                        strokeLinecap="round"
                                    />
                                );
                            })}
                        </svg>

                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="font-semibold text-3xl text-[#141522]">
                                {totalOrders}
                            </span>
                            <span className="text-sm text-gray-500">
                                Lệnh sản xuất
                            </span>
                        </div>

                        {/* Percentage Labels */}
                        {data.map((item, index) => {
                            const angle = data
                                .slice(0, index)
                                .reduce((sum, d) => sum + (d.value / 100) * 360, 0) + (item.value / 100) * 180;
                            const rad = ((angle - 90) * Math.PI) / 180;
                            const x = 128 + 140 * Math.cos(rad);
                            const y = 128 + 140 * Math.sin(rad);

                            return (
                                <div
                                    key={item.name}
                                    className="absolute flex justify-center items-center px-3 py-1 rounded-full"
                                    style={{
                                        backgroundColor: statusColors[item.name as keyof typeof statusColors],
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <span className="text-sm text-white">
                                        {item.value}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend Cards */}
                    <div className="flex flex-row justify-between w-full gap-2">
                        {data.map((item) => (
                            <div
                                key={item.name}
                                className="flex-1 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span
                                    className="font-semibold text-xl block"
                                    style={{ color: statusColors[item.name as keyof typeof statusColors] }}
                                >
                                    {Math.round(totalOrders * (item.value / 100))}
                                </span>
                                <span className="text-sm text-gray-800 block">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <EmptyState />
            )}
        </div>
    );
};

export default ProductionStatus;