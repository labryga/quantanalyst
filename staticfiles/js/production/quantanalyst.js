"use strict";

navigation.onclick = function (event) {
  var lists = navigation.getElementsByTagName('UL');
  [].forEach.call(lists, function (item) {
    return item.style.display = "none";
  });
  var list_title = event.target.dataset.navigationType;
  document.getElementById(list_title).style.display = "block";
};