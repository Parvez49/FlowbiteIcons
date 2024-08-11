import React from 'react';
import ContentBody from '../components/Content/ContentBody';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import MainInfo from '../components/MainInfo';
import Subscribe from '../components/Subscribe';

const Dashboard = () => {
    return (
        <div className='antialiased'>
            <div className='_next'>
                <div className='flex flex-col dark:bg-gray-800'>
                    <Header />
                    <main className=''>
                        <section className='px-4 mx-auto max-w-7xl'>
                            <MainInfo />
                        </section>
                        <section className='pb-8 bg-white dark:bg-gray-900 lg:pb-24'>
                            <ContentBody />
                        </section>
                        <section id='faq' className='bg-white dark:bg-gray-900'>
                            <FAQ />
                        </section>
                    </main>
                    <aside className='py-10 sm:py-16 bg-gray-50 lg:py-20 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700'>
                        <Subscribe />
                    </aside>
                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;