const  loadData=(phones)=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`)
    .then(res=>res.json())
    .then(data=>ClickLoader(data));
}

const ClickLoader=(phones)=>{
    // take value from the input 
    const takeInput=document.getElementById('searchPhone');
    const takeInputValue=takeInput.value;
    takeInput.value='';


    // catch create id 
    const takeDiv=document.getElementById('Card_Container');
    console.log(phones)
    // lood create 

}