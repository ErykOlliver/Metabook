'use client'

interface Character {
    id: string;
    name: string;
    powerstats: {
        intelligence: string;
        strength: string;
        speed: string;
        durability: string;
        power: string;
        combat: string;
    };
    biography: {
        'full-name': string;
        'alter-egos': string;
        aliases: string[];
        'place-of-birth': string;
        'first-appearance': string;
        publisher: string;
        alignment: string;
    };
    appearance: {
        gender: string;
        race: string;
        height: string[];
        weight: string[];
        'eye-color': string;
        'hair-color': string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        'group-affiliation': string;
        relatives: string;
    };
    image: {
        url: string;
    };
}


import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Cards } from '../UI_KIT/Cards'
import handleCharacter from '@/app/scripts/characterdb';
const data: Character[] = require('../../public/characters.json')

export default function Home() {
    const [query, setQuery] = useState('');

    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <header className='w-full py-2.5 gap-2.5 justify-center flex flex-col items-center text-center'>
                <Image src={"/metabook.svg"} width={25} height={29} alt='metabook-slogan' />
                <h1 className='text-2xl font-montserrat font-bold'>METABOOK</h1>
                <h2 className='text-base font-opensans text-secondary'>Your catalog of favorite heroes and villains.</h2>
                <p className='text-xs font-opensans text-secondary'>Search for characters, uncover powers, and explore the expanded universe of fiction with real-time data from the SuperHero API.</p>
            </header>
            <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder='Who do you want to discover today?' className='border top-56 w-[90%] focus:outline-none border-border bg-bg px-2.5 text-secondary h-fit text-sm py-2.5' />
            <article className='bg-cards border border-border w-full px-2.5 pt-2.5 mt-2.5 pb-2.5 min-h-120 max-h-125 overflow-y-auto gap-4.5 grid grid-cols-1 lg:grid lg:grid-cols-5'>
                {data.map((character, index) => (
                    <Cards key={index} name={character.name} full_name={character.biography['full-name']} publisher={character.biography.publisher} />
                ))}
            </article>
        </section>
    )
}
