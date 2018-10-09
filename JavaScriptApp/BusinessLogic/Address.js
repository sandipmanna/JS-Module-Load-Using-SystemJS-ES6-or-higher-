//System.register(['./Address.js'], function (exports, module) {
    var AddressNameSpace = {};

    AddressNameSpace = (function () {
        function Address() {

            var _Validate = function () {
                alert("This is validation for Address");
            }
            return {
                Validate: _Validate
            }
        }
        return {
                Address
        }
    }());
//});

    exports.AddressNameSpace = AddressNameSpace;