function displayXOR(){
               
                var first_number = parseInt(document.getElementById("num1").value);
                var second_number = parseInt(document.getElementById("num2").value);
                var result = first_number ^ second_number;
     
                document.getElementById("xor").value = result;
            }