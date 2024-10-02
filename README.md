# After Life

🚧 Em construção... 🚧

## Sobre o Projeto:

## Rodar Projeto:

Requisitos:
- Git;
- Node.js V20.X

**1. Clonar projeto com o Git:**

```bash
git clone https://github.com/CollegeProjectsInvest/after-life
```

**2. Instalar dependências:**

```bash
npm install
```

**3. Rodar projeto:**

```bash
npm run dev
```

Rodando em **http://localhost:3000**

## Fluxo de Trabalho:

A cada card/tarefa cadastrada no Trello deverá ser feita uma nova branch a partir da **develop**

Exemplo:

**Tarefa:** Criação Tela de Cadastro de Usuário</br>
**Branch:** feat/criacao-tela-cadastro-de-usuario

Cada branch e commit deve ser um padrão de nomenclatura:

-   feat: uma nova feature/funcionalidade;
-   fix: uma correção de erros;
-   docs: uma alteração na documentação do projeto;
-   refactor: uma alteração de código que não corrija um erro nem adicione uma nova funcionalidade;
-   style: mudança no estilo do código que não afeta a lógica, remover espaço, colocar ponto e vírgula etc;
-   chore: mudança que não modifica arquivos de códigos, mas configurações do projeto;

Existem outras nomenclaturas, mas essas são as mais comuns.

**1. Criar uma nova branch a partir da develop:**

Mude para a branch **develop**

```bash
git checkout develop
```

```bash
git checkout -b nome_da_branch
```

**2. Subir essa nova branch para o repositório remoto do Github:**

```bash
git push -u origin nome_da_branch
```

**3. Fazer Commits:**

   **OBS:** Faça commits pequenos, recomendado a cada conjunto de mudanças fazer um commit.

Adiciona mudanças ao commit.

```bash
git add arquivos
```

Ou caso queira adicionar todas as mudanças:

```bash
git add .
```

Faça commit utilizando as nomenclaturas corretas, exemplo:

```bash
git commit -m "feat: mensagem commit"
```

## Organização do Projeto:

## Tecnologias Utilizadas:

## Colaboradores:
