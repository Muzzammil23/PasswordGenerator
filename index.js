function Generate(){

    var password="";

    //get the selected length from drop down
    const lengthDropdown = document.getElementById('length');
    const selectedLength = parseInt(lengthDropdown.options[lengthDropdown.selectedIndex].value);

    //create a list of numbers and letters
    var Capitals="ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    var Lowercase = "abcdefghijklmnopqrstuvwxyz" ;  
    var numbers ="0123456789";
    var SpecialCharacters= "!@#$%&*?";

    var Characters= Capitals+Lowercase+numbers+SpecialCharacters;

    //loop from 0 to the selected length
    for (var i=0; i<selectedLength; i++){
        let randomIndex = Math.floor(Math.random() * Characters.length);//generates a random numberusing the length of the characters 
        password += Characters.charAt(randomIndex);//appends random character to pw
    }

    document.querySelector(".output").innerHTML=password;

    
}