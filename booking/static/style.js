document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkin").onchange = function () {
    let checkout = document.getElementById("checkout");
    checkout.disabled = false;
    checkout.min = this.value;
  };
});
document.getElementById("bookBtn").addEventListener("click", function (e) {
  e.preventDefault(); 
  alert("✅ Booking Successful!");
});
