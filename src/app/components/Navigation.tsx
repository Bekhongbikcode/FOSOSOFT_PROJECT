import { MagnifyingGlassIcon, BellIcon, QuestionMarkCircleIcon, Cog6ToothIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const navigationItems = [
    { text: 'Danh mục', width: '93px' },
    { text: 'Bán & Xuất hàng', width: '140px' },
    { text: 'Mua & Nhập hàng', width: '148px' },
    { text: 'Kho & Sản xuất', width: '130px' },
    { text: 'Kế toán', width: '77px' },
    { text: 'Báo cáo & Thống kê', width: '161px' },
    { text: 'Tiện ích', width: '76px' }
];

export function Navigation() {
    return (
        <nav className="flex flex-row items-center px-12 gap-6 w-full h-[72px] bg-[#003DA0]">
            <div className="flex-none order-0 w-[82.77px] h-8">
                <span className="text-white text-2xl font-bold tracking-wider">HRP</span>
            </div>

            <div className="flex flex-row items-center flex-1 h-7">
                {navigationItems.map((item) => (
                    <div
                        key={item.text}
                        className="flex flex-row justify-center items-center px-2 h-7 rounded-xl"
                        style={{ width: item.width }}
                    >
                        <div className="flex flex-row items-center px-1 h-5">
                            <span className="font-['Lexend_Deca'] font-normal text-sm leading-5 flex items-center text-[#F3F4F6] opacity-90">
                                {item.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row items-center gap-6 h-10">
                <div className="flex flex-row items-center px-1.5 py-1 gap-1 w-[200px] h-7 bg-white/20 rounded-lg">
                    <MagnifyingGlassIcon className="w-4 h-4 text-white opacity-80" />
                    <span className="font-['Lexend_Deca'] font-light text-xs leading-4 tracking-[0.004em] text-white opacity-65">
                        Tìm kiếm
                    </span>
                </div>

                <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-4">
                        <button className="w-5 h-5 opacity-90">
                            <Cog6ToothIcon className="text-white" />
                        </button>
                        <button className="w-5 h-5 opacity-90" >
                            <ChatBubbleLeftIcon className="text-white" />
                        </button>
                        <div className="relative inline-flex items-center">
                            <button className="w-5 h-5 opacity-90 flex items-center justify-center">
                                <BellIcon className="text-white w-5 h-5" />
                            </button>
                            <div className="absolute flex justify-center items-center w-[13px] h-3 right-0 top-0 -translate-y-1/2 translate-x-1/3 bg-[#EE1E1E] rounded-lg">
                                <span className="font-['Lexend_Deca'] font-medium text-[8px] leading-[2px] tracking-[0.01em] text-white">
                                    1
                                </span>
                            </div>
                        </div>
                        <button className="w-5 h-5 opacity-90">
                            <QuestionMarkCircleIcon className="text-white" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-1 w-16 h-10">
                    <div className="flex flex-row items-center w-10 h-10 bg-white rounded-full">
                        <Image
                            src="/globe.svg"
                            alt="User avatar"
                            className="w-10 h-10 rounded-[20.8px] object-cover"
                        />
                    </div>
                    <ChevronDownIcon className="w-5 h-5 text-white transform" />
                </div>
            </div>
        </nav>
    );
} 