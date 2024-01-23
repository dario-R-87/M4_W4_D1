export const getCard = (prod)=>{
    return `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${prod.imageUrl}" class="img-fluid rounded-start" alt="image product">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Description:<br> ${prod.description}</p>
          <p class="card-text"><small class="text-body-secondary">Brand: ${prod.brand}</small></p>
          <p class="card-text"><small class="text-body-secondary">Price: $${prod.price}</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
}