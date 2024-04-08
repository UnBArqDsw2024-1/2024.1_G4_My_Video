# Brainstorming

## Introdução

<div align="justify">
O brainstorming foi a principal técnica escolhida para a elicitação dos requisitos. Esta técnica permite que um grupo de pessoas gere ideias de forma criativa e colaborativa para resolver problemas, explorar possibilidades ou identificar requisitos para um projeto.
</div>

## Objetivo

<div align="justify">
O objetivo principal do brainstorming é gerar o maior número possível de ideias relacionadas ao problema ou ao objetivo em questão. Não há julgamentos prematuros; todas as ideias são bem-vindas, independentemente de quão viáveis ou realistas possam parecer inicialmente.  Após a fase de geração de ideias, é importante registrá-las para análise posterior na elaboração dos requisitos do projeto. Esse processo promove a criatividade, a participação ativa de todos os membros e serve como base para soluções eficazes.
</div>

## Metodologia

<div align="justify">
Para realizar o brainstorming coletivamente, utilizamos o Teams como plataforma de comunicação para que cada um pudesse compartilhar suas ideias com o grupo.

1. O primeiro passo foi analisar entender o projeto como um todo e definir os principais fluxos presentes na plataforma da Netflix. Isso envolveu uma análise dos serviços e funcionalidades oferecidos pela plataforma. Durante essa fase, identificamos e definimos os principais fluxos de interação presentes na plataforma. Os seguintes fluxos foram definidos: 
- Assistir vídeos;
- Criação de conta / Login;
- Seleção / Busca de vídeos;
- Criação de playlist;

2. Depois de especificar os principais fluxos do negócio, entramos de fato na fase do brainstorming, cada membro do grupo teve a oportunidade de compartilhar insights e sugestões dentro de cada etapa definida. Essa fase permitiu uma troca aberta de ideias, incentivando a criatividade e a colaboração entre os participantes.

3. Para facilitar a expressão e organização das ideias geradas durante as discussões, adotamos o Miro como uma ferramenta colaborativa online. Nessa plataforma, cada membro do grupo pôde contribuir de forma visual, adicionando post-its para representar suas ideias. O Miro serviu como um espaço virtual onde as ideias puderam ser compartilhadas e desenvolvidas de maneira flexível e interativa.

4. Com base nas ideias coletadas no Miro, podemos realizar uma análise e assim elicitar os principais requisitos para o nosso projeto, incluindo possíveis melhorias para a plataforma.
</div>

## Resultado

### Quadro Visual do Brainstorming
<!-- Colocar aqui o quadro do miro -->
<div align="justify">
&emsp;&emsp;Como resultado da execução da técnica, obtivemos o artefato apresentado abaixo, que apresenta todas as ideias coletadas e priorizadas durante a realização do Brainstorming na ferramenta <a href="https://miro.com">Miro</a>.
</div>
<br>
<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVKYd0kvE=/?moveToViewport=-1562,-1316,1784,1270&embedId=352755302861" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
<div align="center">Figura 1 - Brainstorming no Miro</div>
</div>
<br>

### Requisitos Elicitados
**Fluxo de assistir a um vídeo:**

| <p align="center">ID</p> | <p align="center">Requisito</p> |
| :--: | :-------------------------------------------------: |
| RF01 | O usuário deve ser capaz de definir a qualidade do vídeo. |
| RF02 | Os usuários devem ter a opção de ativar legendas, além de escolher seu idioma. |
| RF03 | Deve haver controles de reprodução de vídeo disponíveis para o usuário, como pause, avançar ou retroceder. |
| RF04 | O usuário deve ser capaz de escolher a velocidade do vídeo. |
| RF05 | O usuário deve poder escolher o idioma do seu vídeo. |
| RF06 | A plataforma deve ter suporte para diferentes resoluções de tela, garantindo que o usuário assista em diferentes dispositivos. |
| RF07 | A plataforma deve garantir que o áudio e o vídeo estejam sincronizados. |  
| RF08 | A plataforma deve reproduzir o próximo conteúdo automaticamente ao fim do vídeo. |  

**Fluxo de Conta/Login:**

