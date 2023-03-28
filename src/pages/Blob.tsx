import React, { useEffect } from 'react';


const Blob = () => {
  useEffect(() => {
    const blob = document.getElementById("blob") as HTMLElement;

    window.onpointermove = event => {
      const { clientX, clientY } = event;

      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
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
