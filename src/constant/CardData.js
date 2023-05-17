import Product1 from './../assets/image/product1.png'
import Product2 from './../assets/image/product2.png'
import Product3 from './../assets/image/product3.png'
import Product4 from './../assets/image/product4.png'

const ChoiceData = [
    {
        id: 'c1',
        title: 'Luxury facilities',
        description: 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'
    },
    {
        id: 'c2',
        title: 'Affordable Price',
        description: 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'
    },
    {
        id: 'c3',
        title: 'Many Choices',
        description: 'We provide many unique work space choices so that you can choose the workspace to your liking.'
    }
]
const Category = ['Chair', 'Beds', 'Sofa', 'Lamp'];

const SellingProductData = [
    {
        id: 'p1',
        category: 'Chair',
        name: 'Sakarias Armchair',
        price: 392,
        image: Product1
    },
    {
        id: 'p2',
        category: 'Chair',
        name: 'Baltsar Chair',
        price: 299,
        image: Product2
    },
    {
        id: 'p3',
        category: 'Chair',
        name: 'Anjay Chair',
        price: 519,
        image: Product3
    },
    {
        id: 'p4',
        category: 'Chair',
        name: 'Nyantuy Chair',
        price: 921,
        image: Product4
    }
]

export { ChoiceData, SellingProductData, Category }