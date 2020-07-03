const weka = require('./node_modules/node-weka/lib/weka-lib');
const arff = require('node-arff');

function WekaClassifier() {
    this.result = {};

    var options = {
        //'classifier': 'weka.classifiers.bayes.NaiveBayes',
        'classifier': 'weka.classifiers.functions.SMO',
        'params': ''
    };

    var sampleObject = {
        preg: 6,
        plas: 93,
        pres: 50,
        skin: 30,
        insu: 64,
        mass: 28.7,
        pedi: 0.356,
        age: 23,
        class: 0
    };

    arff.load('dia.arff', function (err, data) {
        if (err) {
            return console.error(err);
        }
        weka.classify(data, sampleObject, options, function (err, result) {
            this.result = result;
        })
    });

    return this.result;
}

module.exports = WekaClassifier;