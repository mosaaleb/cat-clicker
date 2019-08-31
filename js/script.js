/**
  * MODEL
*/
let model = { };
let controller = { };
let catView = { };
let catListView = { };


model = {
  currentCat: null,

  cats: [
    {
      clicksCount: 0,
      name: 'Tabby',
      imgSrc: 'assets/cat.jpg',
    },
    {
      clicksCount: 0,
      name: 'Tiger',
      imgSrc: 'assets/cat1.jpg',
    },
    {
      clicksCount: 0,
      name: 'Sensi',
      imgSrc: 'assets/cat2.jpg',
    },
    {
      clicksCount: 0,
      name: 'Matiudi',
      imgSrc: 'assets/cat3.jpg',
    },
    {
      clicksCount: 0,
      name: 'Messi',
      imgSrc: 'assets/cat4.jpg',
    },
  ],
};

/**
  * VIEWS
*/

catListView = {
  init() {
    this.catList = document.getElementById('cat-list');
    this.render();
  },

  render() {
    const cats = controller.getCats();
    this.catList.innerHTML = '';
    cats.forEach((cat) => {
      const listItem = document.createElement('li');
      listItem.textContent = cat.name;
      listItem.addEventListener('click', () => {
        controller.setCurrentCat(cat);
        catView.render();
      });
      this.catList.appendChild(listItem);
    });
  },
};

catView = {
  init() {
    this.catItem = document.getElementById('cat-item');
    this.catName = document.getElementById('cat-name');
    this.catImg = document.getElementById('cat-img');
    this.clicksCount = document.getElementById('clicks-count');
    this.catImg.addEventListener('click', () => {
      controller.incrementCounter();
      this.render();
    });
  },

  render() {
    const currentCat = controller.getCurrentCat();
    this.catName.textContent = currentCat.name;
    this.clicksCount.textContent = currentCat.clicksCount;
    this.catImg.src = currentCat.imgSrc;
  },
};

/**
  * CONTROLLER
*/

controller = {
  init() {
    [model.currentCat] = model.cats;
    catListView.init();
    catView.init();
  },

  getCurrentCat() {
    return model.currentCat;
  },

  setCurrentCat(cat) {
    model.currentCat = cat;
  },

  getCats() {
    return model.cats;
  },

  incrementCounter() {
    model.currentCat.clicksCount += 1;
  },
};

controller.init();
