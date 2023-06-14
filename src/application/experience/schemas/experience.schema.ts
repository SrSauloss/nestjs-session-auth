/* eslint-disable max-len */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

export type ExperienceDocument = Experience & Document

@Schema({ timestamps: true })
export class Experience {
  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'id',
    description: 'id of active methodology',
    example: '0b44c4e8-bb56-4ad5-aebe-7f427886eca1'
  })
  _id: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'idMethodology',
    description: 'id of active methodology',
    example: '0b44c4e8-bb56-4ad5-aebe-7f427886eca2'
  })
  idMethodology?: string

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
    name: 'idUser',
    description: 'identifier of the user who evaluated the methodology',
    example: '0b44c4e8-bb56-4ad5-aebe-7f427886ec11'
  })
  idUser?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'nameUser',
    description: 'name of the user who evaluated the methodology',
    example: 'Hélio Endrio Cardoso Rodrigues'
  })
  nameUser: string

  @Prop()
  @ApiProperty({
    type: 'number',
    name: 'stars',
    description: 'stars rating',
    example: '5'
  })
  stars: number

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'textualEvaluation',
    description: 'description of the evaluation',
    example: 'Metodologia incrível, deu tudo certo na aplicação'
  })
  textualEvaluation: string

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

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'subjects',
    description: 'subjects taught to students',
    example: 'Programação Orientada a Objetos,  Recuperação de Informação'
  })
  subjects: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'contents',
    description: 'contents taught to students',
    example: ' Herança, Polimorfismo, Métricas de recuperação de informação'
  })
  contents: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'experienceReport',
    description: 'Report of experience in classroom',
    example:
      'Agradou meus alunos, demoramos um pouco na organização da etapa 2, mas no fim conseguimos envolver a turma toda, e o resultado foi satisfatório.'
  })
  experienceReport: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'materials',
    description: 'materials or tools',
    example:
      'Edmodo, Google Classroom, ColabWeb, Google Forms, YouTube, Papel, Caneta, Computador.'
  })
  materials?: string

  @Prop()
  @ApiProperty({
    type: 'boolean',
    name: 'adaptedPlan',
    description: 'Planning has been adapted?',
    example: true
  })
  adaptedPlan?: boolean

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'adaptedPlanDescription',
    description: 'how to plan the adoption of the methodology in the classroom',
    example: 'Adaptei por conta da quantidade de alunos que era um pouco menor '
  })
  adaptedPlanDescription?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'planningTime',
    description: 'average planning time',
    example: 'Durou cerca de 50 minutos para planejar a aula. '
  })
  planningTime?: string

  @Prop()
  @ApiProperty({
    type: 'boolean',
    name: 'adaptedSteps',
    description: 'has been adapted?',
    example: true
  })
  adaptedSteps?: boolean

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'adaptStepsDescription',
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
  adaptStepsDescription?: [
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
  howToEvaluate?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'observedMetrics',
    description: 'observed metrics on methodology',
    example:
      'knowledge and skill acquisition,  motivation,  student performance, student feedback,  average ﻿scores, problem-solving ﻿skills,  student knowledge, engagement.'
  })
  observedMetrics?: string

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
  roles?: {
    faculty: string
    student: string
  }

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'advantages',
    description: 'advantages of adopting the methodology',
    example:
      'Incentiva a interação entre estudantes e  professores [1,2]. A inversão libera o tempo de aula que pode ser usado para abordar questões específicas e estabelecer um nível de aprendizagem [3,4]. O desejo dos alunos de “fazer” em vez de “ouvir” [3]. A proliferação de ferramentas técnicas, como gravação de vídeos, sistemas de gerenciamento de cursos e sites de hospedagem de vídeos [3,5]. Obter mais horas de contato com os estudantes para praticar a programação em tempo real[3,5].'
  })
  advantages?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'challenges',
    description: 'challenges of adopting the methodology',
    example:
      'Despertar a motivação dos estudantes, especialmente para fazerem as pré-aulas [2,3,6]. Despertar a proatividade do estudante na aula [3,5,7]. Supervisionar as atividades realizadas fora da sala de aula, portanto, não há garantia de que o estudantes realizou adequadamente[3,4]. A preocupação para criar laboratórios, trabalhos, questionários, testes, vídeos com o conteúdo, palestras, procurar material de vídeo de terceiros apropriado também é demorado[3]. Mais formas de avaliação e notas envolvidas, pois todo o tempo de contato gera trabalho do aluno; avaliá-los provou ser demorado também [3].'
  })
  challenges?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'considerations',
    description: 'concluding remarks',
    example:
      'FC é uma metodologia em que a instrução direta é dada fora da sala de aula principalmente por meio de vídeos, e o tempo de aula pode ser usado para discussões mais profundas sobre o assunto, colaboração entre colegas e aconselhamento personalizado pelo professor. As atividades estimulam os estudantes a colocarem seus conhecimentos em prática, desenvolvendo assim, habilidades e competências [7].'
  })
  considerations?: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'publication',
    description: 'publication of adopting the methodology in the classroom.',
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
  publication?: [
    {
      article: string
      link: string
    }
  ]

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'updatedAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  updatedAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'createdAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  createdAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'createdBy',
    example: '4c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  createdBy: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'updatedBy',
    example: '5c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  updatedBy: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'deletedAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  deletedAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'deletedBy',
    example: '5c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  deletedBy: string

  @Prop()
  @ApiProperty({
    type: 'boolean',
    name: 'deleted',
    example: false
  })
  deleted: boolean

  constructor(
    name: string,
    nameUser: string,
    stars: number,
    textualEvaluation: string,
    timeToApply: { min: number; max: number },
    participants: { min: number; max: number },
    subjects: string,
    contents: string,
    experienceReport: string,
    idMethodology?: string,
    idUser?: string,
    roles?: { faculty: string; student: string },
    materials?: string,
    adaptedPlan?: boolean,
    adaptedPlanDescription?: string,
    planningTime?: string,
    adaptedSteps?: boolean,
    adaptStepsDescription?: [
      {
        name: string
        description: string
      }
    ],
    howToEvaluate?: string,
    observedMetrics?: string,
    advantages?: string,
    challenges?: string,
    considerations?: string,
    publication?: [{ article: string; link: string }],
    _id?: string
  ) {
    this.name = name
    this.nameUser = nameUser
    this.stars = stars
    this.textualEvaluation = textualEvaluation
    this.timeToApply = timeToApply
    this.participants = participants
    this.subjects = subjects
    this.contents = contents
    this.experienceReport = experienceReport
    this.idMethodology = idMethodology
    this.idUser = idUser
    this.roles = roles
    this.materials = materials
    this.adaptedPlan = adaptedPlan
    this.adaptedPlanDescription = adaptedPlanDescription
    this.planningTime = planningTime
    this.adaptedSteps = adaptedSteps
    this.adaptStepsDescription = adaptStepsDescription
    this.howToEvaluate = howToEvaluate
    this.observedMetrics = observedMetrics
    this.advantages = advantages
    this.challenges = challenges
    this.considerations = considerations
    this.publication = publication
    this._id = _id
  }
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience)
