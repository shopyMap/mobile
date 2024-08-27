export interface Category {
  name: string;
  img: string;
  urlPath: string;
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    name: 'Фрукти та овочі',
    img: require('../assets/imgs/productDepartments/fruitsAndVegetables.png'),
    urlPath: 'fruits_and_vegetables',
    subcategories: [
      {
        name: 'Зелень',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'herbs',
      },
      {
        name: 'Гриби',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'mushrooms',
      },
      {
        name: 'Овочі',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'vegetables',
      },
      {
        name: 'Соління, салати',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'pickles_and_salads',
      },
      {
        name: 'Фрукти, ягоди',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'fruits_and_berries',
      },
      {
        name: 'Горіхи, сухофрукти',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'nuts_and_dried_fruits',
      },
    ],
  },
  {
    name: 'Заморожені продукти',
    img: require('../assets/imgs/productDepartments/default.jpg'),
    urlPath: 'frozen_products',
    subcategories: [
      {
        name: 'Морозиво',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'ice_cream',
      },
      {
        name: 'Вареники, Пельмені, Млинці',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'dumplings_pancakes',
      },
      {
        name: 'Тісто, Випічка, Піца',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'dough_pastries_pizza',
      },
      {
        name: 'Напівфабрикати',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'semi_finished_products',
      },
      {
        name: 'Овочі та фрукти свіжозаморожені',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'frozen_fruits_and_vegetables',
      },
    ],
  },
  {
    name: 'Напої',
    img: require('../assets/imgs/productDepartments/drinks.png'),
    urlPath: 'drinks',
    subcategories: [
      {
        name: 'Содові напої',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'soft_drinks',
      },
      {
        name: 'Енергетичні',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'energy_drinks',
      },
      {
        name: 'Соки, нектари',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'juices',
      },
      {
        name: 'Мінеральна і питна вода',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'mineral_water',
      },
      {
        name: 'Квас',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'kvass',
      },
      {
        name: 'Алкогольні',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'alcoholic_drinks',
        subcategories: [
          {
            name: 'Горілка',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'vodka',
          },
          {
            name: 'Інший алкоголь',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'other_alcohol',
          },
          {
            name: 'Лікери, настоянки, бальзами',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'liqueurs_and_balms',
          },
          {
            name: 'Пиво',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'beer',
          },
          {
            name: 'Шампанське',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'champagne',
          },
          {
            name: 'Вино',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'wine',
          },
          {
            name: 'Слабоалкогольні та енергетичні напої',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'light_alcoholic_and_energy_drinks',
          },
          {
            name: 'Аперитив',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'aperitif',
          },
          {
            name: 'Коньяк',
            img: require('../assets/imgs/productDepartments/default.jpg'),
            urlPath: 'brandy',
          },
        ],
      },
    ],
  },
  {
    name: 'Молочні продукти',
    img: require('../assets/imgs/productDepartments/dairy.png'),
    urlPath: 'dairy_products',
    subcategories: [
      {
        name: 'Молоко',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'milk',
      },
      {
        name: 'Дитяча молочна продукція',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'baby_milk',
      },
      {
        name: 'Яйця курячі/перепелині',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'eggs',
      },
      {
        name: 'Сир кисломолочний',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'cottage_cheese',
      },
      {
        name: 'Кисломолочні напої',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'fermented_drinks',
      },
      {
        name: 'Масло і маргарин',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'butter',
      },
      {
        name: 'Йогурти',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'yogurt',
      },
      {
        name: 'Сметана',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'sour_cream',
      },
      {
        name: 'Молочні десерти',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'dairy_dessert',
      },
      {
        name: 'Сирки дитячі',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'children_cheese',
      },
      {
        name: 'Сирки глазуровані',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'glazed_cheese',
      },
      {
        name: 'Вершки',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'cream',
      },
      {
        name: 'Згущене молоко',
        img: require('../assets/imgs/productDepartments/default.jpg'),
        urlPath: 'condensed_milk',
      },
    ],
  },
  {
    name: 'Консервовані продукти',
    img: require('../assets/imgs/productDepartments/default.jpg'),
    urlPath: 'canned_food',
  },
  {
    name: 'Сухі продукти',
    img: require('../assets/imgs/productDepartments/grocery.png'),
    urlPath: 'dry_products',
  },
  {
    name: 'Приправи та соуси',
    img: require('../assets/imgs/productDepartments/default.jpg'),
    urlPath: 'spices_and_sauces',
  },
  {
    name: 'Дієтичні продукти',
    img: require('../assets/imgs/productDepartments/default.jpg'),
    urlPath: 'diet_products',
  },
  {
    name: 'Випічка',
    img: require('../assets/imgs/productDepartments/default.jpg'),
    urlPath: 'bakery',
  },
];
