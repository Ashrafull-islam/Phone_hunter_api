const  loadData=async(phones)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`);
    const data=await res.json();
    const phone=(data.data);
    Card(phone);
}


const Card=(phones)=>{
        const takePhones=document.getElementById('Card_Container');

    phones.forEach(phone=>{
        console.log(phone);
        const div=document.createElement('div');
        div.classList=`card bg-base-100 w-auto shadow-xl border p-4`;
        div.innerHTML=`
                <figure class="bg-gray-100 p-8 rounded-lg">
                  <img 
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                <div class="w-[250px] mx-auto">
                     <h2 class="card-title text-center text-2xl">${phone.phone_name}</h2>
                  <p class="text-center opacity-75">There are many variations of passages of available, but the majority have suffered</p>
                  <p class="text-center text-xl my-2 font-semibold">$999</p>
                </div>
             
                  <div class="card-actions justify-center">
                    <button class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
        takePhones.appendChild(div);
    });
    loader(false);

}

// set loader 

const loader=(isLoading)=>{
    const takeLoader=document.getElementById('Loader');
    if(isLoading){
        takeLoader.classList.remove('hidden');
    }
    else{
        takeLoader.classList.add('hidden');
    }
}









const ClickLoader=()=>{
    // loader value 
    loader(true);
    // take value from the input 
    const takeInput=document.getElementById('searchPhone');
    const takeInputValue=takeInput.value;
    takeInput.value="";
    loadData(takeInputValue);
}