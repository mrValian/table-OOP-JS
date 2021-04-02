const dataExample = [{
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
gridView.header = "Hello";
gridView.headerClass = ["header"];
gridView.element = ".table";
gridView.tableClass = ["table"];
gridView.attribute = {
    "company": {
        "label": "Company",
        "src": "html",
    },
    "chef": {
        "label": "Director",
    },
    "contry": {
        "label": "Country",
        "value": (data) => {
            return data["country"];
        }
    },
};
gridView.data = dataExample;
gridView.render();