| <p align="center">ID</p> | <p align="center">Requisito</p> |
| -- | ----------------------------------------------- |
| RF09 | Os usuários devem ser capazes de cadastrar e salvar dados como login, senha, nome, e-mail, data de nascimento e status da assinatura. |
| RF10 | A plataforma deve permitir a criação de vários perfis dentro de uma mesma conta. |
| RF11 | Os usuários devem ter a capacidade de configurar sua conta, incluindo nome e avatar. |
| RF12 | É necessário um processo de verificação de e-mail para contas novas ou alterações de e-mail. |
| RF13 | Deve ser possível criar perfis específicos para crianças, com restrições adequadas de conteúdo. |
| RF14 | O usuário deve ser capaz de recuperar sua senha. |
| RF15 | A segurança dos dados dos usuários deve ser garantida, incluindo medidas como criptografia e autenticação segura. |
| RF16 | A criação de conta deve ser simplificada e intuitiva para os usuários. |

**Fluxo de Seleção/Busca:**

| <p align="center">ID</p> | <p align="center">Requisito</p> |
| -- | ----------------------------------------------- |
| RF17 | Os usuários devem poder buscar vídeos pelo título. |
| RF18 | Recomendações personalizadas devem ser oferecidas com base nas preferências do usuário. |
| RF19 | Deve haver uma seção dedicada às novidades, exibindo os últimos conteúdos adicionados. |
| RF20 | A plataforma deve permitir que o usuário retome a reprodução de um vídeo de onde parou anteriormente. |
| RF21 | Os usuários devem poder avaliar conteúdos como "tenho interesse" ou "não tenho interesse". |
| RF22 | Os usuários devem poder visualizar na tela principal conteúdos em alta, ou seja, os mais populares ou mais assistidos. |
| RF23 | A plataforma deve disponibilizar uma sinopse sobre cada vídeo. |
| RF24 | O usuário deve ser capaz de visualizar o elenco da obra escolhida. |
| RF25 | Os usuários devem poder filtrar conteúdo por personagens, filmes, séries, em alta, minha lista e idiomas. |
| RF26 | Os vídeos devem possuir uma classificação etária. |
| RF27 | A plataforma deve mostrar um trailer de cada vídeo na seção de busca. |
| RF28 | O usuário deve ser notificado sobre novos lançamentos na plataforma. |

**Fluxo de Minha Lista:**

| <p align="center">ID</p> | <p align="center">Requisito</p> |
| -- | ----------------------------------------------- |
| RF29 | Os usuários devem poder selecionar vídeos para assistir posteriormente e adicioná-los a uma lista personalizada. |
| RF30 | Os usuários devem ser capazes de remover itens da lista. |
| RF31 | A plataforma deve oferecer recomendações personalizadas com base no conteúdo da lista. |


## Histórico de Versão

| Versão | Data da alteração |             Alteração             |                   Responsável                   |                     Revisor                     | Data de revisão |
| :----: | :---------------: | :-------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :-------------: |
|  1.0   |       03/04       |         Criação do documento        | [Caio Santos](https://github.com/caiobsantos) |[Breno Yuri](https://github.com/YuriBre)|07/04|
|  1.1   |       04/04       |         Adiciona metodologia       | [Caio Santos](https://github.com/caiobsantos) |[Breno Yuri](https://github.com/YuriBre)|07/04|
|  1.2   |       05/04       |         Adiciona quadro do miro       | [Caio Santos](https://github.com/caiobsantos) |[Breno Yuri](https://github.com/YuriBre)|07/04|
|  1.3   |       07/04       |         Adiciona alguns requisitos       | [Caio Santos](https://github.com/caiobsantos) |[Breno Yuri](https://github.com/YuriBre)|07/04|
|  1.4   |       07/04       |         Adiciona alguns requisitos       | [Breno Yuri](https://github.com/YuriBre) | [Ana Rocha](https://github.com/anaaroch) | 07/04 |
|  1.5   |       07/04       |         Adiciona mais requisitos       | [Caio Santos](https://github.com/caiobsantos) | [Ana Rocha](https://github.com/anaaroch) | 07/04 |
