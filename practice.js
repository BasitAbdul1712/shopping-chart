function feetToMile(feet) {
    if (feet < 0) {
        console.log("Please valid input.");
        //return "Please enter valid input";
    }
    else{
        var result = feet*0.00018939;
        console.log("Converted mile is:",result, "mile/miles")
    }
   
}
AllFeet = [-4585, 856, 485699]
total = (AllFeet[0])
result= feetToMile(total)


function woodCalculator(chair, table, bed) {
    var chair = chair*1;
    var table = table*3;
    var bed = bed*5;
    total = 0;
    if (chair <0 || table < 0 || bed < 0) {
        console.log("Please enter valid input value.");  
    }
    else {
        woodNeeded = chair+table+bed;
        console.log("Total wood needed:", woodNeeded, "cubic feet")
        return woodNeeded;
        } 
        
    }
    woodNeeded = woodCalculator(-1, 3, 1);
