const {sequelize} = require('./models')

sequelize.sync({force: true}).then(()=>{
  console.log('\nDBSync OK')
  process.exit(0)
}).catch((err)=> {
  console.log('\nDBSync have Error')
  process.exit(1)
})