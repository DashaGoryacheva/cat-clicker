let model = {
    currentCat: null,
    cats: [{
        counter: 0,
        name: 'Vlad',
        imgSrc: 'cat.png'
    },
    {
        counter: 0,
        name: 'Dasha',
        imgSrc: 'secondcat.jpg'
    },
    {
        counter: 0,
        name: 'Nastya',
        imgSrc: 'Nastya.jpeg'
    },
    {
        counter: 0,
        name: 'Mama',
        imgSrc: 'Mama.jpg'
    },
    {
        counter: 0,
        name: 'Babushka',
        imgSrc: 'Babushka.jpg'
    }
    ]
}
let octopus = {
    init: () => {
        model.currentCat = model.cats[0];
        catListView.init();
        view.init();
    },
    increaseCounter: () => {
        model.currentCat.counter++;
        view.render();
    },
    getCats: () => model.cats,
    getCurrentCat: () => model.currentCat,
    drawCurrentCat: cat => model.currentCat = cat
}
let view = {
    init: function () {
        this.catImage = document.getElementById('cat-picture');
        this.catName = document.getElementById('cat-name');
        this.clickCounter = document.getElementById('numClick');
        this.catImage.addEventListener('click', () => octopus.increaseCounter()
        );
        this.render();
    },
    render: function () {
        var curCat = octopus.getCurrentCat();
        this.catImage.src = curCat.imgSrc;
        this.catName.textContent = curCat.name;
        this.clickCounter.textContent = curCat.counter;
    }
}
let catListView = {
    init: function () {
        this.buttonDiv = document.querySelector('#buttons');
        this.render();
    },
    render: function () {
        var cat;
        var btn;
        var i;
        var catArray = octopus.getCats();
        this.buttonDiv.innerHTML = '';
        for (i = 0; i < catArray.length; i++) {
            cat = catArray[i];
            btn = document.createElement('button');
            btn.className = 'each-btn';
            btn.textContent = cat.name;
            btn.addEventListener('click', (function (c) {
                return function () {
                    octopus.drawCurrentCat(c);
                    view.render();
                }
            })(cat));
            this.buttonDiv.appendChild(btn);
        }
    }
}
octopus.init();
