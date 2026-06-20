# Publicar o site na Vercel

O projeto é um app Vite (React). A Vercel detecta sozinha — só precisa apontar
para a pasta certa. Há dois caminhos.

## Caminho A — Publicar JÁ, a partir deste repositório (mais rápido)

Sem precisar criar repo novo. O código já está em `pamella-site/` dentro do repo
`trence-adm/lista`.

1. Acesse https://vercel.com e entre com o GitHub (`trence-adm`).
2. **Add New… → Project** e importe o repositório `lista`.
3. Em **Root Directory**, clique em *Edit* e selecione **`pamella-site`**.
4. Framework: **Vite** (já vem detectado). Build: `npm run build` · Output: `dist`.
5. **Deploy**. Em ~1 min sai uma URL tipo `pamella-nutri-site.vercel.app`.

## Caminho B — Repositório dedicado

1. No GitHub: **New repository** → nome `pamella-nutri-site` → **Create** (deixe vazio,
   sem README).

2. Suba o código de uma destas formas:

   **B1 — Pelo zip (sem terminal):** baixe o `pamella-nutri-site.zip` que te enviei,
   descompacte, e na página do repo vazio use **“uploading an existing file”** →
   arraste todos os arquivos → **Commit changes**.

   **B2 — Pelo git (terminal):** a partir de uma cópia desta pasta:

   ```bash
   cp -r pamella-site /tmp/pamella-nutri-site
   cd /tmp/pamella-nutri-site
   rm -rf node_modules dist .vite
   git init && git add . && git commit -m "site Pamella Martins"
   git branch -M main
   git remote add origin https://github.com/trence-adm/pamella-nutri-site.git
   git push -u origin main
   ```

3. Na Vercel: **Add New… → Project** → importe `pamella-nutri-site` → **Deploy**
   (aqui a Root Directory já é a raiz, não precisa ajustar). Em ~1 min sai a URL.

## Domínio próprio (opcional)

Depois de publicado, em **Settings → Domains** na Vercel, é só adicionar o domínio
dela (ex.: `nutripamella.com.br`) e apontar o DNS conforme as instruções que a
Vercel mostra.
