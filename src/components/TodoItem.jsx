'use client'
import Delete from "@/assets/delete.svg"
import Edit from "@/assets/edit.svg"
import Image from "next/image"
import { updateTodo } from "@/actions"
import DeleteModal from '@/components/Modal/DeleteModal'
import { useState } from "react"

export default function TodoItem({ id, title, description, complete } ) {
    const [showDelete, setshowDelete] = useState(false)

    return (
        <>
            <li key={id} className="border-b-[1px] py-2 flex justify-between items-center">
                <div className="">
                    <input type="checkbox" className="peer" name={id} id={id} defaultChecked={complete} onChange={e => updateTodo(id , e.target.checked)} />
                    <label htmlFor={id} className="cursor-pointer text-xl mx-2 peer-checked:line-through peer-checked:text-gray-500 duration-300" >{title}</label><br></br>
                    <label className="peer-checked:line-through peer-checked:text-gray-500 duration-300">
                        {description}
                    </label>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    {/* <Image src={Edit} alt="edit todo" className="hover:cursor-pointer hover:scale-[1.15] duration-100" /> */}
                    <Image
                      className="hover:cursor-pointer hover:scale-110 duration-100"
                      alt="delete todo"
                      onClick={() =>
                      setshowDelete(true)}
                      src={Delete}
                    />
                </div>

               { 
                    showDelete && <DeleteModal setshowDelete={setshowDelete} id={id} />
               }
            </li>
        </>
    )
}