function readJson(someData)
{
  fetch('http://time.jsontest.com')
    .then(res => res.json())
    .then((out) => {
                    console.log('Output: ', out);
                    }
         ).catch(err => console.error(err));
}

function parseJson(someData)
{
  let jsonData = readJson(someData);
  let afterParse = [];
  for (var i = 0; i < jsonData.length; i++)
  {
    var obj = JSON.parse(jsonData[i]);
    afterParse.push(obj);
  }
  return afterParse;
}
