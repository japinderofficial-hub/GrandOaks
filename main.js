// ===================== SEARCH BUTTON==============================================================
let searchBtn = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-container input");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", function () {
    if (searchInput.value === "") {
      alert("Please enter something to search");
    } else {
      alert("You searched for: " + searchInput.value);
    }
  });
}

// ===================== SELL FORM===================================================================
let sellBtn = document.querySelector(".submit-btn");
let propertyName = document.getElementById("product-name");
let price = document.getElementById("price");
let category = document.getElementById("category");

if (sellBtn) {
  sellBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (propertyName.value === "" || price.value === "" || category.value === "") {
      alert("Please fill all required fields!");
    } else {
      alert("Your property has been submitted successfully!");

      propertyName.value = "";
      price.value = "";
      category.value = "";
      document.getElementById("description").value = "";
    }
  });
}

// ===================== LUXURY PAGES FORM ===========================================================
let submitButtons = document.querySelectorAll("button");

submitButtons.forEach(function (btn) {
  if (btn.innerHTML.toLowerCase().includes("submit")) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Your request has been sent successfully!");
    });
  }
});