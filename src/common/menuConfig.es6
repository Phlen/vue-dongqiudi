
export default {
    version: '1.0.1',
    appName: 'SpiritZ',
    nav: [
        {
            name: '首页',
            active: true,
            link: '/'
        },
        {
            name: 'menu0',
            sub: [
                {
                    name: 'menu0-1',
                    link: '#/project'
                },
                {
                    name: 'men0-2',
                    link: '#/service'
                }
            ]
        },
        {
            name: 'menu1',
            active: false,
            sub: [
                {
                    name: 'menu1-1',
                    link: '#/products/30'
                },
                {
                    name: 'meun1-2',
                    link: '#/products/31'
                },
                {
                    name: 'menu1-3',
                    link: '#/products/32'
                }
            ]
        },
        {
            name: 'menu2',
            active: false,
            sub: [
                {
                    name: 'menu2-1',
                    link: '#/media/1'
                },
                {
                    name: 'menu2-2',
                    link: '#/media/2'
                }
            ]
        },
        {
            name: 'menu3',
            link: '#/dealer',
            active: false
        },
        {
            name: 'menu4',
            sub: [
                {
                    name: 'meun4-1',
                    link: '#/about/news'
                },
                {
                    name: 'menu4-2',
                    link: '#/about/spiritz'
                }
            ]
        },
        {
            name: 'menu5',
            link: '#/contact',
            active: false
        }
    ]
}
