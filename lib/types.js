"use strict";

/**
 * Types object.
 */
let types = {};


/**
 * Checks the value is an integer.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.integer = function(value) {
    return typeof value === 'number' && Math.floor(value) === value;
};


/**
 * Checks the value is an number.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.number = function(value) {
    return typeof value === 'number';
};


/**
 * Checks the value is an boolean.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.boolean = function(value) {
    return typeof value === 'boolean';
};


/**
 * Checks the value is a string.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.string = function(value) {
    return typeof value === 'string';
};


/**
 * Checks the value is an array.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.array = function(value) {
    return Array.isArray(value);
};


/**
 * Checks the value is a plain JS object.
 *
 * @param {*} value
 * @return {boolean}
 * @api private
 */
types.object = function(value) {
    return require('isobject')(value);
};


/**
 * Expose types.
 */
module.exports = types;