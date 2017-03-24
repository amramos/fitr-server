import passport from 'passport'
import User from '../user.model'
import student from '../../student'

function setRoleId(username, roleId) {
  return new Promise((resolve, reject) => {
    const query = { username }
    User.findOneAndUpdate(query, { roleId }, (err, user) => {
      if (err) {
        return reject(err)
      }

      return resolve(user)
    })
  })
}

export function create(req, res) {
  const username = req.body.username
  const password = req.body.password
  const role = req.body.role || 'student'

  User.register(new User({ username }), password, (err) => {
    if (err) {
      return res.status(500).json({ err })
    }
    passport.authenticate('local')(req, res, () => {
      if (role === 'student') {
        student.create()
          .then(stud => stud._id)
          .then(roleId => setRoleId(username, roleId))
          .then(() => res.status(200).json({ status: 'Registration successful!' }),
            studentErr => res.status(500).json({ error: studentErr }))
      }
    })
  })
}

