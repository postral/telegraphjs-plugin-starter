var assert = require('assert');
var plugin = require("./index");

/**
 * Use this to mock the context object that your plugin will recieve
 * The signature is createContext(paramsForYourPlugin, functionToExecuteOnComplete)
 * `functionToExecuteOnComplete` will be called with an error on fail
 */
var mock = require("telegraphjs-context-mock");


describe('telegraphjs-plugin', function() {

    it('can finish without an error', function(done) {

    	var params = {};
    	var delivery = {};
    	var context = mock.createContext(params, done);

    	plugin(delivery, context);

    });
    

    it('can finish with an error', function(done) {

    	var params = {forceFail : true};
    	var delivery = {};
    	var context = mock.createContext(params, function complete(err) {
    		assert.ok(err);
    		done();
    	});

    	plugin(delivery, context);

    });
    



/*
/**/
});