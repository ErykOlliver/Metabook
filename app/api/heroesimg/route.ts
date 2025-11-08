import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
    const data = JSON.parse(fs.readFileSync('public/characters.json', 'utf-8'))

    const folder = path.join(process.cwd(), 'public/portraits')
    if (!fs.existsSync(folder)) fs.mkdirSync(folder)

    for (const char of data) {
        const imageUrl = char.image?.url
        if (!imageUrl) continue

        try {
            const response = await fetch(imageUrl, {
                headers: {
                    // Adiciona cabeçalhos que imitam um navegador real
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                    Referer: 'https://www.superherodb.com/',
                },
            })

            // Checa se o servidor respondeu com sucesso
            if (!response.ok) {
                console.error(`Erro ao baixar ${char.name}: ${response.status}`)
                continue
            }

            // Verifica o tipo real da imagem
            const contentType = response.headers.get('content-type')
            let ext = '.jpg'
            if (contentType?.includes('png')) ext = '.png'
            if (contentType?.includes('webp')) ext = '.webp'

            const filename = path.join(folder, `${char.id}${ext}`)

            // Se já existe, pula
            if (fs.existsSync(filename)) continue

            const buffer = Buffer.from(await response.arrayBuffer())

            // Grava a imagem real no disco
            fs.writeFileSync(filename, buffer)
            console.log(`✅ Imagem salva: ${char.name}`)
        } catch (err: any) {
            console.error(`❌ Falha em ${char.name}: ${err.message}`)
        }

        // Pausa pra evitar bloqueio (rate limit)
        await new Promise((r) => setTimeout(r, 500))
    }

    return NextResponse.json({ success: true })
}
