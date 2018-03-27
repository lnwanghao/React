require("es6-promise").polyfill();
require("isomorphic-fetch");
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
const getData = url => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(checkStatus)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(function(ex) {
      console.log("parsing failed", ex);
    });
};
export { getData };
