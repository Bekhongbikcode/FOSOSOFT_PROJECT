import { BaseComponentProps } from '@/types/components';
import { Material } from '@/types/material';

export interface MaterialsTableProps extends BaseComponentProps {
    materials: Material[];
}

export function MaterialsTable({ materials, title = "Nguyên Vật Liệu Cần Mua", className }: MaterialsTableProps) {
    if (materials.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-4 w-full max-w-[800px] shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-[#1D2939]">{title}</h2>
                    <button className="flex items-center gap-2 px-3 py-2 border border-[#D0D5DD] rounded-lg bg-white text-xs text-[#3A3E4C] hover:bg-gray-50 transition-colors">
                        <span className="text-xs">Tuần này</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="#9295A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-24 h-24 mb-4 text-gray-300">
                        <svg width="100%" height="100%" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z" fill="#F3F3F4" />
                            <path d="M58 35H38C36.8954 35 36 35.8954 36 37V59C36 60.1046 36.8954 61 38 61H58C59.1046 61 60 60.1046 60 59V37C60 35.8954 59.1046 35 58 35Z" stroke="#9295A4" strokeWidth="2" />
                            <path d="M42 41H54" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                            <path d="M42 47H54" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                            <path d="M42 53H48" stroke="#9295A4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Chưa có dữ liệu</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-4 w-full max-w-[800px] shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-[#1D2939]">{title}</h2>
                <button className="flex items-center gap-2 px-3 py-2 border border-[#D0D5DD] rounded-lg bg-white text-xs text-[#3A3E4C] hover:bg-gray-50 transition-colors">
                    <span className="text-xs">Tuần này</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="#9295A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-gray-100">
                <div className="bg-[#F3F3F4]">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3">
                        <div className="col-span-1 text-xs font-bold text-[#52575E]">STT</div>
                        <div className="col-span-6 text-xs font-bold text-[#52575E]">Nguyên vật liệu</div>
                        <div className="col-span-3 text-xs font-bold text-[#52575E]">Đơn vị tính</div>
                        <div className="col-span-2 text-xs font-bold text-[#52575E]">Số lượng</div>
                    </div>
                </div>

                <div className="divide-y divide-[#F3F3F4] bg-white">
                    {materials.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-gray-50 transition-colors">
                            <div className="col-span-1 text-xs font-bold text-[#475467]">{index + 1}</div>
                            <div className="col-span-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-[#F3F3F4] rounded-lg flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5 5.83333L10 1.66667L2.5 5.83333M17.5 5.83333L10 10M17.5 5.83333V14.1667L10 18.3333M2.5 5.83333L10 10M2.5 5.83333V14.1667L10 18.3333M10 10V18.3333" stroke="#52575E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-[#1D2939]">{item.name}</span>
                                        <span className="text-[10px] text-[#667085]">(none)</span>
                                        <span className="text-[10px] text-[#3276FA]">{item.id}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 text-xs font-bold text-[#475467] text-left">{item.unit}</div>
                            <div className="col-span-2 text-xs font-bold text-[#475467] text-center">{item.quantity}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 