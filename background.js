// Copyright (c) 2019 YAKUSHIJI Ryota

// Simple extension that make get_data_auto_complete returns [].

chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    return { redirectUrl: "data:application/json;charset=utf-8;,[]" };
  },
  {
    urls: [
      "*://*/cgi-bin/cbgrn/grn.cgi/grn/get_data_auto_complete?*"
    ],
    types: ["xmlhttprequest"]
  },
  ["blocking"]
);
