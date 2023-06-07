/* eslint-disable max-len */
import { Prop } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

export class CreateMethodologyDto {
  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'name',
    description: 'name of active methodology',
    example: ' Flipped Classroom (FC)- inglês \n Sala de Aula Invertida (SAI) — português'
  })
  name: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'about',
    description: 'about of active methodology',
    example:
      'A metodologia Flipped Classroom (FC) - Sala de Aula Invertida (SAI) é uma metodologias populares para o ensino de cursos de computação, depende dos estudantes realizarem o trabalho preparatório (prep) antes da aula[1]. É uma metodologias de ensino e aprendizagem no qual a instrução direta é fornecida principalmente fora e antes da sala de aula por meio de vídeos [2]. A metodologia FC surgiu da inquietação dos professores, Jonathan Bergman e Aaron Sams, que lecionavam na Woodland Park High School em Woodland Park, Colorado, escola do ensino médio americano, que tinha o objeüvo de ensinar aos estudantes, independentemente de estarem fisicamente em sala de aula [4].'
  })
  about: string

  @Prop({
    type: {
      min: Number,
      max: Number
    }
  })
  @ApiProperty({
    type: 'object',
    properties: {
      min: { type: 'number' },
      max: { type: 'number' }
    },
    name: 'timeToApply',
    description: 'time needed for classroom application',
    example: {
      min: 21,
      max: 45
    }
  })
  timeToApply: {
    min: number
    max: number
  }

  @Prop({
    type: {
      min: Number,
      max: Number
    }
  })
  @ApiProperty({
    type: 'object',
    properties: {
      min: { type: 'number' },
      max: { type: 'number' }
    },
    name: 'participants',
    description: 'number of participants',
    example: {
      min: 21,
      max: 45
    }
  })
  participants: {
    min: number
    max: number
  }

  @Prop({
    type: {
      faculty: String,
      student: String
    }
  })
  @ApiProperty({
    type: 'object',
    properties: {
      faculty: { type: 'string' },
      student: { type: 'string' }
    },
    name: 'roles',
    description: 'students and teacher roles',
    example: {
      faculty:
        'Professor — é o educador profissional, o mediador do conhecimento, ajudará os estudantes na seleção e indicação de fontes e materiais de pesquisa e contribuir transformação das informações em conhecimento, além disto, é o responsável por promover debates, participação em atividades práticas em sala de aula.',
      student:
        'Estudante — é o personagem principal e ativo, deve previamente estudar o conteúdo disponibilizado pelo professor para que possar se preparar. É responsável por seus estudos antes da aulas, por participar dos debates e das atividades práticas propostas em sala de aula.'
    }
  })
  roles: {
    faculty: string
    student: string
  }

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'subjects',
    description: 'subjects taught to students',
    example:
      'Object-Oriented Programming,  Introductory Programming,  Programming,  Introduction to Programming and Algorithm,  Computer programming,  Linear data structures,  Swift Language Programming Practice (SLPP)'
  })
  subjects?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'contents',
    description: 'contents taught to students',
    example:
      'Object-Oriented Programming,  Introductory Programming,  Programming,  Introduction to Programming and Algorithm,  Computer programming,  Linear data structures,  Swift Language Programming Practice (SLPP)'
  })
  contents?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'programmingLanguages',
    description: 'programming languages taught to students',
    example: 'C++, Java, Python, JavaScript, Perl'
  })
  programmingLanguages?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'materials',
    description: 'materials or tools to be used',
    example:
      'video tutorials, App Inventor online editor, Edmodo, platfomrs online, Flash animations and video, Java Swing, Java Collections Framework and iterators, Eclipse Juno, Java vl.7, JIJnit v4,EclEmma,Jacoco, FindBugs, PMD, and CheckStyle, GitHub, Google Forms, video via YouTube, course book, Weekly exercises, MyProgrammingLab (MPL), textbook, online quizzes, programming homework assignment, Surveys, Moodle, paper, computer.'
  })
  materials: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'principles',
    description: 'principles of methodology',
    example:
      'A FC baseia-se em 4 pilares, sendo eles [5]: a) Ambiente flexível (Flexible Environment) - mescla o ensino on-line e o presencial, a sala invertida possibilita uma série de formatos de aprendizado; b) Cultura de aprendizagem (Learning culture) - o estudante passa a ter uma participação ativa na construção do conhecimento, além de avaliar o seu aprendizado; c) Conteúdo intencional (Intentional content) - o estudante é incentivado a adquirir conhecimento que vai além de fatos isolados, estabelecendo conexões entre esses fatos de maneira organizada. Adquirir uma compreensão conceitual colabora também para uma maior retenção do conhecimento; e d) Educador profissional (Professional educator) - educador assume papel de mentor e mediador, fornecendo feedback relevante e construtivo para os seus alunos, além de refletir sobre a qualidade do seu trabalho no processo de aprendizado.'
  })
  principles: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'howToPlan',
    description: 'how to plan the adoption of the methodology in the classroom',
    example:
      'Pode-se propor um espaço para que os estudantes troquem informações online sobre o que estão estudando, tipo um fórum de discussão. Elaborar questões sobre o assunto para discutir em sala de aula, para ampliar os conhecimentos construídos pelos estudantes, bem como ensinar a aplicação do conhecimento no dia a dia, para consolidar o aprendizado [4][5]. Sendo assim, o professor pode planejar o uso de um jogo, um quiz, uma atividade prática, método para promover o aprendizado e a participação ativa de toda a turma. Como o tempo de instrução é empregado para discussões sobre o tópico, colaborações entre pares e atividades de orientação. O planejamento deve basear-se no desenvolvimento das habilidades cognitivas de alto nível, de modo a contribuir com aprendizado do conteúdo [2]. '
  })
  howToPlan: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'planningTime',
    description: 'average planning time',
    example:
      'Dependerá da complexidade conteúdo, do tipo de material a ser produzido e das habilidades e conhecimento do professor. '
  })
  planningTime: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'aboutSteps',
    description: 'about the steps for adopting the methodology',
    example:
      'O material para os estudos dos conteúdos das aulas deve ser disponibilizados com antecedência para que os estudantes possam estudar e se prepararem antes da aula. O conteúdo a ser estudado pode ser apresentado por meio de livros didáticos, slides, apostilas, vídeos preparados pelo professor ou por terceiros, ou qualquer combinação destes. Na sala de aula, o professor promoverá aos estudantes atividade prática para que os mesmo apliquem o conhecimento, construídos a partir do que leram ou assistiram fazendo [3].'
  })
  aboutSteps: string

  @Prop()
  @ApiProperty({
    type: 'number',
    name: 'stepsNumber',
    description: 'number of steps needed for adopting the methodology',
    example: 3
  })
  stepsNumber: number

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'steps',
    description: 'steps description needed for adopting the methodology',
    example: [
      {
        name: '1ª Etapa - Elaboração do material com o conteúdo',
        description:
          'O professor, deve elaborar um material para apoiar os estudos dos  conteúdos devem ser elaborado para que seja eficaz na proposta de aprendizagem ativa. Pode-se utilizar de um espaço na internet, podendo ser as páginas web, a plataformas virtuais de aprendizagem, como o moodle, plataformas de vídeos ou podcasts, para disponibilizar e compartilhar o material elaborado. É importante estimular os estudantes por meio de materiais engajadores que estes troquem informações online sobre o que estão estudando, por exemplo em um fórum de discussão.       As atividades devem estimular o estudante a colocar em prática os conhecimentos adquiridos com os estudos do material elaborado, que será estudado antes da aula. É importante elaborar questões que amplie os conhecimentos construídos pelos estudantes, bem como ensinar a aplicação do conhecimento no dia a dia, para consolidar o aprendizado [4][5]. É importante deixar claro para os estudantes quais os objetivos de aprendizagem estão sendo alcançados com os estudos do conteúdo proposto, bem como quais são as habilidades e/ou competências que serão desenvolvidas. Sugere-se liberar o conteúdo 5 dias antes da aula [6].'
      },
      {
        name: '2ª Etapa Antes da aula em sala.',
        description:
          'Os estudante deve se preparar antecipadamente antes das aulas, para isso, deve utilizar o material previamente disponibilizado pelo professor e realizar sua rotina de estudos. É importante que o estudante observe as orientações para os estudos do material e para a realização das atividades, para compreender sobre os objetivos de aprendizagem, que se busca alcançar com os estudos do conteúdo proposto e entender quais são as habilidades e as competências que serão desenvolvidas.'
      },
      {
        name: '3ª Etapa Em sala de aula',
        description:
          'No momento da aula em sala, o professore poderá nos primeiros muitos da aula explicar as atividades a serem realizadas, com base no conteúdo estuda pelos estudantes, realizar perguntas e ouvir o feedback dos estudantes em relação ao que aprenderam como os conteúdos estudados e por fim, o restante do tempo da aula, deixar para os estudantes resolverem as atividades, buscarem a resolução do problema proposto, seja individual ou em times. Durante o tempo de aula, podem ser realizados trabalhos em laboratório que correspondem ao material designado e entregue aos alunos. Por exemplo, se a lição designada para a classe é sobre escrita condicional declarações usando if-else, um laboratório que tem os alunos escreva o código para encontrar as raízes de uma equação quadrática, declarando se há ou não uma raiz, duas raízes únicas ou nenhuma raiz [3]. O importante é que os estudantes apresentem suas conclusões, seja por meio de apresentações, debates, apresentando vídeos, entre outras possibilidades de discussão, sendo que neste momento o professor e demais colegas podem aprofundar questões sobre o assunto, além disso, é importante mostrar visões não abordadas nas discussões para ampliar o aprendizado e despertar a curiosidade dos estudantes [5][6].'
      }
    ]
  })
  steps: [
    {
      name: string
      description: string
    }
  ]

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'howToEvaluate',
    description: 'how to evaluate learning',
    example:
      'As avaliações podem ser contínuas, devem apontar tendências que possam ser abordadas em sala de aula ou fora da aula, podendo ser um questionário, a resolução de um problema ou uma pesquisa. Em se tratando a utilização de questões para avaliação do conhecimento, é importante considera que o questionário a ser elaborado dever ser uma sequência de perguntas que orientam o estudante na revisão do material disponibilizado pelo professor [3].'
  })
  howToEvaluate: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'observedMetrics',
    description: 'observed metrics on methodology',
    example:
      'knowledge and skill acquisition,  motivation,  student performance, student feedback,  average ﻿scores, problem-solving ﻿skills,  student knowledge, engagement.'
  })
  observedMetrics: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'advantages',
    description: 'advantages of adopting the methodology',
    example:
      'Incentiva a interação entre estudantes e  professores [1,2]. A inversão libera o tempo de aula que pode ser usado para abordar questões específicas e estabelecer um nível de aprendizagem [3,4]. O desejo dos alunos de “fazer” em vez de “ouvir” [3]. A proliferação de ferramentas técnicas, como gravação de vídeos, sistemas de gerenciamento de cursos e sites de hospedagem de vídeos [3,5]. Obter mais horas de contato com os estudantes para praticar a programação em tempo real[3,5].'
  })
  advantages: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'challenges',
    description: 'challenges of adopting the methodology',
    example:
      'Despertar a motivação dos estudantes, especialmente para fazerem as pré-aulas [2,3,6]. Despertar a proatividade do estudante na aula [3,5,7]. Supervisionar as atividades realizadas fora da sala de aula, portanto, não há garantia de que o estudantes realizou adequadamente[3,4]. A preocupação para criar laboratórios, trabalhos, questionários, testes, vídeos com o conteúdo, palestras, procurar material de vídeo de terceiros apropriado também é demorado[3]. Mais formas de avaliação e notas envolvidas, pois todo o tempo de contato gera trabalho do aluno; avaliá-los provou ser demorado também [3].'
  })
  challenges: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'considerations',
    description: 'concluding remarks',
    example:
      'FC é uma metodologia em que a instrução direta é dada fora da sala de aula principalmente por meio de vídeos, e o tempo de aula pode ser usado para discussões mais profundas sobre o assunto, colaboração entre colegas e aconselhamento personalizado pelo professor. As atividades estimulam os estudantes a colocarem seus conhecimentos em prática, desenvolvendo assim, habilidades e competências [7].'
  })
  considerations: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'experiences',
    description: 'experiences of adopting the methodology in the classroom.',
    example: [
      {
        article: 'Flipped Classroom Strategy to Help Underachievers in Java Programming',
        link: 'https://ieeexplore.ieee.org/abstract/document/8753391'
      },
      {
        article: 'Flipping a Programming Course: the Good, the Bad, and the Ugly',
        link: 'https://ieeexplore.ieee.org/abstract/document/7344151'
      },
      {
        article:
          'Improving Student Learning in an Introductory Programming Course Using Flipped Classroom and Competency Framework',

        link: 'https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=4881&context=sis_research'
      },
      {
        article: 'Interactive Preparatory Work in a Flipped Programming Course',

        link: 'https://dl.acm.org/doi/pdf/10.1145/3300115.3309520?casa_token=dYEqyD9FTi0AAAAA:6oghbd-9TL_8Xlvu34om9E6NvE9Q7Kf55KGv0T718BzfodY27CWNDqbO8gN3geGu3nguDDMbXg0j9ZM'
      },
      {
        article:
          'An Empirical Study of In-Class Laboratories on Student Learning of Linear Data Structure',

        link: 'https://dl.acm.org/doi/abs/10.1145/2787622.2787713?casa_token=zVD48BKWUC4AAAAA:QpsQVsWFytbixnfVwZqq2jqBM1jzUTVa5T884t7gaFh4i120mAWrtQh7JZ-1FAvVH0PJVpLnek9ZQM8'
      },
      {
        article:
          'Research to Practice in Computer Programming Course using Flipped Classroom',
        link: 'https://ieeexplore.ieee.org/abstract/document/9962430'
      }
    ]
  })
  experiences: [
    {
      article: string
      link: string
    }
  ]

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'references',
    description: 'references used in the methodology texts',
    example: [
      '[1]  CAO, Lijuan; GRABCHAK, Michael. Interactive preparatory work in a flipped programming course. In: Proceedings of the ACM Conference on Global Computing Education. 2019. p. 229-235.',
      '[2]  DURAK, Hatice Yildiz. Modeling different variables in learning basic concepts of programming in flipped classrooms. Journal of Educational Computing Research, v. 58, n. 1, p. 160-199, 2020.',
      '[3]  ROSIENE, Carolyn Pe; ROSIENE, Joel A. Flipping a programming course: The good, the bad, and the ugly. In: 2015 IEEE Frontiers in Education Conference (FIE). IEEE, 2015. p. 1-3.',
      '[4]  BERGMANN, J.; SAMS, A. Flip Your Classroom: Reach Every Student in Every Class Every Day. International Society for Technology in Education, 2012.',
      '[5]  NETWORK, Flipped Learning. The Four Pillars of FLIP.[online] Available at: http://www. flippedlearning. org/cms/lib07/VA01923112/Centricity/Domain/41. FLIP_ha ndout_FNL_Web. pdf.[accessed 28.5. 14], 2014.',
      '[6]  ZHANG, Liang; NIU, Jianwei. Research to Practice in Computer Programming Course using Flipped Classroom. In: 2022 IEEE Frontiers in Education Conference (FIE). IEEE, 2022. p. 1-7.',
      '[7] YILDIZ DURAK, Hatice. Flipped learning readiness in teaching programming in middle schools: Modelling its relation to various variables. Journal of Computer Assisted Learning, v. 34, n. 6, p. 939-959, 2018.'
    ]
  })
  references: [string]
}
