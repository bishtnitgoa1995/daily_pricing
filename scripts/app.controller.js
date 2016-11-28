(function() {
    'use strict';

    angular.module('price_app').
    controller('price_app.controller', ['$scope', 'app_service', function($scope, app_service) {

        console.log("iam loaded");
        var vm = this;
        vm.cities = [];
        vm.app_service = app_service;
        init();
        function init(){
            vm.app_service.city_api().then(function(data) {
                    console.log(data);
                    vm.cities = data.payload.city;
                    console.log(vm.cities);
                })
                .catch(function(data) {
                    console.log.error('city not loaded');
                })

        }

        

        //$scope.init();

        //         RouteService.getCities()
        // .then( function(data){
        //     vm.city = data.payload;
        // })
        // .catch(function(data){
        //     $log.error('Unable to load cities');
        // });
        //vm.cities = vm.get_cities();
        console.log(vm.cities);
        vm.api_data = {
            "meta": {
                "message": "Success",
                "status_code": 200
            },
            "payload": {
                "trends": [{
                    "average": 9,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100001.jpg",
                    "product_id": 100001,
                    "product_name": "टमाटर",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 9,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100002.jpg",
                    "product_id": 100002,
                    "product_name": "प्याज",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 10,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100003.jpg",
                    "product_id": 100003,
                    "product_name": "आलू",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 7,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100007.jpg",
                    "product_id": 100007,
                    "product_name": "फूलगोभी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 7,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100010.jpg",
                    "product_id": 100010,
                    "product_name": "शिमला मिर्च",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 21,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100011.jpg",
                    "product_id": 100011,
                    "product_name": "गाजर",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 11,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100012.jpg",
                    "product_id": 100012,
                    "product_name": "मिर्ची",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 37,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100014.jpg",
                    "product_id": 100014,
                    "product_name": "भिंडी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 40,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100015.jpg",
                    "product_id": 100015,
                    "product_name": "ककड़ी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 17,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100016.jpg",
                    "product_id": 100016,
                    "product_name": "अदरक",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 20,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100017.jpg",
                    "product_id": 100017,
                    "product_name": "फ्रेंच बीन्स",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 4,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100018.jpg",
                    "product_id": 100018,
                    "product_name": "पत्ता गोभी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 121.7,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100029.jpg",
                    "product_id": 100029,
                    "product_name": "सेब",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 7,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100033.jpg",
                    "product_id": 100033,
                    "product_name": "छोटे बैंगन (काला)",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 7,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100041.jpg",
                    "product_id": 100041,
                    "product_name": "बैंगन (भरता)",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 6,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100042.jpg",
                    "product_id": 100042,
                    "product_name": "लौकी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 50,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100045.jpg",
                    "product_id": 100045,
                    "product_name": "नींबू",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 67,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100046.jpg",
                    "product_id": 100046,
                    "product_name": "शेंग",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 6,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100050.jpg",
                    "product_id": 100050,
                    "product_name": "चुकंदर",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 6,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100054.jpg",
                    "product_id": 100054,
                    "product_name": "पापड़ी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 50,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100057.jpg",
                    "product_id": 100057,
                    "product_name": "मटर",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 70,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100069.jpg",
                    "product_id": 100069,
                    "product_name": "अनार",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 45,
                    "created_at": "2016-11-23",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100100.jpg",
                    "product_id": 100100,
                    "product_name": "चिक्कू",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 100,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100116.jpg",
                    "product_id": 100116,
                    "product_name": "लहसुन",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 50,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100126.jpg",
                    "product_id": 100126,
                    "product_name": "अमरूद",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 26,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100150.jpg",
                    "product_id": 100150,
                    "product_name": "खरबूजा",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 20,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100160.jpg",
                    "product_id": 100160,
                    "product_name": "पपीता",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 45,
                    "created_at": "2016-11-23",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100164.jpg",
                    "product_id": 100164,
                    "product_name": "अनानास",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 14,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100200.jpg",
                    "product_id": 100200,
                    "product_name": "तरबूज",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }, {
                    "average": 50,
                    "created_at": "2016-11-26",
                    "img_url": "http://static.bharatbazaarapp.com/product_images/100203.jpg",
                    "product_id": 100203,
                    "product_name": "मोसंबी",
                    "unit_id": 1,
                    "unit_name": "Kgs"
                }]
            }
        };

    }]);

})()
