var Exercise = require('./exercise.model');


var sampleExercise;

function genSampleExercise() {
    sampleExercise = new Exercise({
    "name": "supino",
    "description": "levantamento de peso na altura do peitoral"
  });
  return sampleExercise;
}

describe('Business Model', function () {
    beforeEach(function () {
        genSampleExercise();
    });

    it('should create a business', function (done) {
        console.log(' sampleExercise', sampleExercise);
        sampleExercise.validate(function (err) {
            expect(err).to.not.exist;
            done();
        });
    });
});
