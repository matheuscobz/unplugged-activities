import { ArrowLeft, ArrowRight, } from "lucide-react";

export function HeaderAtividades(){ 
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center text-center bg-zinc-300 text-xl font-bold px-14">
          
          <button className="hover:text-red-700">
            <div className="flex justify-center items-center" >
              <div className="flex justify-center items-center gap-6 ">
                <ArrowLeft className="size-6"/>
                <a className="" href="/atividades">Atividades</a>
              </div>
            </div>
          </button>

          <ul className="flex justify-center items-center gap-12 h-24 font-bold w-full">


            
          </ul>
          <button className="hover:text-red-700">
            <div className="flex justify-center items-center" >
              <div className="flex justify-center items-center gap-6 ">
                <a className="" href="/">Início</a>
                <ArrowRight className="size-6"/>
              </div>
            </div>
          </button>
        </nav>
      </header> 
    </div>
  )
}