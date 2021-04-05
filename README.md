# Vegan Queen :hamburger:

## Índice

- [Apresentação](#apresentação)
- [Temática](#temática)
- [Protótipos](#protótipos)
- [Testes](#testes)
- [Usuários](#usuários)
- [Design](#design)
   * [Cores](#cores)
   * [Logotipo](#logotipo)
   * [Interface](#interface)
- [Planejamento](#planejamento)
- [Desenvolvimento](#desenvolvimento)
- [Pontos de Melhoria](#pontos-de-melhoria)
- [Devas](#devas)

---

## Apresentação

*Vegan Queen* é uma aplicação web desenvolvida sob demanda do cliente fictício Restaurande Vegan Queen, seu objetivo é automatizar o sistema interno do restaurante e melhorar os procedimentos de solicitação de pedido, envio para preparo e entrega ao cliente final. Ele se dá no formato de cardápio e comanda digital, acompanhamento do preparo e entrega de cada solicitação e histórico de todos pedidos entregues ao cliente final. Este projeto foi desenvolvido durante o bootcamp da [Laboratória](https://www.laboratoria.la/br), com finalidade de aprendizagem e enriquecimento dos conhecimentos das alunas.


<img src="./src/img/Readme/burger.gif" width="300px"> 

## Temática

A temática escolhida para definição do cliente foi de restaurante vegano, cujos procedimentos internos e produtos servidos pela empresa seguem a cultura do veganismo. De acordo com a [Associação Brasileira de Veganismo](https://veganismo.org.br/), o significado deste conceito é:

          “ Veganismo é uma filosofia e estilo de vida que busca excluir, na medida do possível
            e praticável, todas as formas de exploração e crueldade contra animais na alimentação,
            vestuário e qualquer outra finalidade e, por extensão, que promova o desenvolvimento e
            uso de alternativas livres de origem animal para benefício de humanos, animais e meio 
            ambiente.”

Desta forma, ambas desenvolvedoras tem afinidade com o modo de vida vegano e escolhemos este tema para nosso cliente, alnhando nossa prestação de serviços aos valores do contratante.


<img src="./src/img/Readme/gifvegan.gif" width="300px"> 

## Protótipos

Os protótipos da página foram realizados através do MarvelApp, segue imagens e links para testes:

![](./src/img/Readme/prototipologin.png)
![](./src/img/Readme/prototiporegistro.png)

[Teste aqui](https://marvelapp.com/prototype/fg13c84/screen/76693657)

![](./src/img/Readme/prototipohall.png)

[Teste aqui](https://marvelapp.com/prototype/fg13c84/screen/76905175)

## Testes

Após feito os protótipos, realizamos testes com potenciais usuários e recebemos os seguintes feedbacks e as respectivas resoluções que realizamos:

:heavy_exclamation_mark: Barra de rolagem não acessível pelo desktop </br>
:heavy_check_mark: Definir produto será usado somente via tablet onde a rolagem será via touch

:heavy_exclamation_mark: Botoẽs de navegação do salão muito pequenos e amontuados </br>
:heavy_check_mark: Definir usabilidade do produto em modo horizontal

### Interface

A interface da aplicação finalizou da seguinte maneira:

![](./src/img/Readme/interface.png)
![](./src/img/Readme/interfacelogin.png)

[Visite a aplicação aqui](https://vegan-queen-git-main-anafreitas-br.vercel.app/)

Para testar a sua funcionalidade utilize os seguintes usuários testes:

Salão
- email: joão_teste@vq.com
- senha: 123456

Cozinha
- email: maria_teste@vq.com
- senha: 123456


## Usuários

Os usuários do Vegan Queen serão os funcionários do restaurante, cujas áreas de trabalho são da cozinha e do salão, profissionais da área de alimentação, cuja funções principais são garçnete/garçom e cozinheira/cozinha.

### **Histórias de Usuário**

O aplicativo foi realizado baseado nas seguintes histórias de usuários e suas respectivos critérios de aceitação:

**1**. Usuário deve ter seu perfil (login/senha) para acessar o sistema </br>
Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.</br>

**Critérios de aceitação:</br>**
* Criar login e senha.</br>
* Registar tipo de usuário (cozinha / salão),  login e senha.</br>
* Entrar na tela correta para cada usuário.

**2**. Garçom/Garçonete deve poder anotar o seu pedido</br>
Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada produto e poder enviar o pedido para a cozinha para ser preparado.</br>

**Critérios de aceitação:</br>**
* Anotar o nome e mesa.</br>
* Adicionar produtos aos pedidos.</br>
* Excluir produtos.</br>
* Ver resumo e o total da compra.</br>
* Enviar o pedido para a cozinha (guardar em algum banco de dados).</br>
* Funcionar bem e se adequar a um tablet.</br>

**3**. Chefe de cozinha deve ver os pedidos</br>
Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.</br>

**Critérios de aceitação:</br>**
* Ver os pedidos à medida em que são feitos.</br>
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.</br>
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.</br>

**4**. Garçom/Garçonete deve ver os pedidos prontos para servir</br>
Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.</br>

**Critérios de aceitação:</br>**
* Ver a lista de pedidos prontos para servir.</br>
* Marque os pedidos que foram entregues.</br>

## Design 

O layout da aplicação foi pensado da seguinte forma:

### Cores

A paleta de cores foi decidica baseando-se nos alimentos que o restaurante serve, ilustração feita pela ferramenta Coolors:

<img src="./src/img/Readme/paleta.png" width="290px"> 

Sendo amarelo do pão, roxo de beterraba, verde das verduras, cinza esbranquiçado dos cogumelos shimeji e paris e preto do gergelim

### Logotipo

O logo foi criado pelo Canva, seguindo a paleta de cores e a temática realeza.

<img src="./src/img/LogoVector.png" width="260px"> 


## Planejamento

O planejamento foi realizado através do Trello, seguindo o período de 4 sprints, onde cada história de usuário se deu em 1 sprint.

![](./src/img/Readme/trello.png)

## Tecnologias

Para desenvolvimento deste projeto foram utilizadas: 
- HTML5, 
- CSS3, 
- Vanilla JavaScript, 
- React JS/React Hooks/react-router-dom, 
- Vercel (deploy),
- Marvel (protótipo) 
- API Burger Queen fornecida por Swagger, acessivel [clicando aqui](https://lab-api-bq.herokuapp.com/api-docs/#/). 
- A aplicação foi realizada com conceito de tablet first e Single Page Application (SPA).

![](./src/img/Readme/prog.gif)

## Pontos de melhoria

Para as próximas refatorações iremos implementar:

:pushpin:Armazenar valor total de cada pedido no histórico </br>
:pushpin:Contagem de tempo do preparo de cada pedido </br>
:pushpin:Refatorar layout do cardápio e comanda</br>

## Devas

Este projeto foi desenvolvido com muito carinho pelas desenvolvedoras:

:smiley_cat:[Bianca Sherika](https://www.github.com/BiancaSherika)<br/>
:smile_cat:[Ana Freitas](https://www.github.com/anafreitas-br)
