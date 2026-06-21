/**
 * Conteúdo central do site.
 *
 * >>> Para personalizar o site, edite SOMENTE este arquivo. <<<
 * Troque os textos, o número de WhatsApp, o link do Instagram e os depoimentos.
 * Campos marcados com TODO precisam dos dados reais da Pamella.
 */

export const contato = {
  nome: 'Pamella Martins',
  profissao: 'Nutricionista',
  // CRN-3 (região de São Paulo)
  crn: 'CRN-3 87155',
  // WhatsApp no formato internacional (55 + DDD + número)
  whatsapp: '5511993202062',
  whatsappMensagem: 'Oi, Pamella! Vim pelo site e quero agendar uma consulta.',
  instagramUser: 'nutri.pamella.martins',
  instagramUrl: 'https://www.instagram.com/nutri.pamella.martins/',
  email: 'pamellamartins.nutri@gmail.com',
  cidade: 'Atendimento presencial em São Bernardo do Campo (SP) e online',
  // Consultórios (presencial). Edite/adicione à vontade.
  enderecos: [
    {
      rua: 'Rua Almirante Tamandaré, 23',
      bairro: 'Taboão — São Bernardo do Campo/SP',
    },
    {
      rua: 'Rua Avaré, 295',
      bairro: 'Baeta Neves — São Bernardo do Campo/SP',
    },
  ],
};

export const hero = {
  selo: 'Nutrição com acompanhamento de verdade',
  titulo: 'Saúde que cabe na sua rotina, resultado que dura a vida toda',
  subtitulo:
    'Emagrecimento, saúde da mulher e longevidade com um plano alimentar feito para você — sem dietas malucas, com ciência e leveza.',
  ctaPrimario: 'Agendar minha consulta',
  ctaSecundario: 'Conhecer o trabalho',
};

export const sobre = {
  titulo: 'Prazer, eu sou a Pamella',
  paragrafos: [
    'Sou nutricionista e acredito que cuidar da alimentação não precisa ser sinônimo de sofrimento, restrição ou contar caloria o dia inteiro. Meu trabalho é te ajudar a construir uma relação leve e saudável com a comida — respeitando a sua rotina, os seus gostos e o seu momento de vida.',
    'Atendo presencialmente em São Bernardo do Campo e também online, sempre de forma individualizada — olhando para os seus exames, o seu estilo de vida e os seus objetivos. Cada plano é único: nada de dieta pronta copiada da internet. Aqui a gente constrói hábitos que você consegue manter de verdade.',
    'Tenho pós-graduação em Bariátrica e Obesidade, Nutrição Estética e Nutrição Clínica e Esportiva, e sigo me especializando — atualmente em Fitoterapia — para entregar sempre o melhor a cada paciente.',
  ],
  credenciais: [
    'Nutricionista formada',
    'Pós em Bariátrica e Obesidade',
    'Pós em Nutrição Estética',
    'Pós em Nutrição Clínica e Esportiva',
    'Cursando pós em Fitoterapia',
  ],
};

export const especialidades = [
  {
    icone: 'leaf',
    titulo: 'Emagrecimento & obesidade',
    texto:
      'Com pós-graduação em bariátrica e obesidade: perda de peso com saúde, sem efeito sanfona e respeitando a sua rotina.',
  },
  {
    icone: 'sparkle',
    titulo: 'Nutrição estética',
    texto:
      'Alimentação e protocolos para pele, cabelo, unhas e autoestima — a beleza que começa de dentro pra fora.',
  },
  {
    icone: 'activity',
    titulo: 'Nutrição esportiva',
    texto:
      'Mais energia, performance e resultado no treino, com estratégia alinhada ao seu objetivo e à sua modalidade.',
  },
  {
    icone: 'flower',
    titulo: 'Saúde da mulher & longevidade',
    texto:
      'Equilíbrio hormonal em cada fase e nutrição para viver com mais disposição, saúde e qualidade de vida por muito mais tempo.',
  },
  {
    icone: 'plate',
    titulo: 'Dietas personalizadas',
    texto:
      'Nada de cardápio genérico. Seu plano é montado a partir dos seus exames, preferências, restrições e objetivos.',
  },
  {
    icone: 'pill',
    titulo: 'Fitoterapia & suplementação',
    texto:
      'Uso inteligente de fitoterápicos e suplementos, com base em evidência e na sua individualidade — sem desperdício.',
  },
];

