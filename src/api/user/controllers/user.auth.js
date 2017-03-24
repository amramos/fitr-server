import passport from 'passport'
import student from '../../student'

export function login(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).json({ err: info })
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ loginErr: 'Could not log in user' })
      }

      student.get(user.roleId)
        .then((stud) => {
          res.status(200).json({ status: 'Login successful!', id: user._id, role: 'student', data: stud })
        }, () => res.status(500).json({ err: 'Erro ao obter dados do usuário' }))
    })
  })(req, res, next)
}
