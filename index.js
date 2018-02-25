'use strict';

// List extracted from the Hard Keywords section of http://kotlinlang.org/docs/reference/keyword-reference.html
var reservedKeywords = {
    as: true,
    break: true,
    class: true,
    continue: true,
    do: true,
    else: true,
    false: true,
    for: true,
    fun: true,
    if: true,
    in: true,
    interface: true,
    is: true,
    null: true,
    object: true,
    package: true,
    return: true,
    super: true,
    this: true,
    throw: true,
    true: true,
    try: true,
    typealias: true,
    val: true,
    var: true,
    when: true,
    while: true
};

module.exports = function(str) {
    return reservedKeywords.hasOwnProperty(str);
};