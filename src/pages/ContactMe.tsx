import Layout from './Layout';
import { useEffect } from 'react';
import Blob from './Blob';

export default function ContactMe(): JSX.Element {  
  return (
    <Layout>
        <div className="block relative m-0 p-0 min-h-[calc(100vh-12rem)] z-10 bg-dark rounded-3xl">
            <div className="origin-center transform-none absolute z-10 top-0 bottom-0 left-15vw w-0.5 bg-light flex flex-col items-center ml-8">
                <div className="transform-none absolute top-18 w-3 h-3 rounded-full bg-dark z-10 border border-solid border-comment"></div>
            </div>
            <div className='flex flex-col p-4 md:pt-16 ml-[calc(1vw+3rem)] z-10 font-mono'>
                <div className='block text-sm md:text-xl z-10 text-comment '>
                    <a>brunovsky.oliver@gmail.com /{'>'}</a>
                </div>
            </div>
            <div className='block transform-none mt-4 md:mt-12 box-border p-0 w-full'>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-50'>00</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='text-purple'>class</span>
                        <span className='text-yellow'> ContactMe</span>
                    {' {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-50'>01</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>..</span>
                        <span className='text-purple'>constructor</span>
                    {'() {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-50'>02</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>....</span>
                        <span className='text-red'>this</span>
                        {'.'}
                        <span className='text-blue'>name</span>
                        {' = '}
                        <span className='text-green'>
                            {"'"}
                            <span className='inline-block w-5.5'>
                                <input type="text" className="bg-dark text-sm md:text-xl text-green font-mono border-0 outline-none" placeholder="Input your name" maxLength={15} />
                            </span>
                            {"'"}
                        </span>
                        {';'}

                    </span>
                </div>

            </div>
        </div>
    </Layout>

  );
}
