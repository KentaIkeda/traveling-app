'use client';

import React, { useRef } from 'react';

export default function SearchAttraction() {
  const ref = useRef<HTMLInputElement | null>(null);
  function handleSubmit() {
    if (ref.current) {
      console.log(ref.current.value);
    }
  }

  return (
    <React.Fragment>
      <div className='relative left-1/2 -translate-x-1/2 flex flex-col w-96 my-32'>
        <input
          ref={ref}
          type='text'
          placeholder='キーワードで検索！'
          className='border h-10 text-xl'
        />
        <button
          className='bg-green-500 h-10 w-1/2 relative left-1/2 -translate-x-1/2 mt-16 shadow-md'
          onClick={handleSubmit}
        >
          検索
        </button>
      </div>
    </React.Fragment>
  );
}
