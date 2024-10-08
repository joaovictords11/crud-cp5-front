import { FcTodoList } from "react-icons/fc";

const PageTitle = () => {
  return (
    <header className='flex justify-center items-center gap-4 p-6 max-small:flex-wrap-reverse'>
        <FcTodoList className="bg-gray-200 rounded-lg p-1" size={60}/>
        <h1 className="text-5xl font-semibold text-gray-600 text-center">ToDo List</h1>
    </header>
  )
}

export default PageTitle