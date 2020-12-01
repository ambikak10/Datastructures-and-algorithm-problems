var idToShortURL = function (id) {

  map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  shortURL = "";


  while (id > 0) {
    shortURL = map[id % 62] + shortURL;
    id = Math.floor(id / 62);
  }
  //console.log(shortURL);
  id = 0;
  for (var i = 0; i < shortURL.length; i++) {
    var val_i = shortURL.charCodeAt(i);
    //console.log(val_i);
    if (val_i >= "a".charCodeAt(0) && val_i <= "z".charCodeAt(0)) {
      id = id * 62 + val_i - "a".charCodeAt(0);
       console.log(id);
    } else if (val_i >= "A".charCodeAt(0) && val_i <= "Z".charCodeAt(0)) {
      console.log(id)
      id = id * 62 + val_i - "A".charCodeAt(0) + 26;
      console.log(id);
    } else id = id * 62 + val_i - "0".charCodeAt(0) + 52;
  }
  return id;
};

console.log(idToShortURL(150));

//o(n)
//o(1)
