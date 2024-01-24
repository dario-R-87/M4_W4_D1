export const getCard = (prod) => {
  return `
    <div class="card mb-4 shadow-sm">
        <div class="row g-0">
           <div class="col-md-4">
             <img src="${prod.imageUrl}" class="img-fluid rounded-start" alt="Product Image">
            </div>
          <div class="col-md-8 d-flex flex-column">
             <div class="card-body">
                 <h5 class="card-title">${prod.name}</h5>
                 <p class="card-text">${prod.description}</p>
             </div>
             <div class="d-flex gap-3 justify-content-end pb-3">
                 <button class="btn btn-success "><a class="text-light" href="details.html?id=${prod._id}">View Details</a></button>
                 <button id="${prod._id}" class="add btn btn-primary">Add to Cart</button>
             </div>
             </div>
        </div>
    </div>`;
};

export const getCardAction = (prod) => {
  return `
  <div class="card mb-4 shadow-sm d-flex justify-content-between">
      <h5 class="card-title">${prod.name}</h5>
      
      <button
      id="${prod._id}"
      type="button"
      class="edit w-25"
      data-bs-toggle="modal"
      data-bs-target="#editModal"
     >
       Edit
     </button>
      <button
       id="${prod._id}"
       name="${prod.name}"
       type="button"
       class="delete w-25"
       data-bs-toggle="modal"
       data-bs-target="#deleteModal"
      >
        Delete
      </button>
  </div>`;
};

export const getCardDetails = (card) => {
  return `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${
              card.imageUrl
            }" class="img-fluid rounded-start" alt="image product">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">${card.name}</h5>
              <p class="card-text"><span class="fw-bold">Description</span>:<br> ${
                card.description
              }</p>
              <p class="card-text"><small class="text-muted"><span class="fw-bold">Brand</span>: ${
                card.brand
              }</small></p>
              <p class="card-text"><small class="text-muted"><span class="fw-bold">Price</span>: $${card.price.toFixed(
                2
              )}</small></p>
            </div>
            <div class="d-flex gap-3 justify-content-end pb-3">
             <button class="btn btn-success "><a class="text-light" href="index.html">Home</a></button>
             <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
        `;
};
