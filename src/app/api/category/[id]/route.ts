import prisma from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(params: { id: string }) {
    const {id} = params

    try {
        const category = await prisma.category.findMany({
            where: {
                id: id
            },
            include: {
                products: true,
            }
        })
        return NextResponse.json({category}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}

export async function PUT(request: NextRequest, params: { params: { id: string } }) {
    const {id} = params.params
    const {name} = await request.json()

    try {
        const category = await prisma.category.update({
            where: {
                id
            },
            data: {
                name: name
            }
        })
        return NextResponse.json({category}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}

export async function DELETE(_request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params
    console.log("params 2", params)

    if (!id) {
        return NextResponse.json({error: 'Id is invalid or required'}, {status: 400})
    }

    try {
        await prisma.category.delete({
            where: {
                id
            }
        })
        return NextResponse.json({success: `Category with ID ${id} deleted successfully`}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}