
# EnvAIoT

No contexto de smart homes, onde dispositivos de uma casa estão conectados, podem haver situacões nas quais um conjunto de componentes independentes devem colaborar para atingir um objetivo em comum, formando um Sistema-de-Sistemas (SoS). Nesse contexto, podem haver componentes resistentes a mudanças que não atendem aos seus requisitos locais e ao requisito global do SoS. Neste projeto será criado um frontend para a API responsável por verificar essas interações entre os dispositivos.
 
 --- 

### Introdução

Esta é uma atividade que objetiva o treino e fixação de conteúdos básicos de Git e Desenvolvimento Web.

Para desenvolvê-la basta seguir os passos descritos na [sessão de tarefas](#tarefas).

(Opcional) Caso queira, pode editar este *Markdown* (`README.md`) e ir ticando as tarefas concluidas no *commit* referente às mesmas.

---

### Descrição

Esta atividade consiste na prática de comandos Git, que visa o desenvolvimento de habilidades de versionamento de códigos e, para isso, será criado um componente qualquer dentro da aplicação, utilizando react, que imprimirá um "hello world", no qual cada atualização nesse componente terá o dever de ser controlado exclusivamente através desses comandos que serão repassados.

---

### Dicas

- Para auxílio em comandos Git básicos, consulte a [sessão auxiliar de Git](#git).

- Caso queira ler este *Markdown* através do próprio VSCode com o visual processado (assim como no GitHub), instale a extensão [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), abra este `README.md` por dentro do VSCode, e use o atalho **CTRL + SHIFT + V**.

---

### Tarefas

***Observação**: O não seguimento da ordem estabelecida abaixo para algumas tarefas pode levar à falha da configuração do ambiente de desenvolvimento.

- [ ] Faça, através do GitHub, um *fork* deste repositório.

- [ ] Clone o **seu fork** localmente. Para ter alguma referência em comandos Git, consulte a [sessão auxiliar de git](#git);

- [ ] Crie uma branch localmente com o nome **test/hello-world**.

- [ ] Nesta branch, crie um arquivo dentro da pasta components chamado `HelloWorld.js`. Obs: **se atentar a padrão de nomenclatura, para reforçar as boas práticas no nosso desenvolvimento**. Lembre-se sempre de fazer um pull na sua branch local antes de criar qualquer branch, para ter certeza que está atualizada.

- [ ] Em `HelloWorld.js` implemente a função que imprimirá "hello world!". Conteúdo que poderá auxiliar: https://youtu.be/-wrsG0IGc-M

- [ ] Faça um commit com uma mensagem explicativa e, então, um push no remote do seu fork.

- [ ] No GitHub, abra uma pull request da branch **test/hello-world** para a branch **test/hello-world** do repositório principal(upstream) e adicione a proprietária do repositório para visualizar e, se estiver tudo ok, "mergeá-la" (mesclar).

- [ ] (Opcional)  edite os estilos de sua página web para deixar com o layout mais agradável ao usuário utilizando react-bootstrap. Caso opte por fazer esta tarefa, lembre-se de commitar e dar push do seu trabalho, então abrir um PR para mergear esta atualização no **test/hello-world** do repositório principal(upstream).

---

### Conteúdo auxiliar

#### Git

##### Configurando o GitHub para aceitar seus pushs e pulls

1. Para adicionar seu email do github na sua máquina local: 

```shell
git config --global user.email
```

2. Para adicionar seu nome:

```shell
git config --global user.name
```

##### Clonando um repositório

1. Para clonar um repositório, vá no mesmo pelo GitHub, clique no botão "Code" em verde e copie a URL fornecida (é recomendado utilizar por SSH), mas será usado o HTTPS.

2. Em um terminal, rode o seguinte comando:

```shell
git clone <cole_aqui_a_url_copiada_do_repositório>
```

##### Mudando de branch

Para mudar de branch para uma já existente, faça:

```shell
git checkout <nome_da_branch>
```

Caso a branch não exista, dê a opção -b(esse comando cria e muda de branch ao mesmo tempo):

```shell
git checkout -b <nome_da_branch>
```

Para visualizar em que branch você está, bem como as branchs existentes, rode:

```shell
git branch
```

A sua branch atual estará destacada. Outra forma é visualizando a partir do status do repositório:

```shell
git status
```

##### Fazendo commit

Relembre os [3 estados de um repositório Git](https://dev.to/eduardoopv/3-estados-dos-arquivos-git-e-github-3ee6).

Para mover modificações, exclusões ou criações de arquivos para o *staged*, faça:

```shell
git add <nome_do_arquivo>
```

Mais de um arquivo, ou um diretório, também podem ser especificados no comando acima.

Caso queira adicionar **todas** as modificações do diretório atual em *staged*, dê:

```shell
git add .
```

Verifique o `git status` para ver quais modificações estão ou não em staged e prontas para serem *commitadas*.

Para fazer commit das alterações em staged, faça:

```shell
git commit -m "sua mensagem de commit aqui"
```

##### Subindo as alterações para o remote

Para subir seus commits e sua branch para o GitHub, primeiro confirme se o remote aponta para a url do **SEU** fork, e não para a url do repositório original. Faça isso vendo a url do remote *origin* com:

```shell
git remote -v
```

Caso o remote *origin* esteja apontando para algum url que não seja o seu, configure isso com:

```shell
git remote set-url origin <url_correta>
```

Após commitar seu trabalho em uma branch, jogue ela para o GitHub com:

```shell
git push origin <nome_da_sua_branch>
```

##### Mesclando as alterações no GitHub

Após [fazer um push](#subindo-as-alterações-para-o-remote) da sua branch para o **seu repositório (fork)**, navegue até o mesmo pelo GitHub, confira que é mesmo o seu repositório e selecione a sua branch.

Já na sua branch pelo GitHub, clique em "Contribuir" e, em seguida, "Abrir pull request".

Por fim, olhe o repositório base das branchs na qual vai enviar e receber o merge(**isso é muito importante, sugiro perguntar primeiro antes de abrir a PR**. Após isso, pode abrir a Pull Request e adicionar o dono do repositório para realizar a review.


##### Atualizando o repositório local com o remote

A atualização pode ser feita de duas formas:

```shell
git fetch origin
git merge origin/main
```

ou

```shell
git pull origin main
```

Obs: o git pull é como se você fizesse o git fetch e merge juntos(é também o mais utilizado para atualizar, entretanto, há casos que precisa da primeira maneira mostrada anteriormente).

##### Excluindo branches

Para excluir uma branch, faça:

```shell
git branch -D <nome_da_branch>
```

---

### Prazos

**Início:** Segunda-feira (24/04)

**Entrega:** Sexta-feira (30/04)

---

<h3>Bom aprendizado!</h3>
