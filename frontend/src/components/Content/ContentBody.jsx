import React, { useState } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Content from './Content';

const ContentBody = () => {
    const [sizeRange, setSizeRange] = useState(25);
    const [strokeRange,setStrokeRange] = useState(1.5);
    const [searchQuery,setSearchQuery] = useState('');

    const handleSizeRange = (e)=>{
        setSizeRange(e.target.value)
    }
    const handleStrokeRange = (e)=>{
        setStrokeRange(e.target.value)
    }

    const handleSearchQuery = (e)=>{
        setSearchQuery(e.target.value)
    }

    return (
        <div>
            <div className='px-4 mx-auto max-w-7xl'>
                <MainHeader
                    sizeRange = {sizeRange}
                    strokeRange = {strokeRange}
                    handleSizeRange = {handleSizeRange}
                    handleStrokeRange = {handleStrokeRange}
                    searchQuery = {searchQuery}
                    handleSearchQuery = {handleSearchQuery}
                />
                <Content 
                    sizeRange = {sizeRange}
                    strokeRange = {strokeRange/10}
                    searchQuery = {searchQuery}
                />
            </div>
            
        </div>
    );
};

export default ContentBody;