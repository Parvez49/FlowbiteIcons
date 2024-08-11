import React from 'react';
import './styles.css'

const Range = ({value,handleValue,min,max,type,title}) => {
    return (
        <div className="min-w-[260px] lg:mr-5 mb-3 lg:mb-0">
            <div className="w-full flex justify-between items-center">
                <label className="text-gray-900 dark:text-gray-300 text-sm font-medium !text-gray-600 dark:!text-gray-400" data-testid="flowbite-label" for="icon-size">{title}</label>
                <span className="text-sm font-medium !text-gray-600 dark:!text-gray-400">{type==="stroke"?value/10:value}px</span>
            </div>
            <div data-testid="flowbite-range-slider" className="flex">
                
                <div className="relative w-full">
                    <input 
                        type="range" 
                        className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 h-2" 
                        id="icon-size" 
                        min={min}
                        max={max}
                        value={value}
                        onChange={handleValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default Range;