import Exercise from './exercise.model'


let sampleExercise

function genSampleExercise() {
  sampleExercise = new Exercise({
    name: 'supino',
    description: 'levantamento de peso na altura do peitoral'
  })
  return sampleExercise
}

describe('Business Model', () => {
  beforeEach(function () {
    genSampleExercise()
  })

  it('should create a exercise', function (done) {
    sampleExercise.validate((err) => {
      expect(err).to.not.exist
      done()
    })
  })
})
