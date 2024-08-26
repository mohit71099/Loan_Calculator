function calculateLoan(){
   let loanamtValue = document.querySelector("#loan-amount").value;
    let interestRate = document.querySelector("#interest-rate").value;
    let monthlyPay = document.querySelector("#months-to-pay").value;
    
    let interest = (loanamtValue*(interestRate*0.01))/monthlyPay;
     
    let monthPay = (loanamtValue/monthlyPay + interest).toFixed(2);

    document.querySelector("#payment").innerHTML = `Monthly Payment: ${monthPay}`;
}