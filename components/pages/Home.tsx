'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Cards } from '../UI_KIT/Cards'

export default function Home() {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const [query, setQuery] = useState('');
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <header className='w-full py-2.5 gap-2.5 justify-center flex flex-col items-center text-center'>
                <Image src={"/metabook.svg"} width={25} height={29} alt='metabook-slogan' />
                <h1 className='text-2xl font-montserrat font-bold'>METABOOK</h1>
                <h2 className='text-base font-opensans text-secondary'>Your catalog of favorite heroes and villains.</h2>
                <p className='text-xs font-opensans text-secondary'>Search for characters, uncover powers, and explore the expanded universe of fiction with real-time data from the SuperHero API.</p>
            </header>
            <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder='Who do you want to discover today?' className='sticky border top-56 w-[93%] focus:outline-none border-border bg-bg px-2.5 text-secondary h-fit text-sm py-2.5' />
            <article className='bg-cards border border-border w-full px-2.5 pt-8 pb-2.5 min-h-120 max-h-125 overflow-y-auto gap-2.5 flex flex-col'>
                <Cards name='' full_name='Peter Parker' biography='bio' publisher='marvel' />
                <Cards name='' full_name='Peter Parker' biography='bio' publisher='marvel' />
                <Cards name='' full_name='Peter Parker' biography='bio' publisher='marvel' />
                <Cards name='' full_name='Peter Parker' biography='bio' publisher='marvel' />
            </article>
        </section>
    )
}
