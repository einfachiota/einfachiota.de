const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/einfachIOTA',
    {
        branch: 'master',
        repo: 'https://github.com/einfachiota/einfachiota.de.git',
        user: {
            name: 'Cryptec',
            email: 'neupi92@web.de'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)