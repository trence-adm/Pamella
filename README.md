# Site — Pamella Martins (Nutricionista)

Landing page institucional para captação de consultas. React + Vite + TypeScript, sem
backend, fácil de hospedar de graça (GitHub Pages, Netlify ou Vercel).

Foco: **emagrecimento, saúde da mulher, longevidade, dietas personalizadas e suplementação**.

## Rodar localmente

```bash
cd pamella-site
npm install
npm run dev      # abre em http://localhost:5173
```

Build de produção:

```bash
npm run build    # gera a pasta dist/
npm run preview  # serve o build localmente
```

## Como personalizar (sem mexer em código)

Quase tudo está em **um único arquivo**: [`src/data/content.ts`](src/data/content.ts).
Lá você troca:

- **WhatsApp** → campo `contato.whatsapp` (formato `55` + DDD + número, só dígitos)
- **Instagram** → já está como `nutri.pamella.martins`
- **CRN, cidade, e-mail** → em `contato`
- Textos do **hero, sobre, especialidades, como funciona, depoimentos e FAQ**

Procure pelos comentários `TODO` — são os pontos que precisam dos dados reais da Pamella.

### Fotos

Os lugares das fotos hoje são placeholders. Para colocar as fotos reais:

1. Salve as imagens em `public/` (ex.: `public/pamella.jpg`).
2. No `Hero.tsx` e `About.tsx`, troque a `<div>` placeholder por
   `<img src="/pamella.jpg" alt="Pamella Martins" />`.

## Deploy rápido (sugestão: Netlify)

1. Suba este projeto para um repositório próprio no GitHub.
2. No Netlify: **Add new site → Import from Git** → selecione o repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. (Opcional) Aponte o domínio dela, ex.: `nutripamella.com.br`.

Vercel e GitHub Pages funcionam do mesmo jeito (build `npm run build`, saída `dist`).

## Estrutura

```
src/
  data/content.ts     ← edite aqui (textos, contato, FAQ, depoimentos)
  components/          ← seções do site
  index.css           ← tema/cores (variáveis CSS no topo)
  App.tsx             ← ordem das seções
```
