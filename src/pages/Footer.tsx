import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';

export default function Footer(): JSX.Element {
  
  return (
    <div className="block fixed bottom-0 w-full h-4 z-10 left-0">
        <div className="flex justify-center items-center h-full">
            <p className="text-xs text-white font-mono">
                Made by <a href='https://github.com/brunovskyoliver/'>Oliver Brunovský </a><span className="text-red-500">❤</span>
            </p>
        </div>
    </div>
  );
  
  
}
