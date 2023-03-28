import React, { useEffect } from 'react';

const Blob = () => {
  useEffect(() => {
    const blob = document.getElementById("blob") as HTMLElement;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      window.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    }
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  );
};

export default Blob;
