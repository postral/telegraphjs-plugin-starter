/**
 * A mock Context object
 *
 * @constructor
 * @this {Context}
 */

function createContext(params, onNext) {

    var context = function defaultCall(err) {
        return context.next(err);
    };

    //additional parameters that are in effect beyond the object itself
    context.params = params || {};

    //keep us from calling next after a failure
    context.failed = false;


    /*
        Fail causes a hard stop of the process with the error
    */
    context.fail = function fail(err) {
        if (context.failed) throw new Error("Something caused Context.fail() to execute after the context is already failed.");
        failed = true;
        if (typeof err === "string") err = new Error(err);
        onNext(err);
    }


    /*
        Warn is a non-fatal informational warning error
    */
    context.warn = function warn(err) {
        if (typeof err === "string") err = new Error(err);
        console.log("Warning from mock context", err);
    }


    /*
        Call when you are finished with your step and are passing to the next handler
    */
    context.next = function next(err) {
        if (this.failed) throw new Error("Something caused Context.next() to execute after Context.fail().");
        if (err) return this.fail(err);
        onNext();
    }

    return context;

}


module.exports = {
    createContext: createContext
};