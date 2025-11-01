import Image from 'next/image'
import React from 'react'
import { Cards } from '../UI_KIT/Cards'

export default function Home() {
    return (
        <section>
            <header className='w-full py-2.5 gap-2.5 justify-center flex flex-col items-center text-center'>
                <Image src={"/metabook.svg"} width={25} height={29} alt='metabook-slogan' />
                <h1 className='text-2xl font-montserrat font-bold'>METABOOK</h1>
                <h2 className='text-base font-opensans text-secondary'>Your catalog of favorite heroes and villains.</h2>
                <p className='text-xs font-opensans text-secondary'>Search for characters, uncover powers, and explore the expanded universe of fiction with real-time data from the SuperHero API.</p>
            </header>
            <article>
                <Cards name='Spider-Man' full_name='Peter Parker' biography='bio' publisher='marvel' />
            </article>
        </section>
    )
}
