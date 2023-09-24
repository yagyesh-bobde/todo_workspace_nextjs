'use server'

export async function getTodos() {
    const todos = await prisma.Todo.findMany({
        orderBy: [
            {
                complete: 'asc'
            },
            {
                createdAt: 'desc',
            }
        ]
    })
    return todos
}


export async function updateTodo(id, complete) {
    await prisma.Todo.update({
        where: { id },
        data: { complete },
    })
    return {
        status: 'success',
        message: "Todo Updated Successfully",
    }
}


export async function deleteTodo (id) {
    try {
        const todo = await prisma.Todo.delete({
            where: { id },
        })
        return { 
            status: 'success',
            todo,
            message: "Todo Deleted Successfully",
        }       
    } catch (error) {
        return {
            status: 'error',
            error: error.message,
        }
    }
}


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
            status: 'success',
            message: 'Todo created successfully'
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}