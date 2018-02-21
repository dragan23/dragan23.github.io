// IIFE - Immediately Invoked Function Expression
(function (app) {

    // The global jQuery object is passed as a parameter
    app(window.jQuery, window, document);

}(function ($, window, document) {
    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function () {

        console.log('The DOM is ready');
        // The DOM is ready!

        //Put custom scripts here

    });

    console.log('The DOM may not be ready');
    // The rest of code goes here!


}));