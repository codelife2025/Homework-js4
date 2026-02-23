let age = 19;

if(typeof age !== "number" || isNaN(age)){ 
    console.log("მითითებული ასაკი არასწორია!");// ჯერ ვამოწმებთ არის თუ არა რიცხვი
}else if(age < 18){
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
}else{
    console.log("თქვენ შეგიძლიათ");
}