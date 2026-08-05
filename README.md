# Junior Lopes Advocacia

Site institucional production-ready em Next.js 15, React 19 e TypeScript, organizado como monorepo pnpm. O conteúdo e as informações de contato são fictícios e devem ser revisados antes da publicação.

## Desenvolvimento

Requisitos: Node.js 22 e pnpm 10.

```bash
pnpm install
cp apps/website/.env.example apps/website/.env.local
pnpm dev
```

O site estará em `http://localhost:3000`.

## Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL`: URL canônica do site.
- `INSTAGRAM_APP_ID`, `INSTAGRAM_APP_SECRET` e `INSTAGRAM_ACCESS_TOKEN`: integração server-side com Instagram. Sem token, o feed usa conteúdo mockado.
- `GOOGLE_MAPS_API_KEY`: chave restrita do Google Maps Embed. Sem chave, o mapa usa o embed público por endereço.

Restrinja a chave do Maps ao domínio de produção. Segredos não devem usar o prefixo `NEXT_PUBLIC_`.

## Qualidade

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

O pre-commit executa `lint-staged`. A CI repete lint, tipos, testes e build.

## Arquitetura

Componentes compartilhados ficam em `src/components`; regras por domínio em `src/features`; contratos externos em `src/adapters`; integrações e cache em `src/services`; conteúdo local em `src/content`. Server Components são o padrão, e componentes cliente estão limitados a interações (FAQ, animações e formulário).

O formulário usa Server Action e uma interface `ContactService`; substitua `ConsoleContactService` por um adapter Resend, SMTP ou SendGrid. O feed do Instagram é cacheado por seis horas e tem fallback local.

## Render

O `render.yaml` e o `Dockerfile` usam o output standalone do Next. Crie um Web Service a partir do Blueprint, configure as variáveis no painel e valide domínio, HTTPS e metadados antes de publicar.

## Cloudflare Workers

O site também pode ser executado como uma aplicação full-stack no Cloudflare Workers com o adaptador OpenNext. Isso preserva Server Actions, cache do feed do Instagram e otimização de imagens.

```bash
pnpm cf-typegen
pnpm preview:cloudflare
pnpm deploy:cloudflare
```

Antes do deploy, autentique o Wrangler com `pnpm --filter website exec wrangler login`. Configure `NEXT_PUBLIC_SITE_URL` como variável de build e cadastre os valores sensíveis com `wrangler secret put`, executado em `apps/website`.
