import { FileX } from 'lucide-react'
import React from 'react'

type props = {
    name: string,
    full_name?: string,
    img: string,
    publisher?: string,
}

export const Cards = (props: props) => {
    return (
        <div className='w-full border border-border shadow-sm shadow-black font-opensans gap-2.5 bg-cards px-2.5 py-2 flex flex-col items-start justify-between h-full max-h-58'>
            <div className='flex border-b py-1.5 gap-1.5 border-secondary w-full'>
                <div className='w-17 h-20 border-border border'>
                    {!props.img ?
                        <div className='w-full h-full flex items-center justify-center text-secondary'><FileX /></div>
                        :
                        // <Image src={props.img} alt={props.name} className='object-cover ' width={67} height={94} />
                        <img src={props.img} alt={props.name} className='object-cover w-full h-full' />
                    }
                </div>
                <div className='flex flex-col w-full justify-center h-full'>
                    <span className='px-1 text-sm bg-cta uppercase rounded-xs w-fit'>{props.publisher}</span>
                    <h2 className='text-xl font-semibold'>{props.name}</h2>
                    <p className='text-base text-secondary'>{props.full_name ? props.full_name : "sem registro"}</p>
                </div>
            </div>
            {/* <div className='w-full min-h-16'>
                <p className='w-full text-start text-secondary'>{props.biography}</p>
            </div> */}
            <button className='w-full h-fit py-2.5 border border-secondary'>COMPLETE SHEET</button>
        </div>
    )
}
