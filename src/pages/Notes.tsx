import { SignIn, useUser } from "@clerk/nextjs";
import Layout from './Layout';
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image'




import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Notes(): JSX.Element { 
  const [showSwiper, setShowSwiper] = useState(false);

  const handleBiolgiaClick = () => {
    setShowSwiper(true);
  };

  const handleReturnClick = () => {
    setShowSwiper(false);
  }


  if (showSwiper) {
    return (
      <div>
        <div className="absolute top-4 left-4 z-10">
          <button className="text-white bg-blue-500 p-2 rounded-lg" onClick={handleReturnClick}>
            Return
          </button>
        </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}
      >
        
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia1.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia2.jpeg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia3.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia4.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia5.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia6.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia7.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia8.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
        <SwiperSlide style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><Image src="/biologia9.jpg" alt="sanka" width="1024" height="1024" /></SwiperSlide>
      </Swiper>
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Notes - brunovsky.online</title>
      </Head>
      <main className="z-10">
        <section className='border-2 border-solid border-white rounded-2xl w-full h-fit z-10 relative'>
          <div className="flex flex-row overflow-hidden rounded-2xl w-full h-60 bg-gray">
            <div className=" overflow-hidden w-1/3 flex flex-col ">
              <div
                className="h-1/2 w-full justify-center text-center flex items-center cursor-pointer"
                onClick={handleBiolgiaClick}
              >
                <p className="text-2x1 font-mono">Biológia</p>
              </div>
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">Slovenčina</p>
              </div>
            </div>
            <div className=" overflow-hidden w-1/3 flex flex-col">
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">Nemčina</p>
              </div>
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">Matematika</p>
              </div>
            </div>
            <div className=" overflow-hidden w-1/3 flex flex-col ">
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">Geografia</p>
              </div>
              <div className="h-1/2 w-full justify-center text-center flex items-center">
                <p className="text-2x1 font-mono">Informatika</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
