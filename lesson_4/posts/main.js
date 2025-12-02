const tbody = document.getElementById("tbody");
const cards = document.getElementById("cards");

let isLoading = true;

if (isLoading) {
  tbody.innerHTML = `
    <tr>
        <td colspan="4" style="text-align:center;"><div class="loader"></div></td>
    </tr>`;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    tbody.innerHTML = "";
    cards.innerHTML = "";
    isLoading = false;

    json.forEach((data) => {
      // TABLE
      tbody.innerHTML += `
        <tr>
            <td>${data.userId}</td>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.body}</td>
        </tr>
      `;

      // CARDS
      cards.innerHTML += `
        <div class="card">
          <p><b>userId:</b> ${data.userId}</p>
          <p><b>Id:</b> ${data.id}</p>
          <p><b>Title:</b> ${data.title}</p>
          <p><b>Body:</b> ${data.body}</p>
        </div>
      `;
    });
  })
  .catch((err) => {
    tbody.innerHTML = `
    <tr>
        <td colspan="6" style="text-align:center;">ERROR</td>
    </tr>`;
  });
