# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Tabela de eventos
**Responsavel**
# Bianca Camila 


# Cenários de Testes Selecionados:

 
## Ferramentas de Testes (Opcional)
- ## Cenários de Testes Selecionados:

 1. Cenário de Teste: Adicionar um novo evento
 -Funcionalidade Avaliada: Criação de um novo evento no sistema
 -Ferramentas Utilizadas: Navegador da Web, ferramenta de automação de testes (por exemplo, Selenium)
 -Descrição: Verificar se um administrador pode adicionar um novo evento preenchendo corretamente o nome, descrição, valor e data do evento. Verificar se o      evento é salvo com sucesso no sistema e se é exibido corretamente na tabela de eventos.

 2. Cenário de Teste: Visualizar detalhes de um evento
 -Funcionalidade Avaliada: Visualização dos detalhes de um evento existente
 -Grupo de Usuários: Todos os usuários do sistema
 -Ferramentas Utilizadas: Navegador da Web
 -Descrição: Verificar se os usuários podem visualizar os detalhes de um evento selecionado na tabela. Ao clicar na ação "Visualizar e editar", verificar se os detalhes do evento, como nome, descrição, valor e data, são exibidos corretamente em um formato legível.
 
 3. Cenário de Teste: Atualizar um evento existente

 -Funcionalidade Avaliada: Atualização dos detalhes de um evento existente
 -Grupo de Usuários: Administradores do sistema
-Ferramentas Utilizadas: Navegador da Web, ferramenta de automação de testes (por exemplo, Selenium)
 -Descrição: Verificar se um administrador pode atualizar os detalhes de um evento existente. Ao clicar na ação "Visualizar e editar", verificar se os campos de edição são preenchidos com os valores atuais do evento. Modificar um ou mais campos e salvar as alterações. Verificar se as alterações são salvas corretamente e refletidas na tabela de eventos.

 4. Cenário de Teste: Excluir um evento

 -Funcionalidade Avaliada: Exclusão de um evento do sistema
 -Grupo de Usuários: Administradores do sistema
 -Ferramentas Utilizadas: Navegador da Web, ferramenta de automação de testes (por exemplo, Selenium)
 -Descrição: Verificar se um administrador pode excluir um evento existente. Ao clicar na ação "Excluir", verificar se uma mensagem de confirmação é exibida. Confirmar a exclusão e verificar se o evento é removido com sucesso do sistema e não é mais exibido na tabela de eventos.

 5. Cenário de Teste: Validação de campos obrigatórios

 -Funcionalidade Avaliada: Validação dos campos obrigatórios no formulário de adição/atualização de eventos
 -Grupo de Usuários: Administradores do sistema
 -Ferramentas Utilizadas: Navegador da Web, ferramenta de automação de testes (por exemplo, Selenium)
 -Descrição: Verificar se o sistema valida corretamente os campos obrigatórios, como nome, descrição, valor e data, no formulário de adição/atualização de eventos. Tentar salvar o evento sem preencher um ou mais campos obrigatórios e verificar se o sistema exibe mensagens de erro apropriadas.

Comente sobre as ferramentas de testes utilizadas.
 
 
(img/tabela.png)
(img/tabela01.png)



> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
