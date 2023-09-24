"use client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { createTodo } from "@/actions"


export default function AddTodoForm() {
    async function clientAction(data) {
        const result = await createTodo(data)
        if (result?.error) {
            return alert(result.error)
        } else {
            redirect("/")
        }
    }
    
    return (
        <form action={clientAction} className="flex flex-col gap-5 py-5 w-full lg:w-1/2 mx-auto">
            <div className="form-group">
                <label htmlFor="title" className="text-3xl my-2">Title<br /></label>
                <input type="text" name="title" id="" className="form-control w-full bg-transparent border-4 rounded-xl p-5 my-2 active:outline-none focus:outline-none text-xl" placeholder="Enter Title " />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="text-3xl my-2">Description<br /></label>
                <textarea name="description" id="" rows="6" className="form-control w-full bg-transparent border-4 rounded-xl p-5 my-2 active:outline-none focus:outline-none text-xl" placeholder="Enter Description"></textarea>
            </div>
            <div className="flex justify-end gap-5">
                <Link href="/">
                    <button type="button" className="text-white font-bold py-2 px-4 rounded border-2">
                        Cancel
                    </button>
                </Link>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
            </div>
        </form>
    )
}