var my_favorites = ["friends", "family", "pets", "coding", "traveling"];
for (var i = 0; i < my_favorites.length; i++) {
    console.log(my_favorites[i]);
}

for (favorite in my_favorites) {
  console.log(my_favorites[favorite]);
}
