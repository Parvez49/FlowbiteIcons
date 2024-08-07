import React, { useState } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Content from './Content';

const ContentBody = () => {
    const [sizeRange, setSizeRange] = useState(25);
    const [strokeRange,setStrokeRange] = useState(1.5);
    const [searchQuery,setSearchQuery] = useState('');
    const [contentView,setContentView] = useState('grid');

    const handleSizeRange = (e)=>{
        setSizeRange(e.target.value)
    }
    const handleStrokeRange = (e)=>{
        setStrokeRange(e.target.value)
    }

    const handleSearchQuery = (e)=>{
        setSearchQuery(e.target.value)
    }

    const handleContentView = () => {
        setContentView(prv => (prv === 'grid'?'list':'grid'));
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
                    handleContentView = {handleContentView}
                />
                <Content 
                    sizeRange = {sizeRange}
                    strokeRange = {strokeRange/10}
                    searchQuery = {searchQuery}
                    contentView = {contentView}
                />
            </div>
            
        </div>
    );
};

export default ContentBody;