import { NextResponse } from "next/server";
import fs from 'fs'

export async function GET() {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const character_limits = 732;
    const characters = [];

    for (let i = 0; i <= character_limits; i++) {
        try {
            const response = await fetch(`https://superheroapi.com/api/${key}/${i}`)
            const data = await response.json();

            if (data.response === 'success') {
                characters.push({
                    id: data.id,
                    name: data.name,
                    powerstats: {
                        ...data.powerstats
                    },
                    biography: {
                        ...data.biography
                    },
                    appearance: {
                        ...data.appearance
                    },
                    work: {
                        ...data.work
                    },
                    connections:{
                        ...data.connections
                    },
                    image:{
                        ...data.image
                    }
                })
            }

            await new Promise(r => setTimeout(r, 200));

        } catch (err) {

        } finally {
            console.log('tudo certo')
        }
    }
    fs.writeFileSync('public/characters.json', JSON.stringify(characters, null, 2))
    return NextResponse.json({ success: true, total: characters.length });
}