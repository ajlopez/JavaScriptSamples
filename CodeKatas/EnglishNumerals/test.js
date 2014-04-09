
var nums = require('./numerals');

exports['convert zero'] = function (test) {
    test.equal(nums(0), 'zero');
};

exports['convert one'] = function (test) {
    test.equal(nums(1), 'one');
};

exports['first numbers one digit'] = function (test) {
    test.equal(nums(2), 'two');
    test.equal(nums(3), 'three');
    test.equal(nums(4), 'four');
    test.equal(nums(5), 'five');
    test.equal(nums(6), 'six');
    test.equal(nums(7), 'seven');
    test.equal(nums(8), 'eight');
    test.equal(nums(9), 'nine');
};

exports['first numbers two digits'] = function (test) {
    test.equal(nums(10), 'ten');
    test.equal(nums(11), 'eleven');
    test.equal(nums(12), 'twelve');
    test.equal(nums(13), 'thirteen');
    test.equal(nums(14), 'fourteen');
    test.equal(nums(15), 'fifteen');
    test.equal(nums(16), 'sixteen');
    test.equal(nums(17), 'seventeen');
    test.equal(nums(18), 'eighteen');
    test.equal(nums(19), 'nineteen');
    test.equal(nums(20), 'twenty');
};

exports['numbers 20 to 29'] = function (test) {
    test.equal(nums(20), 'twenty');
    test.equal(nums(21), 'twenty-one');
    test.equal(nums(22), 'twenty-two');
    test.equal(nums(23), 'twenty-three');
    test.equal(nums(24), 'twenty-four');
    test.equal(nums(25), 'twenty-five');
    test.equal(nums(26), 'twenty-six');
    test.equal(nums(27), 'twenty-seven');
    test.equal(nums(28), 'twenty-eight');
    test.equal(nums(29), 'twenty-nine');
};

exports['numbers 30 to 39'] = function (test) {
    test.equal(nums(30), 'thirty');
    test.equal(nums(31), 'thirty-one');
    test.equal(nums(32), 'thirty-two');
    test.equal(nums(33), 'thirty-three');
    test.equal(nums(34), 'thirty-four');
    test.equal(nums(35), 'thirty-five');
    test.equal(nums(36), 'thirty-six');
    test.equal(nums(37), 'thirty-seven');
    test.equal(nums(38), 'thirty-eight');
    test.equal(nums(39), 'thirty-nine');
};

exports['numbers 40 to 49'] = function (test) {
    test.equal(nums(40), 'forty');
    test.equal(nums(41), 'forty-one');
    test.equal(nums(42), 'forty-two');
    test.equal(nums(43), 'forty-three');
    test.equal(nums(44), 'forty-four');
    test.equal(nums(45), 'forty-five');
    test.equal(nums(46), 'forty-six');
    test.equal(nums(47), 'forty-seven');
    test.equal(nums(48), 'forty-eight');
    test.equal(nums(49), 'forty-nine');
};

exports['numbers 50 to 59'] = function (test) {
    test.equal(nums(50), 'fifty');
    test.equal(nums(51), 'fifty-one');
    test.equal(nums(52), 'fifty-two');
    test.equal(nums(53), 'fifty-three');
    test.equal(nums(54), 'fifty-four');
    test.equal(nums(55), 'fifty-five');
    test.equal(nums(56), 'fifty-six');
    test.equal(nums(57), 'fifty-seven');
    test.equal(nums(58), 'fifty-eight');
    test.equal(nums(59), 'fifty-nine');
};

exports['numbers 60 to 69'] = function (test) {
    test.equal(nums(60), 'sixty');
    test.equal(nums(61), 'sixty-one');
    test.equal(nums(62), 'sixty-two');
    test.equal(nums(63), 'sixty-three');
    test.equal(nums(64), 'sixty-four');
    test.equal(nums(65), 'sixty-five');
    test.equal(nums(66), 'sixty-six');
    test.equal(nums(67), 'sixty-seven');
    test.equal(nums(68), 'sixty-eight');
    test.equal(nums(69), 'sixty-nine');
};

exports['numbers 70 to 79'] = function (test) {
    test.equal(nums(70), 'seventy');
    test.equal(nums(71), 'seventy-one');
    test.equal(nums(72), 'seventy-two');
    test.equal(nums(73), 'seventy-three');
    test.equal(nums(74), 'seventy-four');
    test.equal(nums(75), 'seventy-five');
    test.equal(nums(76), 'seventy-six');
    test.equal(nums(77), 'seventy-seven');
    test.equal(nums(78), 'seventy-eight');
    test.equal(nums(79), 'seventy-nine');
};

exports['numbers 80 to 89'] = function (test) {
    test.equal(nums(80), 'eighty');
    test.equal(nums(81), 'eighty-one');
    test.equal(nums(82), 'eighty-two');
    test.equal(nums(83), 'eighty-three');
    test.equal(nums(84), 'eighty-four');
    test.equal(nums(85), 'eighty-five');
    test.equal(nums(86), 'eighty-six');
    test.equal(nums(87), 'eighty-seven');
    test.equal(nums(88), 'eighty-eight');
    test.equal(nums(89), 'eighty-nine');
};

exports['numbers 90 to 99'] = function (test) {
    test.equal(nums(90), 'ninety');
    test.equal(nums(91), 'ninety-one');
    test.equal(nums(92), 'ninety-two');
    test.equal(nums(93), 'ninety-three');
    test.equal(nums(94), 'ninety-four');
    test.equal(nums(95), 'ninety-five');
    test.equal(nums(96), 'ninety-six');
    test.equal(nums(97), 'ninety-seven');
    test.equal(nums(98), 'ninety-eight');
    test.equal(nums(99), 'ninety-nine');
};
