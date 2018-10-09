//System.register(['./Customer.js'], function (exports, module) {
    var CustomerNameSpace = {};

    CustomerNameSpace = (function () {
        function Customer() {
            var _CustomerName = "";
            var _CustomerCode = "";
            var _DBConnect = function () {
            }
            var _Validate = function () {
                _DBConnect

                var Module = require("./Address.js");
                var Address = new Module.AddressNameSpace.Address();
                Address.Validate();
                _CustomerName = this.CustomerName;
                _CustomerCode = this.CustomerCode;
                alert("This is validation for Customer, " + _CustomerName + "(" + _CustomerCode + ")");
            }
            return {
                CustomerName: _CustomerName,
                CustomerCode: _CustomerCode,
                Validate: _Validate
            }
        }

        function CustomerReporting() {
            var _CustomerName = "";
            var _CustomerCode = "";
            var _DBConnect = function () {
            }
            var _Validate = function () {
                _DBConnect();
                alert("This is validation");
            }
            return {
                CustomerName: _CustomerName,
                CustomerCode: _CustomerCode,
                Validate: _Validate
            }
        }
        return {
                Customer,
                CustomerReporting
        }
    }());

//});

    exports.CustomerNameSpace = CustomerNameSpace;