import { HeaderAtividades } from "./header-atividade";

export function RedeAdversariaGenerativa(){
  return(
    <div>
      <HeaderAtividades />
      <section className="flex justify-center bg-gray-100 ">
        <div className="flex flex-col min-w-[800px] max-w-[900px] m-10 bg-white p-12 shadow-xl rounded gap-6 text-md text-justify">
          <h1 className=" font-semibold mb-4 text-3xl text-center border-y-4 border-dashed border-red-700 py-8"> 
            Rede Adversária Generativa
          </h1>

          <p>Esta atividade aborda como os computadores podem aprender a criar novas coisas, como desenhos ou músicas, ao imitar exemplos existentes. Imagine que estamos ensinando um computador a desenhar, e ele aprende observando muitos desenhos de dinossauros.</p>

          <p>A atividade envolve três grupos de estudantes. O primeiro grupo irá desenhar sabendo por antecipação o tema do desenho. Por outro lado, o segundo grupo não tem noção do tema desse desenho e precisa descobrir justamente qual é o tema desse desenho. O terceiro será o responsável em avaliar se os desenhos estão de acordo com o tema estabelecido e passar um feedback do mesmo.</p>

          <p>Esta abordagem ilustra o conceito de uma Rede Adversária Generativa, onde dois modelos de inteligência artificial competem entre si: um gerador que cria novos exemplos e um discriminador que tenta distinguir entre exemplos reais e gerados.</p>

          <div className="flex justify-center">
            <img className="border-4 border-red-700" src="../exemplo-1-rede-adversaria-generativa.jpg" alt="Imagem de execução da atividade de reconhecimento de imagens"/>
          </div>

          <h2 className="text-2xl font-bold "><span className="border-b-4 border-red-700">Atividade</span></h2>
          <ol className="list-decimal list-inside">
            <li>Divida os estudantes em 4 grupos: Real (R), Gerador/Falso (G), Discriminador (D) e Rede (W).</li>
            <li>O grupo R recebe do professor os atributos que definem a imagem real (por exemplo: "Os verdadeiros desenhos devem ser de dinossauros").</li>
            <li>O grupo R desenha dinossauros de acordo com as regras definidas.</li>
            <li>O grupo G tenta imitar os desenhos de dinossauros, mas com algumas características que os diferenciem.</li>
            <li> O grupo W escolhe um dos desenhos (real ou falso) e o envia ao grupo D para avaliação.</li>
            <li> O grupo D analisa o desenho e decide se ele cumpre as regras definidas (se é real ou falso).</li>
            <li>Os desenhos são devolvidos aos grupos que os geraram (R ou G) com o feedback do grupo D sobre o que estava correto ou incorreto.</li>
            <li>O processo se repete com o grupo G ajustando seus desenhos baseando-se no feedback recebido, tentando criar desenhos mais realistas.</li>
            <li> A atividade continua por 30 minutos ou até que o grupo G consiga criar desenhos falsos tão realistas que o grupo D não consiga mais distingui-los dos reais.</li>
          </ol>
         
          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Objetivo</span>
          </h2>
          <p>Esta atividade visa proporcionar aos estudantes uma introdução prática aos conceitos fundamentais das Redes Adversárias Generativas (GANs). Ao simular uma competição entre dois grupos de estudantes, um que cria desenhos verdadeiros (Grupo Real) e outro que tenta criar desenhos falsos que pareçam autênticos (Grupo Gerador), os participantes irão explorar como a inteligência artificial pode se manifestar de forma lúdica.</p>

          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Materiais necessários</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>Papel em branco para desenhar</li>
            <li>Canetas ou lápis</li>
            <li>Espaço para dividir os grupos sem que vejam uns aos outros</li>
            <li>Cronômetro</li>
          </ul>

          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Passos</span>
          </h2>
          
            <ol className="list-decimal list-inside">
                <li>Dividir os estudantes em 4 grupos: Real (R), Gerador/Falso (G), Discriminador (D) e Rede (W).</li>
                <li>O grupo R recebe do professor os atributos que definem a imagem real (por exemplo: "Os verdadeiros desenhos devem ser de dinossauros").</li>
                <li>O grupo W escolhe um dos grupos para enviar o desenho ao grupo D.</li>
                <li>O grupo D avalia o desenho e decide se ele condiz com a regra definida pelo instrutor (se é real ou falso).</li>
                <li>Os desenhos são devolvidos aos grupos que os geraram (R ou G) com o feedback do grupo D.</li>
                <li>O processo se repete com o grupo G ajustando suas tentativas de desenhar imagens realistas baseando-se no feedback recebido.</li>
                <li>A atividade continua por 30 minutos ou até que o grupo G consiga desenhar imagens falsas tão realistas que o grupo D não consiga mais distingui-las das reais.</li>
            </ol>
            <div className=" flex justify-center">
              <img className="border-4  border-red-700" src="../exemplo-2-rede-adversaria-generativa.jpg" alt="Imagem do exemplo da execução do jogo"/>
            </div>


          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Vídeos</span>
          </h2>
          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Exercícios</span>
          </h2>
          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Discussão</span>
          </h2>
          <h2 className="text-2xl font-bold ">
            <span className="border-b-4 border-red-700">Conteúdo adicional</span>
          </h2>
        </div>
      </section>
    </div>
  )
}