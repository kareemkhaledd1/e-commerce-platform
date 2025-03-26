import {NextRequest, NextResponse} from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
    try {
        const category = await prisma.category.findMany({
            include: {
                subCategory: true,
            }
        })
        return NextResponse.json({category}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}

export async function POST(request: NextRequest) {

    const {name} = await request.json()

    try {
        const category = await prisma.category.create({
            data: {
                name: name
            }
        })
        return NextResponse.json({category}, {status: 201})
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}
