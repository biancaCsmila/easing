document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const recipeLinks = Array.from(document.getElementsByClassName("cabeçalho-menu-item"));
  
    searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      recipeLinks.forEach(function(link) {
        const recipeName = link.textContent.toLowerCase();
  
        if (recipeName.includes(searchTerm)) {
          link.style.display = "block";
        } else {
          link.style.display = "none";
        }
      });
    });
  });
  