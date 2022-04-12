
document.getElementById('calculate-button').addEventListener('Calculate', function () {



 const Income = document.getElementById('Income');
 const TotalIncome = parseFloat(Income); 

 const Food = document.getElementById('Food');
 const TotalFood = parseFloat(Food); 



 const Rent = document.getElementById('Rent');
 const TotalRent = parseFloat(Rent); 

 const Clothes = document.getElementById('Clothes');
 const TotalClothes = parseFloat(Clothes); 

const TotalExpenses =  TotalIncome + TotalFood + TotalRent + TotalClothes;

const Balance = Income - TotalExpenses;


});