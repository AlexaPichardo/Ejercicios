// Fetch API

// Esta API nos sirve para consumir API's externas.
// GET, POST, PUT, DELETE

const API_URL = "https://fakestoreapi.com/products";

export async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
} // fetchData

export function renderizarTarjetas(data) {
  const container = document.getElementById("productosContainer");
  container.innerHTML = "";

  data.forEach((product) => {
    container.innerHTML += `
      <div class="col-12">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Price: $${product.price} dll.</h6>
          </div>
        </div>
      </div>
    `;
  });
} //renderizarTarjetas

export function initFetch() {
  const fetchBtn = document.getElementById("fetchBtn");
  if (fetchBtn) {
    fetchBtn.addEventListener("click", async () => {
      const data = await fetchData();
      renderizarTarjetas(data);
    });
  }
}