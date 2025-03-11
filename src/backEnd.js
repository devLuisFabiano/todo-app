class UI{

    constructor(n){
        this.n = n;
    }

    createLayout(){

        //creating container
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        //creating nav
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        container.appendChild(nav);
    }
    
}

export { UI };

