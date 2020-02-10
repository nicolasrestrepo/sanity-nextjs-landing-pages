export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e40cd7873c44d77b9688d97',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e1qkag4f',
                  apiId: '7a29c88a-f9e2-4c1e-96b4-e7f4f45d44b8'
                },
                {
                  buildHookId: '5e40cd789b87fbe2bff66357',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wv5awx5s',
                  apiId: '0a58bef0-f5c6-4c72-83a7-e93c59c13570'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicolasrestrepo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wv5awx5s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
