/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC — PRODUCT DETAILS V4 JS
   assets/js/product-details.js
   ═══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP_NUMBER = "+919307213349";

  const params = new URLSearchParams(window.location.search);
  const productSlug = params.get("product") || "ie2-motors";

  const product =
    typeof AMPERE_PRODUCTS !== "undefined"
      ? AMPERE_PRODUCTS[productSlug]
      : null;

  if (!product) {
    showFallbackProduct();
    return;
  }

  const evChargingSection = document.getElementById(
    "evChargingSolutionTypes"
  );

  if (evChargingSection) {
    if (productSlug === "ev-charging-solutions") {
      evChargingSection.removeAttribute("hidden");
    } else {
      evChargingSection.setAttribute("hidden", "");
    }
  }

  loadProductDetails(product, productSlug);
  loadRelatedProducts(productSlug);
});

function loadProductDetails(product, productSlug) {
  setText("breadcrumbProduct", product.name);
  setText("productCategory", product.category);
  setText("productTitle", product.name);
  setText("productShortDescription", product.shortDescription);
  setText("productBrand", product.brand);
  setText("productOverview", product.overview);
  setText("selectedProductName", product.name);

  const productImage = document.getElementById("productImage");
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }

  const catalogueBtn = document.getElementById("catalogueBtn");
  if (catalogueBtn) {
    catalogueBtn.href = product.catalogue || "#";
  }

  populateSpecifications(product.specifications);
  populateList("productFeatures", product.features);
  populateList("productApplications", product.applications);

  populateEnquiryFields(product);
  buildWhatsAppLink(product);
  updatePageMeta(product);
}

function populateSpecifications(specifications) {
  const tableBody = document.getElementById("specificationTable");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  Object.entries(specifications).forEach(([label, value]) => {
    const row = document.createElement("tr");

    const labelCell = document.createElement("td");
    labelCell.textContent = label;

    const valueCell = document.createElement("td");
    valueCell.textContent = value;

    row.appendChild(labelCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  });
}

function populateList(elementId, items) {
  const list = document.getElementById(elementId);
  if (!list) return;

  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function populateEnquiryFields(product) {
  const productName = document.getElementById("hiddenProductName");
  const productCategory = document.getElementById("hiddenProductCategory");
  const productBrand = document.getElementById("hiddenProductBrand");
  const requirementMessage = document.getElementById("requirementMessage");

  if (productName) productName.value = product.name;
  if (productCategory) productCategory.value = product.category;
  if (productBrand) productBrand.value = product.brand;

  if (requirementMessage) {
    requirementMessage.value =
      `Hello Ampere Electric,\n\n` +
      `I am interested in the following product:\n\n` +
      `Product: ${product.name}\n` +
      `Category: ${product.category}\n` +
      `Brand: ${product.brand}\n\n` +
      `Please share pricing, availability, catalogue and technical details.\n\n` +
      `Thank you.`;
  }
}

function buildWhatsAppLink(product) {
  const whatsappBtn = document.getElementById("whatsappProductBtn");
  if (!whatsappBtn) return;

  const message =
    `Hello Ampere Electric,\n\n` +
    `I am interested in:\n` +
    `Product: ${product.name}\n` +
    `Category: ${product.category}\n` +
    `Brand: ${product.brand}\n\n` +
    `Please share pricing, availability, catalogue and technical details.`;

  whatsappBtn.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function loadRelatedProducts(currentSlug) {
  const relatedGrid = document.getElementById("relatedProductsGrid");
  if (!relatedGrid) return;

  relatedGrid.innerHTML = "";

  if (
    typeof AMPERE_RELATED_PRODUCTS === "undefined" ||
    typeof AMPERE_PRODUCTS === "undefined"
  ) {
    return;
  }

  AMPERE_RELATED_PRODUCTS
    .filter((slug) => slug !== currentSlug && AMPERE_PRODUCTS[slug])
    .slice(0, 4)
    .forEach((slug) => {
      const product = AMPERE_PRODUCTS[slug];

      const card = document.createElement("article");
      card.className = "related-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="related-card-content">
          <h3>${product.name}</h3>
          <a href="product-details.html?product=${slug}">
            View Details
          </a>
        </div>
      `;

      relatedGrid.appendChild(card);
    });
}

function showFallbackProduct() {
  setText("breadcrumbProduct", "Product Not Found");
  setText("productTitle", "Product Not Found");
  setText(
    "productShortDescription",
    "The selected product could not be found. Please explore our products page."
  );

  const main = document.querySelector(".pd-main .container");

  if (main) {
    main.innerHTML = `
      <section class="pd-content-card">
        <h2>Product Not Found</h2>
        <p>
          The product you are looking for is not available or the product link is incorrect.
        </p>
        <br>
        <a href="products.html" class="pd-primary-btn">
          Back to Products
        </a>
      </section>
    `;
  }
}

function updatePageMeta(product) {
  document.title = `${product.name} | Ampere Electric`;

  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = product.shortDescription;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}