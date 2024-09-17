import { Header } from "./header";

export function Sobre() {
  return(
    <>
      <Header />
        
      <div className="flex flex-col bg-white mx-52 h-screen text-md gap-6 text-justify ">
        <div className="flex flex-col gap-2">
          <h1 className="text-red-600 font-bold text-3xl mt-12">Sobre</h1>
          <p>A plataforma é uma coletânea de atividades gratuitas que abordam conceitos de Ciência da Computação, focado na área de inteligência artificial. A principal ideia do desenvolvimento desse projeto foi auxiliar professores no processo de conhecimento, tanto teórico quanto prático, de atividades desplugadas relacionadas que possuem alguma relação com o pensamento computacional ensinado nas escolas brasileiras e mundo a fora.</p>

          <p className="">O desenvolvimento foi feito com o objetivo facilitar a inserção das novas competências complementares do ensino médio estabelecidas em 2023. Nossa missão é promover a compreensão dos fundamentos da inteligência artificial, comparando-a com a inteligência humana e analisando suas potencialidades, riscos e limites.</p>
          <p className="">Este projeto foi criado por <a className="underline-offset-0 text-red-700 hover:underline" href="#">Matheus Guizilini</a> sob orientação de <a   className="underline-offset-0 text-red-700 hover:underline" href="#">Guilherme Guerino</a>, como parte do trabalho de conclusão de curso de Ciência da Computação na Univerisade Estadual do Paraná — Campus de Apucarana. O desenvolvimento do portal e a adaptação das atividades foram realizados com foco em oferecer recursos práticos e educativos para professores e alunos.</p>

          
        </div>

        <div>
          <h2 className="text-xl font-bold">Licenciamento</h2>
          <p>Todo o material disponível aqui está sob a licença Creative Commons BY-NC-SA 4.0. Isso significa que é permitido criar derivações do material, desde que a autoria original seja mencionada, não seja permitido uso comercial e as obras derivadas sejam disponibilizadas com a mesma licença.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Alguns exemplos de usos que são <strong>permitidos</strong> para evitar possíveis confusões</p>
          <ul className=" flex flex-col list-disc list-inside">
            <li>Uso pessoal para fins de estudo ou lazer;</li>
            <li>Realização de pesquisas acadêmicas;</li>
            <li>Uso em sala de aula, incluindo instituições privadas de ensino;</li>
            <li>Uso em cursos de formação inicial ou continuada de professores;</li>
          </ul>
          <p>Lembrando que esses usos ainda exigem atribuição de autoria.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Usos que <strong>não são recomendados</strong> a menos que seja realizado um contato prévio dos autores:</p>
          <ul className=" flex flex-col list-disc list-inside">
            <li>Impressão e venda do material;</li>
            <li>Venda do material em formato digital;</li>
          </ul>
        </div>
      </div>

      <footer className="flex flex-col justify-center items-center h-12 bg-black text-white">
        <p className="">Todos direitos reservados.</p>
      </footer>                                 
    </>
  )
}