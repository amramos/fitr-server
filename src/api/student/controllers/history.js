var StudentUser = require('../student.model')
var mongoose = require('mongoose')
var passport = require('passport')
var exports = module.exports = {}

function getNextTraining(userId) {

  return new Promise((resolve, reject) => {
    StudentUser.findById(userId, function(err, user){

      if(err) {
        reject(err);
      }

      //Ordena o historico pela data de checkin
      const sortedHistory = user.history.sort((a, b) => 
        b.checkin - a.checkin
      )

      //pega o ultimo treino
      const lastTraining = user.trainings.filter((t) => 
        t.id === sortedHistory[0].training   
      )[0]

      //pega a sequencia do proximo treino
      const nextTrainingSeq = (++lastTraining.sequence) % sortedHistory.trainings.length


      //pega o treino com a sequencia
      const nextTraining = user.trainings.filter((t) =>
        t.sequence === nextTrainingSeq
      )[0]

      return resolve(nextTraining.id);
    })
  })
}


exports.checkin = function(id){    

  getNextTraining(id)
    .then((training) => {

      //insere um novo registro no history com a data atual e o treino
      const update = { 
        $push: { 
          "history": {
            checkin: Date.now(),
            training: training 
          }
        }
      }

      StudentUser.findByIdAndUpdate(id, update, function(err, user) {

        if(err){
          return res.status(500).json({err: 'Could not check-in user'})
        }

        res.status(200).json({status: 'Checkin successful!', user: user})
      })

    })
}
