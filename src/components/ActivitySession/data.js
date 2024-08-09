import Img6 from '../../assets/imagensAct/angularjs.jpg';
import Img8 from '../../assets/imagensAct/canva.avif';
import Img7 from '../../assets/imagensAct/escrtorio.jpg';
import Img2 from '../../assets/imagensAct/Introduçãoaprogramação.jpeg';
import Img9 from '../../assets/imagensAct/IntroduçãoFinanceira.webp';
import Img1 from '../../assets/imagensAct/introduçãoHtmlcss.png';
import Img3 from '../../assets/imagensAct/IntroduçãoPy.jpg';
import Img4 from '../../assets/imagensAct/Latex.jpg';
import Img5 from '../../assets/imagensAct/Power-Bi.jpg';
import Img10 from '../../assets/imagensAct/JQZUEKSEGBE5VJAWAZTKAWDEIY.jpg';
import Img11 from '../../assets/imagensAct/LeiGeral.webp';
import Img12 from '../../assets/imagensAct/desInfo.jpg';
import Img13 from '../../assets/imagensAct/cosplay.webp';


const activities = [

    {
        id: 1,
        title: 'Cosplay',
        description: '',
        image: Img13,
        date: '17/08/2024',
        hora: '11h-12h',
        location: 'IFPI - Corrente Campus ',
        speakers: ['Todos os Participantes que Desejarem Participar do Evento'],
        // registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 2,
        title: 'Introdução à HTML e CSS ',
        description: '',
        image: Img1,
        date: '16/08/2024',
        hora: '10h-12h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Ana Francisa', 'Clara Cunha','Ester Lago','Leticia Gonçalves'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 3,
        title: 'Introdução a programação ',
        description: '',
        image: Img2,
        date: '16/08/2024',
        hora: '10h-12h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Eduardo dos Santos Lustosa', 'Henrique Castro do Nascimento','Tiago de Souza Mouta','Thaemilly Souza Seriqueira'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 4,
        title: 'Introdução a programação com Python: Aprendizagem simplificada através de jogos',
        description: '',
        image: Img3,
        date: '16/08/2024',
        hora: '16h-18h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Guilherme Santo Costa', 'Pedro Henrique Vogado Maia','Luiara Vieira'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
  
    {
        id: 5,
        title: 'Latex para criação de artigos científicos',
        description: '',
        image: Img4,
        date: '16/08/2024',
        hora: '18h-19h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Claudemiro Barbosa Nogueira Bispo','Ana Vitoria Dias Carvalho','Heitor Garcez Martins Louzeiro','Felipe Lustosa Carvalho'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 6,
        title: 'Power BI: Visualização e Análise de Dados',
        description: '',
        image: Img5,
        date: '16/08/2024',
        hora: '18h-19h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Daniel de Oliveira Cunha','Carlos Omar Barros Jagnow','Jhenik Teixeira de Brito','Gustavo Moreira Cruz'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 7,
        title: 'Introdução ao desenvolvimento Front-End com Angular',
        description: '',
        image: Img6,
        date: '16/08/2024',
        hora: '18h-19h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Jhonatas Gomes Ribeiro'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 8,
        title: 'Aplicativos de escritório',
        description: '',
        image: Img7,
        date: '17/08/2024',
        hora: '8h-9h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Ana Raquel Martins Carvalho','Jean Carlos Paiva Araújo','Livya Cunha da Luz','Maria Hellena Gomes Damasceno','Nádia Evellyn Pinheiro de Freitas Louzeiro'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 9,
        title: 'Introdução ao Canva',
        description: '',
        image: Img8,
        date: '17/08/2024',
        hora: '10h-11h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Prof. Israel'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },
    {
        id: 10,
        title: 'Educação financeira',
        description: '',
        image: Img9,
        date: '17/08/2024',
        hora: '10h-11h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Rafael Batista (licen.matemática)'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },

    {
        id: 11,
        title: 'Lei Geral de Proteção de Dados',
        description: '',
        image: Img11,
        date: '16/08/2024',
        hora: '20h-21h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Dr. William Rufo'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },

    {
        id: 12,
        title: 'Do Instituto Federal ao mercado Internacional, caminhos para um engenheiro de software',
        description: '',
        image: Img10,
        date: '16/08/2024',
        hora: '21h-22h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['Gabriel Nogueira Leite'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },

    {
        id: 13,
        title: 'Tecnologia, (des)informação e produção social do ódio',
        description: '',
        image: Img12,
        date: '17/08/2024',
        hora: '09h-10h',
        location: 'IFPI - Corrente Campus Auditorium',
        speakers: ['prof. Pedro de Oliveira Júnior'],
        registration: 'https://suap.ifpi.edu.br/eventos/inscricao/1522/'
    },

   

  


];

export default activities;