import AddTodoForm from "@/components/AddTodoForm"




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