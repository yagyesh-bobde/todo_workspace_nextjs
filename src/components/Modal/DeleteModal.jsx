import { redirect } from "next/navigation"
import { deleteTodo } from "@/actions"
import { Router } from "next/router"


export default function DeleteModal({ id, setshowDelete } ) {

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-[1055] overflow-y-auto overflow-x-hidden outline-none grid place-content-center backdrop-blur-sm">
            <div className="text-black w-[350px] md:w-[600px] min-h-[25vh] bg-white shadow-xl flex flex-col h-full">
                <div className="heading flex items-center p-3 text-3xl border-b-4 h-[30%] font-bold">
                    Delete Modal
                </div>
                <div className="body text-2xl font-light p-3 h-[40%]">
                    Are you sure you want to delete this todo?
                </div>
                <div className="footer flex justify-end gap-5 items-center border-t-4 p-3 h-[30%]">
                    <button onClick={() => {
                        setshowDelete(false)
                        
                    }} className="border-2 bg-gray-500 text-white p-3 rounded-md text-xl">
                        Cancel
                    </button>
                    <button className="border-2 bg-red-500 text-white p-3 rounded-md text-xl"
                    onClick={() => {
                        deleteTodo(id)
                        setshowDelete(false)
                    }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}