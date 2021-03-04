
const words = require('../lib/words');

exports['text to words'] = function (test) {
    const result = words.toWords('hello world');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['text to words skipping spaces'] = function (test) {
    const result = words.toWords('  hello   world  ');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['text to words skipping tabs, carriage returns, and new lines'] = function (test) {
    const result = words.toWords('\t  hello \r\n  world  ');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['text to words skipping non-letter'] = function (test) {
    const result = words.toWords('hello world!');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['text to words skipping digits'] = function (test) {
    const result = words.toWords('hello 123 world!');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['text to words in lower case'] = function (test) {
    const result = words.toWords('HELLO 123 WORLD!');
    
    test.ok(result);
    test.deepEqual(result, [ 'hello', 'world' ]);
}

exports['empty text'] = function (test) {
    const result = words.toWords('');
    
    test.ok(result);
    test.deepEqual(result, []);
}

exports['null text'] = function (test) {
    const result = words.toWords(null);
    
    test.ok(result);
    test.deepEqual(result, []);
}

exports['word count'] = function (test) {
    const result = words.countWords(words.toWords('alfa beta alfa zulu'));
    
    test.ok(result);
    test.deepEqual(result, {
        "alfa": 2,
        "beta": 1,
        "zulu": 1
    });
}

exports['collect words'] = function (test) {
    const words1 = words.countWords(words.toWords('alfa beta alfa zulu'));
    const words2 = words.countWords(words.toWords('zulu delta tango'));
    
    const result = {};
    
    words.collectWords(result, words1, 0);
    words.collectWords(result, words2, 1);
    
    test.deepEqual(result, {
        "alfa": {
            '0': 2
        },
        "beta": {
            '0': 1
        },
        "delta": {
            '1': 1
        },
        "tango": {
            '1': 1
        },
        "zulu": {
            '0': 1,
            '1': 1
        }
    });
}

