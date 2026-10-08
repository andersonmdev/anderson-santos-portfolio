# Anderson Santos — Data & Analytics

Portfólio autoral inspirado no Davies, com Next.js App Router, TypeScript, Tailwind CSS 4 e Lucide. Foto real integrada ao notebook do hero por CSS, sem alterar o arquivo original.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

Abra http://127.0.0.1:3000.

## Conteúdo

- `data/profile.ts`: contatos, currículo, experiência, formação, certificações e tecnologias.
- `data/projects.ts`: conteúdo dos projetos. Textos iniciais são propostas editoriais; validar funcionalidades e arquitetura com a documentação real antes de publicar.
- `public/images/profile.png`: fotografia fornecida.
- Para habilitar Baixar CV, adicione o PDF em `public/cv/` e configure `profile.cv`.
- LinkedIn e e-mail só aparecem quando preenchidos. Empresas, datas e certificados não foram inventados.

## Vercel e GitHub

O remote existente é `andersonmdev/anderson-santos-portfolio`. Nenhum push ou deploy foi realizado.

1. Revise os dados e os textos dos projetos.
2. Envie as alterações para o GitHub.
3. Importe o repositório na Vercel usando o preset Next.js.
4. Configure `NEXT_PUBLIC_SITE_URL` com a URL pública HTTPS, sem barra final. Essa variável habilita canonical e URLs absolutas do sitemap e do Open Graph.
5. Faça o deploy. Novos commits na branch conectada acionam o deploy automático da Vercel.

Sem URL pública configurada, o sitemap fica vazio para evitar publicar um domínio inventado. Não inclua segredos em variáveis `NEXT_PUBLIC_*`.

## Design e acessibilidade

Segoe UI, fundo #07111B, destaque #00AEEF, ícones monoline, navegação por teclado, link para pular ao conteúdo e suporte a movimento reduzido. Layout adaptado para desktop e celular. Ilustrações dos projetos são conceituais, não capturas das aplicações.
