const {User, Product, sequelize } = require('../models')
const bcrypt = require('bcryptjs')


let userData = [
    { username: 'Andy', password: bcrypt.hashSync('123456789', 12), email: 'andy@ggg.com'},
    { username: 'Bobby', password: bcrypt.hashSync('123456789', 12), email: 'bobby@ggg.com'},
    { username: 'Cathy', password: bcrypt.hashSync('123456789', 12), email: 'cathy@ggg.com'},
    { username: 'Danny', password: bcrypt.hashSync('123456789', 12), email: 'danny@ggg.com'},
]

let product = [
    { title: 'Keyboard', desc: 'This is a keyboard', price: 350, image: 'https://picsum.photos/300'},
    { title: 'Mouse', desc: 'This is a Mouse', price: 400, image: 'https://picsum.photos/300'},
    { title: 'Phone', desc: 'This is a Phone', price: 500, image: 'https://picsum.photos/300'},
    { title: 'Charger', desc: 'This is a Charger', price: 300, image: 'https://picsum.photos/300'},
]

const seedData = async () => {
    try {
        await sequelize.sync({force: true})
        let user_res = await User.bulkCreate(userData)
        let product_res = await Product.bulkCreate(product)
    } catch(err) {
        console.log(err)
    } finally {
        process.exit(0)
    }
}

seedData()

