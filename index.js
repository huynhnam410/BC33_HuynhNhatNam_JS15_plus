/***
 * INPUT:
 * họ tên, tổng thu nhập, số người phụ thuộc
 * 
 * PROGRESS:
 * tính thu nhập chịu thuế, tính và xuất thuế thu nhập cá nhân
 * 
 * OUTPUT:
 * in thuế thu nhập cá nhân ra màn hình
 */

 function ex3 (){
    var fullName = "Lewandowski";
    var totalIncome = 1500000000;
    var dependentPerson = 2;
    var incomeTaxes = totalIncome - 4000000 - (3 * 1600000)
    var personalIncomeTax;

    if (incomeTaxes <= 60000000){
        personalIncomeTax = incomeTaxes * 5 / 100;
    } else if (incomeTaxes <= 120000000){
        personalIncomeTax = incomeTaxes * 10 / 100;
    } else if (incomeTaxes <= 210000000){
        personalIncomeTax = incomeTaxes * 15 / 100;
    } else if (incomeTaxes <= 384000000){
        personalIncomeTax = incomeTaxes * 20 / 100;
    } else if (incomeTaxes <= 624000000){
        personalIncomeTax = incomeTaxes * 25 / 100;
    } else if (incomeTaxes <= 960000000){
        personalIncomeTax = incomeTaxes * 30 / 100;
    } else {
        personalIncomeTax = incomeTaxes * 35 / 100;
    }

    console.log("Tổng số thuế thu nhập cá nhân của Lewandowski là:", personalIncomeTax.toLocaleString() )
}

ex3()