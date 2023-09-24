'use client'
import Link from 'next/link'
import TodoItem from '@/components/TodoItem'
import { useEffect, useState } from 'react'
import { getTodos } from '@/actions'



export default function Home() {

  const [todos, settodos] = useState([])
  const fetchAlltodos = async () => {
    const todos = await getTodos()
    settodos(todos)
  }
  
  useEffect(() => {
    fetchAlltodos()
  }, []);

  return (
    <>
      <header className='flex justify-between items-center mb-10'>
        <h1 className='text-5xl font-bold'>ToDo</h1>
        <Link
          className='px-4 py-2 text-white text-xl bg-transparent border-2 rounded hover:bg-blue-600'
          href="/new"
        >New</Link>
      </header>
      <ul className='w-3/4 mx-auto'>
        {
          todos.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo}  />
            )
          })
        }
        {
          todos.length === 0 && <>
            <p className="text-6xl text-center text-gray-300">
              No tasks yet!
            </p>
          </>
        }
      </ul>
    </>
  )
}
