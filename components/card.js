export const getCard = (prod) => {
    //     return `
    //     <div class="card mb-3" style="max-width: 540px;">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img src="${prod.imageUrl}" class="img-fluid rounded-start" alt="image product">
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">${prod.name}</h5>
    //           <p class="card-text">Description:<br> ${prod.description}</p>
    //           <p class="card-text"><small class="text-body-secondary">Brand: ${prod.brand}</small></p>
    //           <p class="card-text"><small class="text-body-secondary">Price: $${prod.price}</small></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //     `;


    return `
    <div class="card mb-4 shadow-sm">
        <div class="row g-0">
           <div class="col-md-4">
             <img src="${prod.imageUrl}" class="img-fluid rounded-start" alt="Product Image">
            </div>
          <div class="col-md-8">
             <div class="card-body">
                 <h5 class="card-title">${prod.name}</h5>
                 <p class="card-text">${prod.description}</p>
                 <p class="card-text"><small class="text-muted"><span class="fw-bold">Brand</span>: ${prod.brand}</small></p>
                 <p class="card-text"><small class="text-muted"><span class="fw-bold">Price</span>: $${prod.price.toFixed(2)}</small></p>
                 <div class="d-flex justify-content-end">
                     <button class="btn btn-primary">Add to Cart</button>
                 </div>
              </div>
           </div>
        </div>
    </div>`;
}