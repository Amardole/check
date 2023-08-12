function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "1000") {
      const advancedPriceElement = document.getElementById("advanced-price");
      advancedPriceElement.textContent = "$800"; // Apply discount
      document.querySelector('.alert')
      //enable alert
      document.querySelector('.alert').style.display = 'block';
       // remove alert 
      setTimeout(() => {
          document.querySelector('.alert').style.display = 'none';
      },2000);
     }
  }
  