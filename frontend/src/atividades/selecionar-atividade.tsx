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
      <div className="flex flex-col items-center justify-evenly bg-gray-100 h-screen">
        <div className="flex flex-col min-w-[700px] bg-white shadow-2xl rounded gap-6 ">
          <button onClick={routeChangeTuring} className="flex justify-between items-center  border-red-700 border-dashed border-4 rounded-md px-8 py-4 hover:bg-red-700 text-3xl font-bold hover:text-white ">
            Teste de Turing
            <img className="size-24 relative" src="teste-de-turing.png" alt="" />
          </button>
        </div>

        <div className="flex flex-col min-w-[700px] bg-white shadow-2xl rounded gap-6 ">
          <button onClick={routeChangeImageRecognition} className="flex justify-between items-center  border-red-700 border-dashed border-4 rounded-md px-8 py-4 hover:bg-red-700 text-3xl font-bold hover:text-white ">
            Reconhecimento de Imagens
            <img className="size-24 relative" src="reconhecimento-de-imagens.png" alt="" />
          </button>
        </div>

        <div className="flex flex-col min-w-[700px] bg-white shadow-2xl rounded gap-6 ">
          <button onClick={routeChangeNetwork} className="flex justify-between items-center border-red-700 border-dashed border-4 rounded-md px-8 py-4 hover:bg-red-700 text-3xl font-bold hover:text-white ">
            Rede Adversária Generativa
            <img className="size-24 relative" src="rede-neural.png" alt="" />
          </button>
        </div>
      </div>

      <footer>
        <div className="flex items-center justify-center bg-black text-white py-6">
          <a href="https://www.flaticon.com/br" title="">Ícones criados por CapVora - Flaticon</a>
        </div>
      </footer>
    </div>
    
    
  )
}