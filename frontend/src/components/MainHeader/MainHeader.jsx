import React from 'react';
import Search from './Search';
import Range from './Range';
import ToggleList from './ToggleList';

const MainHeader = ({sizeRange, strokeRange, handleSizeRange, handleStrokeRange, searchQuery, handleSearchQuery}) => {
    return (
        <div className='w-full mb-6'>
            <div className='flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 lg:flex-row'>
                <div className='shrink-0 w-full lg:w-auto lg:flex'>
                    <Search 
                        searchQuery = {searchQuery}
                        handleSearchQuery = {handleSearchQuery}
                    />
                    <Range 
                        value = {sizeRange}
                        handleValue = {handleSizeRange}
                        type = "size"
                        min = {12}
                        max = {48}
                        title = "Icon size"
                    />
                    <Range 
                        value = {strokeRange}
                        handleValue = {handleStrokeRange}
                        type = "stroke"
                        min = {1}
                        max = {30}
                        title = "Stroke width"
                    />
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400 flex justify-center items-center'>
                    <ToggleList />

                </div>

            </div>
            
        </div>
    );
};

export default MainHeader;