# elo — MVP de networking

Página inicial responsiva em português, com React, Vite e CSS puro. Nome e identidade provisórios: azul profundo, verde-lima e tipografia do sistema, sem fontes ou imagens externas.

## Rodar localmente

Instale o **Node.js 24 LTS** (inclui npm). Abra um terminal nesta pasta, onde está o `package.json`:

```sh
npm install -g pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Abra o endereço exibido no terminal. Para parar, pressione Ctrl+C.

O projeto usa pnpm e inclui `pnpm-lock.yaml` para reproduzir as versões verificadas. Alternativamente, `npm install` e `npm run dev` funcionam, mas criam outro lockfile; prefira manter apenas um gerenciador no projeto.

## Gerar a versão de publicação

```sh
pnpm build
pnpm preview
```

O resultado fica em `dist/`. Não abra o `index.html` com duplo clique: use o servidor de desenvolvimento ou preview. O preview serve apenas para verificar a versão de produção localmente.

## Subir no GitHub

1. Extraia o ZIP e entre na pasta `elo`.
2. Crie um repositório vazio no GitHub.
3. Envie o conteúdo desta pasta, incluindo `.github`, `.gitignore` e o lockfile. Não envie `node_modules` nem `dist`.

Se preferir Git pelo terminal:

```sh
git init
git add .
git commit -m "Cria MVP do elo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua os dois campos na URL pelo seu usuário e repositório.

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Abra **Actions → Publicar no GitHub Pages → Run workflow**. Novos pushes para `main` também publicam automaticamente.
4. Espere o workflow terminar; o endereço aparecerá em Pages e no resultado da execução.

O workflow já está em `.github/workflows/deploy.yml`. O `base: './'` do Vite usa caminhos relativos e permite servir esta página tanto na raiz quanto em um subdiretório. Ao adicionar rotas reais, revise essa configuração e a estratégia de navegação do GitHub Pages.

Outra opção é importar o repositório na Vercel ou Netlify: comando de build `pnpm build`, diretório de saída `dist`. Nenhuma publicação ou criação de repositório foi feita automaticamente.

Referência: [guia oficial de publicação do Vite](https://vite.dev/guide/static-deploy.html).

## Organização

```text
elo/
├── .github/workflows/deploy.yml  # Publicação pelo GitHub
├── public/favicon.svg           # Marca simples do site
├── src/
│   ├── components/              # Header, Hero, perfis, etapas, rodapé e modal
│   ├── data/profiles.js          # Perfis fictícios e interesses
│   ├── App.jsx                  # Composição da página e ações de demonstração
│   ├── main.jsx                 # Entrada React
│   └── styles.css               # Tema, layout e responsividade
├── index.html                   # Idioma, título e descrição
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── vite.config.js
```

## O que funciona nesta versão

- Navegação por âncoras, header, hero, três perfis em destaque, explicação em três passos, CTA final e footer.
- Layout adaptável a celular, tablet e desktop.
- Botões de entrar, criar conta e conectar abrem um aviso de demonstração. Feche pelo botão, pela área externa ou por Escape.
- Modal nativo com foco contido, retorno de foco, rótulos acessíveis, link para pular ao conteúdo e respeito à preferência de movimento reduzido.

Não há autenticação, backend, mensagens, solicitações reais, armazenamento, cookies ou coleta de dados. Todos os perfis são fictícios. Os três passos apresentam a experiência futura.

## Evoluir aos poucos

1. **Conteúdo e marca:** altere `Brand.jsx`, o favicon, os textos e as cores em `styles.css`.
2. **Perfis:** edite `src/data/profiles.js`. A apresentação dos cards está separada dos dados.
3. **API:** quando houver backend, crie um módulo em `src/services/` para buscar perfis e trate carregamento, erros e resultados vazios antes de passar os dados aos componentes.
4. **Autenticação:** substitua as ações de demonstração em `App.jsx` por rotas/formulários ligados a um provedor. Nunca inclua segredos no frontend.
5. **Conexões:** implemente solicitações persistentes e permissões no servidor antes de indicar sucesso ao usuário.

A estrutura evita bibliotecas de UI, roteamento e gerenciamento global de estado até serem necessárias. Não é preciso introduzir backend para alterar a página inicial.

## Verificação manual sugerida

- Conferir 360px, tablet e desktop; ampliar texto e navegar por teclado.
- Testar as duas âncoras, todos os CTAs e os três botões Conectar.
- Abrir um modal, usar Tab e Escape e conferir retorno ao botão de origem.
- Rodar `pnpm build` antes de publicar.
