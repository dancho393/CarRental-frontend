document.addEventListener("DOMContentLoaded", function() {
    
    function changeCarValue() {
        var carValueInput = document.getElementById("car-value-input");
        var carValueSlider = document.getElementById("car-value-slider");

        carValueSlider.addEventListener("input", function() {
            carValueInput.value = carValueSlider.value;
            calculateLeaseDetails();
        });

        carValueInput.addEventListener("input", function() {
            var value = parseInt(carValueInput.value, 10);
            if (!isNaN(value) && value >= 10000 && value <= 200000) {
                carValueSlider.value = value;
                calculateLeaseDetails();
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
            calculateLeaseDetails();
        });

        downPaymentInput.addEventListener("input", function() {
            var value = parseInt(downPaymentInput.value, 10);
            if (!isNaN(value) && value >= 10 && value <= 50) {
                downPaymentSlider.value = value;
                calculateLeaseDetails();
            } else {
                downPaymentInput.value = downPaymentSlider.value;
            }
        });
    }

    function calculateInterest() {
        var carType = document.getElementById("car-type");
        carType.addEventListener("change", function() {
            calculateLeaseDetails();
        });
    }

    function calculateLeaseDetails() {
        var carValue = parseInt(document.getElementById("car-value-input").value, 10);
        var downPaymentPercentage = parseInt(document.getElementById("down-payment").value, 10);
        var leasePeriod = parseInt(document.getElementById("lease-period").value, 10);
        var carType = document.getElementById("car-type").value;
        var interestRate = carType === "new" ? 2.99 : 3.70;
        
        var downPayment = (carValue * downPaymentPercentage) / 100;
        var loanAmount = carValue - downPayment;
        var monthlyInterestRate = interestRate / 100 / 12;
        var monthlyInstallment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -leasePeriod));
        var totalCost = monthlyInstallment * leasePeriod + downPayment;

        document.getElementById("down-payment-value").textContent = "Down Payment €" + downPayment.toFixed(2);
        document.getElementById("monthly-installment").textContent = "Montly Installment €" + monthlyInstallment.toFixed(2);
        document.getElementById("total-cost").textContent = "Total Leasing Cost €" + totalCost.toFixed(2);
        document.getElementById("interest-rate-text").textContent = "Interest Rate: " + interestRate + "%";
    }

    changeCarValue();
    changeDownPayment();
    calculateInterest();
    calculateLeaseDetails();
});
