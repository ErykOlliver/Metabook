import React from 'react'

type props = {
    publisher?: string,
    name?: string,
    full_name?: string,
    biography?: string
}

export const Cards = (props: props) => {
    return (
        <div className='w-full border border-border shadow-2xl font-opensans bg-cards px-2.5 py-2 flex flex-col items-start justify-between min-h-fit max-h-60'>
            <div className='flex flex-col border-b py-1.5 border-secondary w-full'>
                <span className='px-1 text-sm bg-cta uppercase rounded-xs w-fit'>{props.publisher}</span>
                <h2 className='text-xl font-semibold'>{props.name}</h2>
                <p className='text-base text-secondary'>{props.full_name}</p>
            </div>
            <div className='w-full min-h-16'>
                <p className='w-full text-start   text-secondary'>{props.biography}</p>
            </div>
            <button className='w-full h-fit py-2.5 border border-secondary'>COMPLETE SHEET</button>
        </div>
    )
}
