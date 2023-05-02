const itemsContainer = document.querySelector(".items");
function getItems(item) {
  return `
    <div class="item">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>`;
}

function addItems(text, container) {
  container.innerHTML += text;
}
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((items) => {
    items.forEach((item) => {
      const itemsContent = getItems(item);
      addItems(itemsContent, itemsContainer);
    });
  });
