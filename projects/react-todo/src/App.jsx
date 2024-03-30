import CrossIcon from "./components/Icons/CrossIcon.jsx"
import MoonIcon from "./components/Icons/MoonIcon.jsx"

const App = () => {
  return (
    <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">ToDo</h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>
        </div>

        <form className="flex gap-4 rounded-md items-center bg-white overflow-hidden py-3 px-4 mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input type="text" placeholder="Create a To Do" className="w-full text-gray-500 outline-none" />

        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">

        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
            <p className="text-gray-600 grow">Complete The Project</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>

        </div>
      </main>

      <section className="px-4 container mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">drag and drop</p>
    </div>
  )
}

export default App