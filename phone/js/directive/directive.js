/**
 * Created by Administrator on 2017/3/2.
 */
var app =angular.module("myApp")
 app.directive("myTotal",function () {

    return {
        link: function (scope, ele, attr) {
            ele.on("click", function () {
                // debugger
                scope.$watch("scope.picNum", function () {
                    // debugger
                    scope.totals = scope.picNum;
                    console.log(scope.totals)
                })
            })
        },
    }
})