export const comoFunciona = [
  {
    numero: '01',
    titulo: 'Primeiro contato',
    texto: 'Você chama no WhatsApp, tira suas dúvidas e a gente agenda sua consulta no melhor horário.',
  },
  {
    numero: '02',
    titulo: 'Primeira consulta',
    texto:
      'Um encontro tranquilo, de cerca de uma hora, todo dedicado a você. O momento de escutar sua história e entender o que você precisa.',
  },
  {
    numero: '03',
    titulo: 'Avaliação completa',
    texto:
      'Anamnese detalhada: histórico de saúde, exames, hábitos, rotina e avaliação da composição corporal. Tudo para ter um ponto de partida claro.',
  },
  {
    numero: '04',
    titulo: 'Plano alimentar individual',
    texto:
      'Monto um plano sob medida, prático e do seu jeito, com orientações e, quando necessário, recomendação de suplementação.',
  },
  {
    numero: '05',
    titulo: 'Acompanhamento',
    texto:
      'Acompanho sua evolução de perto, ajusto o que for preciso, defino metas e celebro cada conquista com você.',
  },
];

export const paraQuem = {
  titulo: 'Esse acompanhamento é pra você que…',
  itens: [
    'Quer emagrecer com saúde e parar com o efeito sanfona',
    'Já tentou várias dietas e nunca conseguiu manter',
    'Busca equilíbrio hormonal e saúde da mulher em cada fase',
    'Quer mais energia, disposição e qualidade de vida',
    'Está confusa com suplementos e quer orientação séria',
    'Deseja uma relação leve e sem culpa com a comida',
  ],
};

// Resumo das avaliações reais do Google Negócios da Pamella.
export const googleAvaliacoes = {
  nota: '5,0',
  total: 44,
  url: 'https://maps.app.goo.gl/JLMkXrET61pq7vL8A',
};

export const depoimentos = [
  // Avaliações reais do Google Negócios (Nutri Pamella Martins).
  {
    nome: 'Joiciane Valéria',
    texto:
      'Profissional excelente, de um carinho e empatia que te motiva! Ela te dá todo o suporte necessário para alcançar os seus objetivos, com leveza e total disciplina.',
  },
  {
    nome: 'Adriana Gomes',
    texto:
      'Excelente profissional, muda o conceito de dieta: faz uma reeducação alimentar com consciência, não como punição. Atendimento personalizado e preocupada com o bem-estar durante todo o processo. Super recomendo a Pam!',
  },
  {
    nome: 'Jones Gomes',
    texto:
      'Profissional super atenciosa e muito focada, sempre buscando seu desenvolvimento para aplicar com os pacientes. Super recomendo!',
  },
];

export const faq = [
  {
    pergunta: 'O atendimento é online ou presencial?',
    resposta:
      'Atendo nas duas modalidades. As consultas online são por videochamada e funcionam para todo o Brasil, com a mesma qualidade do presencial.',
  },
  {
    pergunta: 'Você passa dieta de restrição / muito difícil de seguir?',
    resposta:
      'Não. Meu trabalho é construir um plano que caiba na sua rotina e nos seus gostos. A ideia é criar hábitos sustentáveis, não sofrimento.',
  },
  {
    pergunta: 'Quanto tempo até ver resultado?',
    resposta:
      'Cada corpo é único, mas a maioria das pacientes começa a sentir diferença em disposição e bem-estar já nas primeiras semanas. O foco é resultado consistente e duradouro.',
  },
  {
    pergunta: 'Como faço para agendar?',
    resposta:
      'É só clicar em qualquer botão de WhatsApp aqui no site. A gente conversa, tira suas dúvidas e marca o melhor horário para você.',
  },
];
