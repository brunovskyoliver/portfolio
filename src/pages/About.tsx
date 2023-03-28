import Layout from './Layout';
import { useEffect } from 'react';
import Blob from './Blob';

export default function About(): JSX.Element {  
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        let interval: NodeJS.Timeout | null = null;
    
        const onMouseOver = (event: MouseEvent) => {
          let iteration = 0;
    
          clearInterval(interval as NodeJS.Timeout);
    
          interval = setInterval(() => {
            const target = event.target as HTMLHeadingElement;
            if (!target || !target.dataset.value) return;
    
            target.innerText = target.innerText
              .split("")
              .map((letter, index) => {
                if(index < iteration) {
                  return target.dataset.value![index];
                }
    
                return letters[Math.floor(Math.random() * 26)]
              })
              .join("");
    
            if(iteration >= target.dataset.value!.length){ 
              clearInterval(interval as NodeJS.Timeout);
            }
    
            iteration += 1 / 3;
          }, 30);
        };
    
        const h1Element = document.querySelector("h1");
        if (h1Element) {
          h1Element.addEventListener("mouseover", onMouseOver);
        }
    
        return () => {
          if (h1Element) {
            h1Element.removeEventListener("mouseover", onMouseOver);
          }
          clearInterval(interval as NodeJS.Timeout);
        };
      }, []);
  return (
    <Layout>
      <Blob />
      <div className='flex flex-row h-screen'>
        <div className='flex justify-start p-14 w-1/2 z-10'>
          <div className=''>
            <h1 data-value='Welcome' className='text-2xl md:text-3xl font-mono underline'>Welcome</h1>
            <h2 className='text-xl md:text-2xl font-mono underline md:ml-14'>my about page!</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
