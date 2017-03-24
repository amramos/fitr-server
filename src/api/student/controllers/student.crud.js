import StudentUser from '../student.model'

export function create() {
  return new Promise((resolve, reject) => {
    const newStudent = new StudentUser({})
    newStudent.save((err, student) => {
      if (err) {
        return reject(err)
      }
      return resolve(student)
    })
  })
}

export function get(id) {
  return new Promise((resolve, reject) => {
    StudentUser.findById(id, (err, student) => {
      if (err) {
        return reject(err)
      }
      return resolve(student)
    })
  })
}

