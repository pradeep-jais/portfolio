const projects = [
  {
    id: 1,
    featured: false,
    title: 'coffee junkie',
    techUsed: ['HTML only'],
    desc: 'A basic project using HTML only to understand the various HTML elements and attributes.',
    github: '',
    url: 'https://coffee-junkie-html.netlify.app/',
    image: '../projects/coffee.jpg',
  },
  {
    id: 2,
    featured: false,
    title: 'cards project',
    techUsed: ['HTML', 'CSS'],
    desc: 'Making card design using CSS fundamental properties like position, float and width to make column layout',
    github: '',
    url: 'https://css-cards-style.netlify.app/',
    image: '../projects/cards.jpg',
  },
  {
    id: 3,
    featured: false,
    title: 'tea station',
    techUsed: ['HTML', 'CSS'],
    desc: 'A website for a company named "Tea Station". Project based on mainly CSS flexbox model and media query to make responsive layout. It uses animations and some JavaScript to add basic functionality like toggle sidebar and footer date.',
    url: 'https://tea-station-gkc.netlify.app/',
    image: '../projects/tea-station.jpg',
  },
  {
    id: 4,
    featured: true,
    title: 'backroad tour',
    techUsed: ['HTML', 'CSS'],
    desc: 'Building this project using CSS Grid model makes our life a lot easier. It is a powerful tool to make complex layout easily and reponsive to every screen size. It has some JS to smooth scroll.',
    github: 'https://github.com/pradeep-jais/backroad-company-project',
    url: 'https://backroad-tour-test.netlify.app/',
    image: '../projects/backroad.jpg',
  },
  {
    id: 5,
    featured: false,
    title: 'Grid mini project',
    techUsed: ['HTML', 'CSS'],
    desc: 'In this project i use Grid model to make multi-column layout, tiles, centering the div and a complex page layout with navbar, hero, sidebar, footer. ',
    url: 'https://grid-mini-pj.netlify.app/',
    image: '../projects/grid-mini.jpg',
  },
  {
    id: 6,
    featured: false,
    title: `John's portfolio`,
    techUsed: ['HTML', 'CSS'],
    desc: 'A full working demo portfolio website with multiple pages like about, projects, contact with a basic form. It is made fully responsive with latest CSS features. Some JavaScript for basic functionality like smooth scroll, nav-toggle, footer date etc. It has interesting skills and blog section and also a video embedded.',
    url: 'https://john-portfolio-demo.netlify.app/',
    github: 'https://github.com/pradeep-jais/portfolio-demo',
    image: '../projects/john-folio.jpg',
  },
  {
    id: 7,
    featured: false,
    title: 'color flipper',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A basic DOM manipulation project which create random color value and add it to the element on page to flip the color randomly.',
    github: '',
    url: 'https://color-flipper-magic.netlify.app/',
    image: '../projects/color-flipper.jpg',
  },
  {
    id: 8,
    featured: false,
    title: 'giveaway countdown timer',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A basic DOM manipulation project to show countdown timer. Uses Date object to format the date. This feature can be used to display some limited time offer or etc. ',
    github: '',
    url: 'https://giveaway-timer.netlify.app/',
    image: '../projects/timer.jpg',
  },
  {
    id: 9,
    featured: true,
    title: 'Image Gallery',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'This is a nice photo gallery project which uses Object Oriented Programmimg(OOP) approach based on constructor function along with prototypal inheritence modal. The code can be refactored with JavaScript Class object which is basically syntactic sugar.',
    github: 'https://github.com/pradeep-jais/Gallery',
    url: 'https://pradeep-jais.github.io/Gallery/',
    image: '../projects/gallery.jpg',
  },
  {
    id: 10,
    featured: false,
    title: 'Filters',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'This project provide different methods to filter out some product from a list of product. Filter can be done based on product company name or other unique feature. It has also a search faciliity. ',
    github: '',
    url: 'https://filter-button-pj.netlify.app/',
    image: '../projects/filters-btn.jpg',
  },
  {
    id: 11,
    featured: false,
    title: 'Random User API',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'This is a plain vanilla JavaScript project to practice fetch API. The app fetches complex user data and destructure it to make a beautiful looking user Card UI. This has a button to get new random user, and various utility buttons to see different info about person like name,contact,address,mail etc. ',
    github: '',
    url: 'https://random-user-apis.netlify.app/',
    image: '../projects/random-user.jpg',
  },
  {
    id: 12,
    featured: true,
    title: 'cocktail store',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'It is a good asynchronous JavaScipt(AJAX) project to fetch cocktail API to get the list. It has search feature which directly search from API using query string parameter and display the product.',
    github: 'https://github.com/pradeep-jais/cocktail-api',
    url: 'https://my-cocktail-store.netlify.app/',
    image: '../projects/cocktails.jpg',
  },
  {
    id: 13,
    featured: true,
    title: 'pagination',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A large number of products jammed on single page may discourage user experience. For this we can use pagination feature to displat a limited amount of product on single page and pages can be change on some button clicks ',
    github: 'https://github.com/pradeep-jais/pagination-vanilla-js',
    url: 'https://pagination-apis.netlify.app/',
    image: '../projects/pagination.jpg',
  },
  {
    id: 14,
    featured: true,
    title: 'calculator',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: `My first basic Calculator web app using basic vanilla JavaScipt. I enjoyed a lot beacause i made this without seeking someone's help!`,
    github: 'https://github.com/pradeep-jais/calculator-basic-js',
    url: 'https://calculator-basic-js.netlify.app/',
    image: '../projects/calci.jpg',
  },
  {
    id: 15,
    featured: true,
    title: 'e-com Comfy Store',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    desc: `My first E-Commerce project using vanilla JavaScript and HTML-CSS. The Comfy store has all the basic features of a shopping app. A multi-page app with various products which can be added to the cart for shopping.`,
    github: 'https://github.com/pradeep-jais/E-Com-Comfy-Store',
    url: 'https://e-com-comfy-store.netlify.app/',
    image: '../projects/e-com-comfy-store.jpeg',
  },
  {
    id: 16,
    featured: true,
    title: 'Carousel in ReactJS',
    techUsed: ['CSS', 'JavaScript', 'ReactJS'],
    desc: `Implementing simple carousel(image slider) functionality in React JS with functions like next image, previous image, auto update image after a few second and go to any images`,
    github: 'https://github.com/pradeep-jais/react-carousel',
    url: 'https://react-carousel-js.netlify.app/',
    image: '../projects/carousel-react.jpeg',
  },
  {
    id: 17,
    featured: true,
    title: 'Cart using Redux toolkit',
    techUsed: ['CSS', 'JavaScript', 'ReactJS'],
    desc: `A simple shopping cart with basic features like increase/decrease product amount, remove product, update price and total cart item. The project is build in latest ReactJS 18 with Redux toolkit library for centralized state management. `,
    github: 'https://github.com/pradeep-jais/react-redux-cart-project',
    url: 'https://react-reduxtool-cart.netlify.app/',
    image: '../projects/redux-cart.jpeg',
  },
  {
    id: 18,
    featured: true,
    title: 'YouTube clone in React',
    techUsed: ['Material UI', 'CSS', 'JavaScript', 'React'],
    desc: `A fully functional modern Youtube clone application in React JS using rapidAPI for fetching youtube data and Material UI for its beautiful design. Its my first big project in React where I'll implement React-router for routing, redux library toolkit for centralized state management, axios for Http requests, hooks and various advance React concepts. `,
    github: 'https://github.com/pradeep-jais/youtube-clone-react',
    url: 'https://youtube-jais.netlify.app/',
    image: '../projects/youtube-clone-react.jpeg',
  },
];

export { projects };
