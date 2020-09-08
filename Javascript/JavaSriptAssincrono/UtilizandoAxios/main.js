axios
  .get("https://api.github.com/users/aliendev66")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
