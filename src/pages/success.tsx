import { resetCart } from '@/store/nextSlice';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux'

const Success = () => {
    const dispatch=useDispatch();
  return (
    <div className='flex flex-col gap-2 items-center justify-center py-20'>
        <h1 className='text-2xl font-semibold'>
            Thankyou for Shopping in Amazon.
        </h1>
        <Link href="/" onClick={()=>dispatch(resetCart())}>
        <p className='text-green-500 animate-bounce hover:underline decoration-[1px] text-md  '>Continue Shopping</p>
        </Link>
    </div>
  )
}

export default Success;