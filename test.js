function readJson(url)
{
  let afterParse;
  fetch(url)
    .then(res => res.json())
    .then((jsonData) => {
                  afterParse = [];
                  for (var i = 0; i < jsonData.length; i++)
                  {
                    var obj = JSON.parse(jsonData[i]);
                    afterParse.push(obj);
                  }
                  return afterParse;
                                }
         )
    .catch(err => console.error(err));

}

readJson(URL);
