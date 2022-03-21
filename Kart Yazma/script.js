let inpt1=document.getElementById("name");
let inpt2=document.getElementById("surname");
let cv=document.getElementById("cv");
let nmbrspan = document.getElementById("card-number")
let namespan =document.getElementById("card-name");
let number =[];
let cvnumber=[];
let cvnmbrstr ="";
let strng = "";
let nameSurname="";


function yaz(){
    if(inpt1.value!=""&&inpt2.value!="" && inpt1.value != inpt2.value &&namespan.innerHTML != inpt1.value+" "+inpt2.value &&inpt1.value.length+inpt2.value.length<16){
    for (let i = 0; i <16; i++) {
        let random =Math.floor(Math.random()*10);
        number[i]=random;
        console.log(number);
        
    }
    for (let b = 0; b<16;b++) {
        strng = strng+=`${number[b]}`;
        if(strng.length==4 || strng.length == 9||strng.length==14){
            strng +=" ";
        }
        console.log(strng);
    }
    for (let c = 0; c <3; c++) {
        if(cvnmbrstr.length ==3){
            cvnmbrstr ="";
        }
        let random2 =Math.floor(Math.random()*10);
        cvnumber[c]=random2;
        cvnmbrstr+=`${cvnumber[c]}`;
        cv.innerHTML ="CV : "+cvnmbrstr;
        console.log(cvnmbrstr);
        
    }
    
    nmbrspan.innerHTML ="";
    nmbrspan.innerHTML = strng;
    strng="";
    console.log(nmbrspan.innerHTML);
    
    name();
    }
    else{
        window.alert("Kanka 2 bilgi gir be");
    }
    function name(){
        nameSurname = inpt1.value;
        nameSurname = nameSurname +" "+inpt2.value;
        namespan.innerHTML = nameSurname;
        console.log(namespan.innerHTML);
    }
}
