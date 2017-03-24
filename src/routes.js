import user from './api/user'
import exercise from './api/exercise'
import training from './api/training'

export default function init(app) {
  app.use('/user', user)
  app.use('/exercise', exercise)
  app.use('/training', training)

  // application
  // se fosse colocar o front no mesmo rep, ou se a gente precisar de páginas administrativas
  app.get('*', (req, res) => {
    res.sendfile('./public/index.html') // load the single view file (angular will handle the page changes on the front-end)
  })
}
