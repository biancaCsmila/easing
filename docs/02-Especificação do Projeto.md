# Especificações do Projeto

A definição do problema e os pontos mais relevantes a serem tratados neste projeto
foi consolidada através da observação de necessidades de um indivíduo que trabalha com confeitaria em epócas sazonais. Os detalhes levantados nesse processo foram consolidados na forma de
personas e histórias de usuários.


## Personas

Isabella Fernandez tem 41 anos, trabalha como recepcionista e também é autônoma. Em datas sazonais trabalha como confeiteira para produzir uma fonte de renda extra, pois o que ganha em seu emprego CLT não consegue suprir todas as suas necessidades.
Tem pouco conhecimento em planilhas e por esse motivo vê dificuldade em organizar a sua rotina de produção.

Emanuella Alvez tem 17 anos, é estudante e em datas comemorativas faz doces artesanais para produzir uma fonte de renda, além disso, ela está buscando descobrir qual será a sua profissão e encontrou na confeitaria a possibilidade de trabalhar com o que gosta. Por não produzir com muita frequência, ela tem dificuldade em organizar a quantidade de matéria prima que deve ser feita.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`  | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                     |
|--------------------  |----------------------------------------------------|-----------------------------------------------------------------------------------|
Isabella Fernandez     | Visualizar a saída de produtos/favoritos           |Afim de saber o que é mais pedido, e aumentar o estoque dos materiais necessários |
Emanuella Alves        | Saber com antecedência o quanto de cada ingrediente é usado em cada encomenda   | visando a redução do desperdício
Isabella Fernandez     | Saber quando determinado insumo está chegando ao fim, antes de realmente acabar |Para evitar falta repentina de produtos e consequentemente o atraso e/ou a perda da encomenda |
Emanuella Alves        | Visualizar comentários de outros confeiteiros/empreendedores |Afim de compartilhar experiência na área e pegar dicas para crescer
Isabella Fernandez     | Mapear onde cada produto está guardado no estoque | para não perder tempo procurando por cada coisa necessária
Emanuella Alves        | Acessar o aplicativo por qualquer dispositivo | para resolver as questões pendentes de qualquer lugar e poder compartilhar com possíveis parceiros
Emanuella Alves        | Fácil acesso aos contatos de fornecedores e poder comparar preços entre eles |fazer orçamentos melhores e mais rápidos, afim de economizar
Isabella Fernandez     | Integração com serviços de entrega |ter mais opções para clientes que não podem retirar os produtos pessoalmente, em datas de maior demanda
Emanuella Alves        | Compartilhar produtos em redes sociais, como Instagram e Facebook | Aumentar meu círculo de vendas



Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos do Projeto

Os requisitos do projeto correspondem a parte de analise e a interação entre os usuários, sistema e suas funcionalidades. A seguir separamos os requisitos de funcionais e requisitos não funcionais. 

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página inicial informações referentes ao objetivos e funcionalidades da aplicação. | ALTA | 
|RF-002| O site deve apresentar opções para logon e login.  | ALTA |
|RF-003| O site deve permitir ao usuário visualizar e cadastrar novos eventos.  | ALTA |
|RF-004| O site deve exibir os eventos organizados por data e horário.  | MÉDIA |
|RF-005| O site deve oferecer as funcionalidades para editar evento, marcar como concluído e excluir pedido.
|RF-006| O site deve conter uma página destinada a receitas. | MÉDIA |
|RF-007| O site deve fornecer a opção de favoritar receitas. | BAIXA| 
|RF-008| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um texto específico na tela de favoritos, que será informado na caixa de pesquisa.7,5  | MÉDIA |
|RF-009| O site deve oferecer um fórum onde os usuários podem trocar experiências. | MÉDIA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | MÉDIA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  BAIXA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID|Descrição                                             |
|--|-------------------------------------------------------|
|RE- 01| O projeto deverá ser entregue até o final do semestre letivo. Não podendo extrapolar a data de 25/06/2023. |
|RE- 02| A aplicação deve se restringir às tecnologias básicas da Web no Frontend.                                  |
|RE- 03| O trabalho deverá se manter dentro do tema escolhido                                                       |
|RE- 04| O trabalho deverá ser autoral.                                                                             |
|RE- 05| A equipe não poderá subcontratar o desenvolvimento do trabalho.                                            |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
