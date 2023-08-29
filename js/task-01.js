const classes = document.querySelectorAll(".item");
console.log('Number of categories: ${classes.length}')

classes.forEach(item => {
  console.log('Category: ${item.firstElementChild.textContect}');
  console.log('Elements: ${item.lastElementChild.children.length}')
});
