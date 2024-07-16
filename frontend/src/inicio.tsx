import { ArrowUpRight } from "lucide-react";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";



export function Inicio() {
  const navigate = useNavigate()
  const routeChange = () => {
    const path = `/atividades`
    navigate(path)
  }
  
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex justify-center bg-gray-100 ">
        <div className="flex flex-col items-center justify-center min-w-[800px] max-w-[900px] m-10 bg-white p-12 shadow-xl rounded">
          <h2 className="text-3xl text-center font-bold my-12 py-12 border-y-4 border-dashed border-red-700 w-full">Inteligência Artificial Desplugada</h2>

          <p className="text-justify text-lg">Nosso portal foi desenvolvido para auxiliar professores do ensino médio na aplicação de <strong>atividades desplugadas</strong> que promovem o <strong>pensamento computacional</strong>. Estas atividades são alinhadas com a competência (EM13CO10) do novo documento complementar à BNCC, que visa a compreensão dos fundamentos da <strong>Inteligência Artificial</strong>, sua comparação com a inteligência humana e a análise de suas potencialidades, riscos e limites.</p>
          <br />
 
          <p className="text-justify text-lg mb-12">No nosso portal, você terá acesso a uma variedade de atividades educativas que não requerem o uso de computadores, permitindo que os alunos desenvolvam habilidades importantes de forma lúdica e interativa. As atividades disponíveis são projetadas para serem facilmente integradas no currículo escolar e engajar os alunos em conceitos fundamentais da IA.</p>
          
          <div className="flex flex-col text-lg">
            <h3 className="font-bold text-xl">Atividades disponíveis:</h3>
            <ol className="list-disc list-inside flex flex-col mt-4 mb-6 gap-6 text-justify ">
              <li>
                São diversas atividades que abordam conceitos de Inteligência Artificial sem que seja necessário saber programar ou utilizar algum software específico.
              </li>
              <li>
                Todas as atividades trazem orientações para o professor, informações curriculares, explicações detalhadas, materiais adicionais e aprofundamentos.
              </li>
            </ol>
          </div>
          <p></p>

          <button onClick={routeChange} className="bg-red-700 text-lg p-6 w-full mb-12 text-white hover:bg-red-600 font-bold tracking-widest flex justify-center gap-6 items-center">
            <a href="/atividades">Acesse as atividades</a>
            <ArrowUpRight className="size-7"/>
          </button>

          <p className="text-lg text-justify mb-12">A coleção pode ser utilizada prioritariamente com estudantes do ensino médio, não se restrigindo a somente uma única idade ou conhecimento prévio. As atividades foram desenvolvidas com base em projetos reconhecidos internacionalmente e são utilizadas em diversos países, destacando-se pela sua qualidade e eficácia pedagógica.</p>

          <div className="flex flex-col text-lg mt-4 mb-16 gap-6">
            <h3 className="font-bold text-xl">Objetivo</h3>
            <p className="text-justify">
              Capacitar professores e alunos com o conhecimento necessário para navegar no mundo cada vez mais digital e automatizado, desenvolvendo uma compreensão crítica da Inteligência Artificial e suas aplicações no mundo real.
            </p>
            <p className="text-justify">
              Explore nosso portal e descubra como cada atividade pode transformar a sala de aula em um ambiente de aprendizado e inovador. Juntos, vamos preparar os alunos para os desafios e oportunidades do futuro tecnológico.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-gray-500">
          <p className="text-gray-500">a</p>
        </div>
      </footer>
    </>  
  )
}

