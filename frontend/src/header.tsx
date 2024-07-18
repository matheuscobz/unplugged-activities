import { Home, Info, NotebookPen } from "lucide-react";

export function Header(){
  return (
    <header>
      <nav className="">
        <ul className="flex justify-center items-center  gap-12 h-24 font-bold text-xl bg-zinc-300 w-full">
          <div className="flex justify-center items-center gap-2 " >
          <Home className="size-6"/>
            <li className="border-b-4  border-b-red-700 flex justify-center items-center gap-2 ">
              <a className="hover:text-red-700" href="/">Início</a>
            </li>
          </div>
          <div className="flex justify-center items-center gap-2" >
            <NotebookPen className="size-6"/>
            <li className="border-b-4  border-b-red-700 ">
              <a className="hover:text-red-700" href="/atividades">Atividades</a>
            </li>
          </div>
          <div className="flex justify-center items-center gap-2" >
          <Info className="size-6"/>
            <li className="border-b-4  border-b-red-700">
              <a className="hover:text-red-700" href="#">Sobre</a>
            </li>              
          </div>
        </ul>
      </nav>
    </header> 
  )
}