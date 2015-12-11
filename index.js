/**
 * Create a helpful description of your plugin here for documentation purposes. This parameter list helps user understand what scope your plugin will work on. Remove any that your plugin will not use.
 *
 * @param {Object} delivery - The parameters object.
 * @param {Object} delivery.channel - The name of the channel the delivery will use. Can also be a channel group name.
 * @param {Object} delivery.to - Identifying information for the recipient.
 * @param {Object} delivery.from - Identifying information for the sender.
 * @param {Object} delivery.replyTo - Used if the transport allows an alternate reply address
 * @param {string} delivery.subject - A title or subject as used in email
 * @param {string} delivery.body - The main body of the message, HTML for emails, the content of SMS
 * @param {string} delivery.alt - An alternate version of the body, text-only version for emails, etc...
 * @param {string} delivery.style - Used mainly with CSS for emails, but can hold any styling information
 * @param {string} delivery.data - Arbitrary contextual data used by compilers to build messages. The delivery itself will also be there as _delivery.
 * @param {string} delivery.id - Set the id of the message. Defaults to a 50 random alphanumeric case-sensitive string
 * @param {string} delivery.previousId - If the message is a duplicate of another message, this is the previous message's ID
 * @param {string} delivery.createdAt - Set when the delivery was created. Defaults to Date.now();
 * @param {string} delivery.meta - Metadata storage, can be used to add custom attributes by/for plugins or for additional tracking
 * @param {string} delivery.text - Alias for delivery.alt, common with emails
 * @param {string} delivery.html - Alias for delivery.body, common with emails
 * @param {string} delivery.params - The raw delivery used to create the delivery
 * @param {string} delivery.error - If there is an error during the delivery, this will have a `package` and `message` properties
 *
 * @param {Object} context - The context object for your plugin. You can call `context()` when finished.
 * @param {function} context.next - Call when finished, alias of calling `context()` directly.
 * @param {function} context.fail - Call with a string when your plugin experiences an irrecoverable error.
 * @param {Object} context.params - Additional params that are being passed to your plugin. You should describe them here.
 * @param {string} context.params.key - An example additional parameter
 *
 */

/**
 * You may require any modules you like, just make sure they are in the `package.json` file.
 */
var assert = require('assert');

/**
 * While your plugin can contain any number of files and functions, it must export a function with 2 parameters.
 *
 * Naming the function can be helpful for debugging.
 *
 */
var yourPlugin = module.exports = function yourPlugin(delivery, context) {

	assert(context);
	assert(delivery);

	// The params object will have any specific params for your plugin
	// Be sure to add them to the documentation above as context.params entries to help others
    var params = context.params;


	// Fail with an error
	// This will stop the current channel's execution, so be sure you really need to fail.
	// If you only want to warn the user about something, use context.warn();
	
	// context.fail("This will be an error");
	// context.fail(new Error("This is an error"));

	if (params.forceFail) {
		//used for testing a failure
		return context.fail("This is a failute");
	}


	// Warn the user about something
		
	// context.warn("This will be an error object but will not stop execution");
	// context.warn(new Error("This is an error object that will not stop execution"));



	// Complete the plugin
	// Call this when you are complete and can pass to the next step
	// Passing an error will act the same as calling context.fail();
		
	// context();
	// context.next();

	// context("This will be an error");
	// context(new Error("This is an error"));
	// context.next("This will be an error");
	// context.next(new Error("This is an error"));

	context.next();


}

