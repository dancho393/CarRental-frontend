document.addEventListener("DOMContentLoaded", function() {
    
    function changeCarValue() {
        var carValueInput = document.getElementById("car-value-input");
        var carValueSlider = document.getElementById("car-value-slider");

        carValueSlider.addEventListener("input", function() {
            carValueInput.value = carValueSlider.value;
        });

        carValueInput.addEventListener("input", function() {
            var value = parseInt(carValueInput.value, 10);
            if (!isNaN(value) && value >= 10000 && value <= 200000) {
                carValueSlider.value = value;
            } else {
                carValueInput.value = carValueSlider.value;
            }
        });
    }

    function changeDownPayment() {
        var downPaymentInput = document.getElementById("down-payment");
        var downPaymentSlider = document.getElementById("down-payment-slider");

        downPaymentSlider.addEventListener("input", function() {
            downPaymentInput.value = downPaymentSlider.value;
        });

        downPaymentInput.addEventListener("input", function() {
            var value = parseInt(downPaymentInput.value, 10);
            if (!isNaN(value) && value >= 10 && value <= 50) {
                downPaymentSlider.value = value;
            } else {
                downPaymentInput.value = downPaymentSlider.value;
            }
        });
    }
    function calculateInterest() {
        var leasingRateText = document.getElementById("interest-rate-text");
        var carType = document.getElementById("car-type");
        var interestRate;
        carType.addEventListener("change",function(){
            if (carType.value === "new") {
                interestRate = "2.99";
            } else if (carType.value === "used") {
                interestRate = "3.70";
            }
    
            leasingRateText.textContent = "Interest Rate:"+interestRate + "%";

        })
        
    }

    changeCarValue();
    changeDownPayment();
    calculateInterest();    

});
