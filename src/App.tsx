import { Input } from "./components/Input"

function App() {
  return <div className="flex flex-col justify-center items-center mt-12">
    <h1 className="text-gray-700 font-bold text-2xl mb-6">Clone de Input</h1>
    <div className="flex flex-col gap-3 mt-2 w-96">
      <Input id="name" className="text" placeholder="Nome" required={true}/>
      <Input id="email" className="email" placeholder="E-mail" required={true}/>
    </div>
  </div>

}

export default App
