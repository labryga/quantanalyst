"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

navigation.onclick = function (event) {
  var lists = navigation.getElementsByTagName('UL');
  [].forEach.call(lists, function (item) {
    return item.style.display = "none";
  });
  var list_title = event.target.dataset.navigationType;
  document.getElementById(list_title).style.display = "block";
};

navigation_mobile.onclick = function (event) {
  var list_navigation_type = event.target.dataset.navigationType;

  if (list_navigation_type === "menu_mobile") {
    var lists_mobile_collection = navigation_mobile.getElementsByTagName('UL');

    var lists_mobile = _toConsumableArray(lists_mobile_collection);

    var lists_mobile_submenus = lists_mobile.slice(1);
    lists_mobile_submenus.forEach(function (item) {
      return item.style.display = "none";
    });
  } else {
    document.getElementById(list_navigation_type).style.display = "block";
  }
};

tinymc.init({
  selector: 'textarea',
  toolbar: ['undo redo | stylesheet | bold italic | link image', 'alignleft aligncenter alignright']
});