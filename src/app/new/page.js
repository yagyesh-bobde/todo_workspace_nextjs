
'use server'

import AddTodoForm from "@/components/AddTodoForm"
import { redirect } from "next/navigation"

export async function createTodo(data) {

    try {
        const title = data.get("title")?.valueOf()
        const description = data.get("description")?.valueOf()

        if (!title || !description) throw new Error("Invalid data")

        await prisma.Todo.create({
            data: {
                title,
                description,
                complete: false
            }
        })

        return { 
            status : 'success', 
            message: 'Todo created successfully'
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}



export default async function New() {

    return (
        <>
            <h1 className="text-2xl md:text-5xl">
                Create New Todo
            </h1>
            <AddTodoForm />
        </>
    )
}