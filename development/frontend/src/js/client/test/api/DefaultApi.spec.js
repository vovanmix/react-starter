/**
 * Swagger Petstore (Simple)
 * A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
 *
 * OpenAPI spec version: 1.0.0
 * Contact: foo@example.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstoreSimple);
  }
}(this, function(expect, SwaggerPetstoreSimple) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerPetstoreSimple.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('addPet', function() {
      it('should call addPet successfully', function(done) {
        //uncomment below and update the code to test addPet
        //instance.addPet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePet', function() {
      it('should call deletePet successfully', function(done) {
        //uncomment below and update the code to test deletePet
        //instance.deletePet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetById', function() {
      it('should call findPetById successfully', function(done) {
        //uncomment below and update the code to test findPetById
        //instance.findPetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPets', function() {
      it('should call findPets successfully', function(done) {
        //uncomment below and update the code to test findPets
        //instance.findPets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));