document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('input[data-format="currency"]');

  inputs.forEach(input => {
    input.addEventListener("input", function(e) {
      // Get only digits
      let rawValue = e.target.value.replace(/[^\d]/g, "");
      
      if (rawValue === "") {
        e.target.value = "";
        return;
      }

      // Format as USD with commas
      e.target.value = "$" + Number(rawValue).toLocaleString("en-US");
    });
  });
});
