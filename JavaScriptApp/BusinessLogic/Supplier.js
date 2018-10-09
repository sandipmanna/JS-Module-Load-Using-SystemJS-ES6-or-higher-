var SuppliersNameSpace = {};

SuppliersNameSpace = (function () {
    function Suppliers() {
        var _SuppliersName = "";
        var _SuppliersCode = "";
        var _DBConnect = function () {
        }
        var _Validate = function () {
            _DBConnect();
            alert("This is validation");
        }
        return {
            SuppliersName: _SuppliersName,
            SuppliersCode: _SuppliersCode,
            Validate: _Validate
        }
    }
    return {
        Suppliers
    }
}());
