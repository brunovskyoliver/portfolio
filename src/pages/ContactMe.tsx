import Layout from './Layout';
import { useEffect } from 'react';
import Blob from './Blob';
import { useUser } from '@clerk/nextjs';
import Head from 'next/head';


export default function ContactMe(): JSX.Element {
    const { user } = useUser();  
  return (
    <Layout>
        <Head>
        <title>Contact - brunovsky.online</title>
      </Head>
        <div className="block relative m-0 p-0 md:min-h-[calc(100vh-12rem)] min-h-[calc(100vh-16rem)] z-10 bg-dark rounded-3xl">
            <div className="origin-center transform-none absolute z-10 top-0 bottom-0 left-15vw w-0.5 bg-light flex flex-col items-center ml-8">
                <div className="transform-none absolute top-18 w-3 h-3 rounded-full bg-dark z-10 border border-solid border-comment"></div>
            </div>
            <div className='flex flex-col p-4 md:pt-16 md:ml-[calc(0rem+3.6rem)] ml-8 z-10 font-mono'>
                <div className='block text-sm md:text-xl z-10 text-comment '>
                    <a>brunovsky.oliver@gmail.com /{'>'}</a>
                </div>
            </div>
            <div className='block transform-none mt-4 md:mt-12 box-border p-0 w-full'>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>00</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='text-purple'>class</span>
                        <span className='text-yellow'> ContactMe</span>
                    {' {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>01</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>..</span>
                        <span className='text-purple'>constructor</span>
                    {'() {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>02</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>....</span>
                        <span className='text-red'>this</span>
                        {'.'}
                        <span className='text-blue'>name</span>
                        {' = '}
                        <span className='text-green'>
                            {"'"}
                            <span className='inline w-7.25 md:w-5.5'>
                                <span>{user ? user.fullName : "Please login in order to continue"}</span>
                            </span>
                            {"'"}
                        </span>
                        {';'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>03</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>....</span>
                        <span className='text-red'>this</span>
                        {'.'}
                        <span className='text-blue'>email</span>
                        {' = '}
                        <span className='text-green'>
                            {"'"}
                            <span className='inline w-7.25 md:w-5.5'>
                            <span>{user?.primaryEmailAddress?.emailAddress ?? "N/A"}</span>
                            </span>
                            {"'"}
                        </span>
                        {';'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>04</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>..</span>
                        {"}"}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>05</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>..</span>
                        <span className='text-yellow'>emailBody</span>
                        {'()'}
                        {' {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>06</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>....</span>
                        <span className='text-purple'>return</span>
                        {' {'}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>07</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>......</span>
                        <span className='text-green'>{"'subject'"}</span>
                        {': '}
                        <span className='text-green'>
                            {"'"}
                            </span>
                        <span className='inline-block w-8.25 md:w-36'>
                                <input type="text" autoComplete='off' className="bg-transparent text-sm md:text-xl text-green font-mono border-0 outline-none" placeholder="Input the subject" />
                            </span>
                            <span className='text-green'>
                            {"'"}
                            </span>
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>08</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>......</span>
                        <span className='text-green'>{"'body'"}</span>
                        {': '}
                            <form className='absolute inline'>
                                <textarea className='ml-4 overflow-hidden resize-none absolute inline bg-transparent text-sm md:text-xl text-green font-mono border-0 outline-none' placeholder="Input the body" cols={25} rows={7}/>
                                </form>
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>09</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>....</span>
                        {"}"}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>10</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        <span className='hidden md:inline text-comment opacity-50'>..</span>
                        {"}"}
                    </span>
                </div>
                <div className='flex flex-row text-sm md:text-xl font-mono'>
                    <span className='mr-4 ml-1 font-light text-right color-comment opacity-20'>11</span>
                    <span className='md:ml-8 ml-4 flex-1'>
                        {"}"}
                    </span>
                </div>

            </div>
            <div className='flex flex-col gap-4 ml-12 md:ml-[calc(1vw+3rem)] mt-4 z-10 md:mt-12'>
                <span className='flex md:w-auto w-12 flex-row items-center gap-4'>
                    <div className='border-2 border-solid border-light w-40 h-12 rounded-lg flex flex-row gap-3 justify-center items-center cursor-pointer font-mono'>
                        <span className='text-light hidden md:block'>
                            Send E-Mail
                        </span>
                        <span className='flex'>
                        <svg className='opacity-50' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
    </svg>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    </Layout>

  );
}
