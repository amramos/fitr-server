import Training from './training.model'


let sampleTraining

function genSampleTraining() {
  sampleTraining= new Training({
    name: 'supino',
    description: 'levantamento de peso na altura do peitoral'
  })
  return sampleTraining
}

describe('Training Model', () => {
  beforeEach(function () {
    genSampleTraining()
  })

  it('should create a training', (done) => {
    sampleTraining.validate((err) => {
      expect(err).to.not.exist
      done()
    })
  })

})

