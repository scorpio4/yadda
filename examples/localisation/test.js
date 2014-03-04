var Yadda = require('yadda');
Yadda.plugins.mocha({language: Yadda.localisation.Pirate, output: 'verbose' });

new Yadda.FeatureFileSearch('features').each(function(file) {
    feature(file, function(feature) {

        var library = require('./bottles-library');
        var yadda = new Yadda.Yadda(library);

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yadda.yadda(step, done);
            })
        });
    });
});