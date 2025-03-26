import prisma from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET() {
    try {
        const subCategories = await prisma.subCategory.findMany({})

        return NextResponse.json({subCategories}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch subCategories'}, {status: 500})
    }
}

export async function POST(request: NextRequest) {
    const {name, categoryId} = await request.json()

    try {
        const subCategory = await prisma.subCategory.create({
            data: {
                name: name,
                categoryId: categoryId,
            }
        })

        return NextResponse.json({subCategory}, {status: 201})

    } catch (error) {
        return NextResponse.json({error: 'Failed to create subCategory'}, {status: 500})
    }
}