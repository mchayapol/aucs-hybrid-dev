var app = angular.module('myApp',[]);

app.controller('Controller',function($scope){

    document.getElementById('detail_div').hidden = true;

    $scope.calculate = function(){
        if (typeof $scope.cash_txt === "undefined" || typeof $scope.purchase_txt === "undefined") {
            alert("PLEASE FILL IN ALL FIELDS!!");
            return;
        }
        if($scope.cash_txt == "" || typeof $scope.purchase_txt == ""){
            alert("PLEASE FILL IN ALL FIELDS!!");
            return;
        }


        $scope.change_txt = $scope.cash_txt - $scope.purchase_txt;

        $scope.purchase_detail_txt = $scope.purchase_txt;
        $scope.cash_detail_txt = $scope.cash_txt;
        $scope.change_detail_txt = $scope.change_txt;
        $scope.vat_detail_txt = ($scope.purchase_txt * 0.07).toFixed(2);
        $scope.amount_detail_txt = ($scope.change_detail_txt - $scope.vat_detail_txt).toFixed(2);

        document.getElementById('detail_div').hidden = false;
    }

    $scope.clear = function(){
        $scope.purchase_txt = "";
        $scope.cash_txt = "";
        $scope.change_txt = "";
        document.getElementById('detail_div').hidden = true;
    }

});