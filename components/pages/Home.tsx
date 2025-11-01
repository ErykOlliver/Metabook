import Image from 'next/image'
import React from 'react'

export default function Home() {
    return (
        <section>
            <header>
                <Image src={"/metabook.svg"} width={25} height={29} alt='metabook-slogan' />
                <h1>METABOOK</h1>
                <h2>Your catalog of favorite heroes and villains.</h2>
                <p>Search for characters, uncover powers, and explore the expanded universe of fiction with real-time data from the SuperHero API.</p>
            </header>
            <article>

            </article>
        </section>
    )
}
