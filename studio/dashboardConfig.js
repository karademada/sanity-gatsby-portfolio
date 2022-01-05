export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61d60cce053eb6b1e8767593',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bimix8mr',
                  apiId: 'b7170a4d-73ec-4ff4-8408-b4ccfadf0b56'
                },
                {
                  buildHookId: '61d60cce8147b3a286b45676',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nsxhk5jp',
                  apiId: 'b7c7f64c-20eb-4b03-9dab-84f15efdc494'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karademada/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nsxhk5jp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
