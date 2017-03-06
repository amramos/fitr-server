var Exercise = require('./exercise.model');


var sampleExercise;

function genSampleExercise() {
    sampleExercise = new Exercise({
        student: 'studentIdA',
        name: 'supino',
        repetitions: 10,
        sets: 4,
        group: 'A',
        weekDay: 'Monday'
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