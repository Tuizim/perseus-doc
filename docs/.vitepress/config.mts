import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Perseus Doc Hub",
  description: "Documentação oficial da equipe Perseus",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/epico/introducao.md' }
    ],

    sidebar: [
      {
        text: 'Guias',
        items: [
          { text: 'Como documentar', link: '/guia/documentacao.md' },
        ]
      },
      {
        text: 'Epico',
        items: [
          { text: 'Introdução', link: '/epico/introducao.md' }
        ]
      },
      {
        text: 'Ordem de Servico',
        collapsed: true,
        items: [
          {
            text: 'Introdução',
            link: '/ordem-de-servico/introducao.md'
          },
          {
            text: 'API',
            collapsed: true,
            link: '/ordem-de-servico/api/api.md',
            items: [
              {
                text: 'Post',
                link: '/ordem-de-servico/api/post.md'
              },
              {
                text: 'Get',
                link: '/ordem-de-servico/api/get/get.md',
                items: [
                  {
                    text: 'Listagem',
                    link: '/ordem-de-servico/api/get/listagem.md'
                  },
                  {
                    text: 'Buscar por ID',
                    link: '/ordem-de-servico/api/get/buscaId.md'
                  }
                ]
              }
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tuizim/perseus-doc' }
    ]
  }
})
