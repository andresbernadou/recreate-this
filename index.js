const url = "https://shrtct-2d24.restdb.io/rest/cabbagecan";
// api-key :

const options = {
  headers: { "x-apikey": "620cdf7d34fd62156585865e" },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data

    handleProductList(data);
  })
  .catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleProductList(data) {
  console.log(data);
  //   console.log(shortcut._id);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template

  const template = document.querySelector("#productsTemplate").content;

  //clone it

  const copy = template.cloneNode(true);

  //change content

  copy.querySelector(".productCard h3").textContent = product.Tittle;
  copy.querySelector(".rattingBox").textContent = product.Rating;
  copy.querySelector(".uploadedTime").textContent = product.Yearsago + "yr ago";
  copy
    .querySelector(".productCard img")
    .setAttribute(
      "src",
      `https://placekitten.com/300/30` + Math.floor(Math.random() * 10)
    );

  const parent = document.querySelector("main article");

  parent.appendChild(copy);
}
