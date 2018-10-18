export const ROUTES = [
    {
        'application': 'projetobase',
        'url': 'https://projeto-base-arquitetura.herokuapp.com/',
        'routes': [
            { 'path': '/' },
            { 'path': '/home'}
        ]
    },
    {
        'application': 'scaffolding',
        'url': 'https://scaffolding-arquitetura.herokuapp.com/',
        'routes': [
            { 'path': '/' },
            { 'path': '/detail'}
        ]
    }
];

export interface Application {
    application: string;
    url: string;
    routes: Route[];
}
export interface Route {
    path: string;
}
