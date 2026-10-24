export const reports = [{ id: 'faturamento', name: 'Faturamento', slides: [{
 id: 'clientes-sintetico', title: 'Clientes Sintético', image: '/images/reports/faturamento-clientes-original.png', width: 1361, height: 766,
 summary: 'Uma visão executiva da saúde da carteira de clientes: aquisição, recorrência, perdas e concentração comercial. O painel conecta a evolução da base à qualidade do crescimento, apoiando decisões sobre retenção, expansão e alocação de esforços comerciais.',
 notes: [
 {title:'Saúde da carteira',text:'A leitura conjunta da base total, dos clientes que compraram no ano, das novas contas e dos clientes com cancelamentos ou devoluções revela a dinâmica da carteira. Esses indicadores ajudam a distinguir expansão comercial de sinais de perda de receita e a direcionar investigações sobre atendimento, produto e operação.'},
 {title:'Recorrência e valor percebido',text:'A recompra sinaliza a capacidade de manter o relacionamento e a atratividade da oferta. Uma recorrência elevada pode indicar boa percepção de qualidade e preço; sua interpretação deve considerar também o ciclo de compra e o perfil dos clientes. Para a liderança, a análise orienta ações de fidelização e maior previsibilidade de receita.'},
 {title:'Aquisição e diversificação',text:'A evolução dos novos clientes evidencia a capacidade comercial de ampliar a carteira. Quando acompanhada do faturamento e da retenção dessas contas, permite avaliar se a aquisição está diversificando as fontes de receita e reduzindo a dependência de poucos compradores.'},
 {title:'Top 5 regiões · presença comercial',text:'O ranking das cinco regiões com maior número de clientes mostra onde a empresa concentra sua presença. Apoia decisões de cobertura comercial e expansão territorial, considerando que concentração de clientes não representa, necessariamente, concentração de faturamento.'},
 {title:'Top 5 clientes · faturamento bruto',text:'Identifica as contas com maior contribuição ao faturamento bruto. A visão apoia a gestão de clientes estratégicos, a priorização de relacionamento e a avaliação do risco de concentração da receita.'},
 {title:'Top 5 clientes · custo médio',text:'Destaca os clientes pelo indicador de custo médio dos produtos vendidos. Em conjunto com receita, volume e condições comerciais, ajuda a investigar a composição dos custos e oportunidades de revisão do mix. O custo isolado não determina a rentabilidade da conta.'},
 ],
 }, {
  "id": "custo-sobre-faturamento",
  "title": "Custo sobre Faturamento",
  "image": "/images/reports/faturamento-custo-sobre-faturamento-original.png",
  "width": 1425,
  "height": 802,
  "summary": "Uma visão executiva dos componentes que reduzem o faturamento bruto e da evolução dos custos por período e empresa. O painel conecta disciplina comercial, carga tributária e acompanhamento de custos, apoiando decisões sobre descontos, condições de venda e prioridades de gestão. A construção técnica favorece consistência dos indicadores e clareza na leitura dos resultados.",
  "notes": [
    {
      "title": "Despesas sobre faturamento · da receita bruta à líquida",
      "text": "A consolidação de impostos sobre faturamento, frete e descontos evidencia as deduções entre a receita bruta e a líquida. Para a liderança, essa leitura permite acompanhar quanto da venda permanece após essas parcelas e orientar a revisão das condições comerciais. O indicador apoia o controle da receita líquida; a avaliação de rentabilidade também exige considerar os demais custos e despesas do negócio."
    },
    {
      "title": "Evolução mensal · impostos e custo médio",
      "text": "As séries mensais de impostos e custo médio ajudam a identificar oscilações, sazonalidade e períodos que merecem investigação. A leitura em conjunto com o faturamento e o volume vendido permite contextualizar essas variações e direcionar a análise financeira, fiscal e operacional antes de definir ações."
    },
    {
      "title": "Custo médio por empresa · prioridades de gestão",
      "text": "A comparação do indicador entre empresas oferece uma visão da distribuição dos custos e ajuda a priorizar a investigação das unidades com maior participação. Para orientar decisões de eficiência e alocação de recursos, a análise deve considerar também escala, mix de produtos e volume de cada operação."
    },
    {
      "title": "UDFs · consistência e escala analítica",
      "text": "Funções definidas pelo usuário (UDFs) centralizam a reutilização de cálculos temporais, medidas complexas e formatações numéricas e percentuais. Essa padronização evita repetir a mesma lógica em diversas medidas, facilita a manutenção e sustenta uma leitura consistente dos indicadores pela gestão."
    },
    {
      "title": "Grupos de cálculo · leitura estruturada da receita",
      "text": "Um grupo de cálculo define o eixo X do gráfico de análise de despesas sobre faturamento, organizando a apresentação dos componentes avaliados. A abordagem concentra a lógica analítica e facilita a comparação entre faturamento bruto, impostos, frete, descontos e faturamento líquido."
    },
    {
      "title": "Títulos dinâmicos · contexto para decidir",
      "text": "Os títulos acompanham o contexto temporal de cada visual, deixando explícitos o ano ou o mês em análise. Essa sinalização reduz a ambiguidade na interpretação dos números e torna a comunicação dos resultados mais direta nas discussões executivas."
    },
    {
      "title": "Último ano automático · foco na informação recente",
      "text": "Na ausência de seleção temporal, as medidas apresentam automaticamente o último ano disponível nos dados. O usuário inicia a análise por um recorte recente e relevante, com menor abrangência inicial de cálculo e renderização. A estratégia busca favorecer o desempenho do relatório e mantém a possibilidade de explorar outros períodos pelos filtros."
    }
  ]
}] }];
