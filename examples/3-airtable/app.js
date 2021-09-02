const result = document.querySelector(".result");

const fetchProduct = async () => {
  try {
    const { data } = await axios.get("/api/3-airtable");
    const products = data
      .map((product) => {
        const { id, url, name, price } = product;
        return `
        <a href="product.html?id=${id}" class="product">
        <img src="${url}" alt="${name}"/>
        <div class="info">
        <h5>${name}</h5>
        <h5>$${price}</h5>
        </div>
        `;
      })
      .join("");
    result.innerHTML = products;
  } catch (e) {
    result.innerHTML =
      "<h4>There i some internal error <br> will be fiexed soon</h4>";
  }
};

fetchProduct();
