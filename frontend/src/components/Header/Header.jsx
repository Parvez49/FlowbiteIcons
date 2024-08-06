import React from 'react';
import NavHeader from './NavHeader';
import NoteHeader from './NoteHeader';

const Header = () => {
    return (
        <div className='sticky top-0 z-40 mx-auto w-full bg-white dark:bg-gray-900'>
            <NoteHeader />
            <NavHeader />
        </div>
    );
};

export default Header;