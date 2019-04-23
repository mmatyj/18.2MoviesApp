var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'http://imgc.allpostersimages.com/img/posters/harry-potter-candles_u-L-F9DGY50.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'film o lwie',
        img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg'
    },
    {
        id: 3,
        title: 'Piekna i Bestia',
        desc: 'film o syndromie sztokholmskim',
        img: 'http://victorgimnazjalista.grupacogito.pl/wp-content/uploads/sites/3/2017/04/pib-pl_09a8c65586.jpg'
    },
    {
        id: 4,
        title: 'Killer',
        desc: 'film o Warszawie lat 90.',
        img: 'https://ssl-gfx.filmweb.pl/po/05/29/529/7689255.3.jpg',
    },
    {
        id: 5,
        title: 'Ants',
        desc: 'film o mrówkach',
        img: 'https://live.staticflickr.com/160/355882222_c27c6cb8a0_z.jpg',
    },
]

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.img
        }))
});

var element = React.createElement('div', {},
    React.createElement('div', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements));

ReactDOM.render(element, document.getElementById('app'));