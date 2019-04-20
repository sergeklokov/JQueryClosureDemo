// this is JQuery closure (lexical scope):
var Page = (function () {

    // array should be above Init method, to be initialized!
    var arr = [9, 2, 5, 6, 4, 73, 3, 7, 19, 1, 8, 44];

    // alternative initialization
    function myArray() {
        return [9, 2, 5, 6, 4, 73, 3, 7, 10, 1, 8, 44];
    }
    
    function sortArray(array) {
        return _.sortBy(array);
    }

    function getBiggestElements(array, n) {
        return _.last(_.sortBy(array), (n + 1));
    }

    function convertArrayToString(array) {
        if (!array)
            return "Array absent";

        var s = "";
        for (var j = 1; j < array.length; j++) {
            s = s + array[j].toString() + ' ';
        }
        return s;
    }
    return {
        Init: function () {
            //var arr = [9, 2, 5, 6, 4, 73, 3, 7, 19, 1, 8, 44];
            //var arr = myArray(); // it also will work
            $("#dTitle").html("Closure demo with array sorting on JavaScipt/JQuery/Underscore.js");
            $("#divA").html(convertArrayToString(arr));
            $("#divAsorted").html(convertArrayToString(sortArray(arr)));
            $("#divAsorted2").html(convertArrayToString(getBiggestElements(arr, 3)));
        }
    };
})(); // so called "dog balls"...

$(document).ready(function () {
    // var arr = [9, 2, 5, 6, 4, 73, 3, 7, 10, 1, 8, 44]; // local array will not work
    // arr = [9, 2, 5, 6, 4, 73, 3, 7, 10, 1, 8, 44]; // global array will work
    // https://stackoverflow.com/questions/3892696/is-var-necessary-when—declaring-
    // javascript - variables

    Page.Init();
});