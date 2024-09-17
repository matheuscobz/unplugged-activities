import { useNavigate } from "react-router-dom";
import { Header } from "../header";

export function Atividades(){
  const navigate = useNavigate()
  let path = `atividades`

  const routeChangeTuring = () => {
    path = `/atividades/teste-de-turing`
    navigate(path)
  }

  const routeChangeImageRecognition = () => {
    path = `/atividades/reconhecimento-de-imagens`
    navigate(path)
  }

  const routeChangeNetwork= () => {
    path = `/atividades/rede-adversaria-generativa`
    navigate(path)
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center bg-gray-100 h-screen justify-around">

        <div className="flex flex-col min-w-[12rem] bg-white shadow-2xl rounded gap-6 w-1/3">
          <button onClick={routeChangeTuring} className="flex justify-around items-center border-red-700 border-dashed border-4 rounded-md px- py-4 hover:bg-red-700 text-3xl font-bold hover:text-white gap-2 ">
            <span className="px-6">Teste de Turing</span>
            <img className="size-24 shrink-0 " src="teste-de-turing.png" alt="" />
          </button>
        </div>

        <div className="flex flex-col min-w-[12rem] bg-white shadow-2xl rounded gap-6 w-1/3 relative ">
          <button onClick={routeChangeImageRecognition} className="flex justify-around  items-center  border-red-700 border-dashed border-4 rounded-md px-8 py-4 hover:bg-red-700 text-3xl font-bold hover:text-white gap-14">
            <span className="text-center ">Reconhecimento de Imagens</span>
            <img className="size-24 shrink-0 ml-12" src="reconhecimento-de-imagens.png" alt="" />
          </button>
        </div>

        <div className="flex flex-col min-w-[12rem] bg-white shadow-2xl rounded gap-6 w-1/3">
          <button onClick={routeChangeNetwork} className="flex justify-around  items-center  border-red-700 border-dashed border-4 rounded-md px-8 py-4 hover:bg-red-700 text-3xl font-bold hover:text-white gap-12">
            <span className="">Rede Adversária Generativa</span>
            <img className="size-24 shrink-0" src="rede-neural.png" alt="" />
          </button>
        </div>
      </div>

      <footer>
        {/* <div className="flex items-center justify-center bg-black text-white py-6">
          <a href="https://www.flaticon.com/br" title="">Ícones criados por CapVora - Flaticon</a>
        </div> */}
      </footer>
    </div>
    
    
  )
}