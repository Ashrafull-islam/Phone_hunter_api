const  loadData=async(phones)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`);
    const data=await res.json();
    const phone=(data.data);
    Card(phone);
}


const Card=(phones)=>{
        const takePhones=document.getElementById('Card_Container');
        takePhones.textContent='';
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
                    <button onclick="showModal('${phone.slug}')" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
        takePhones.appendChild(div);
    });
    loader(false);

}

// show modal 
const showModal=async(id)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await response.json();
    const phnone=data.data;
    makeModal(phnone)
}
// make modal 
const makeModal=(phone)=>{
    const takeModal=document.getElementById('Modal_box');
    takeModal.innerText='';
    const makeModal=document.createElement('div');
    makeModal.innerHTML=`
    <div class="card bg-base-100 w-full ">
  <figure class="bg-green-100	p-4 rounded-lg">
    <img
      src="${phone.image}"
      alt="Phone" />
  </figure>
  <div class="card-body">
     <h2 class="card-title my-1">${phone.name}</h2>
    <h2 class="my-1"><span class="font-semibold">Storage:</span>${phone?.mainFeatures?.storage}</h2>
    <h2><span class="font-semibold">Display Size:</span> ${phone?.mainFeatures?.displaySize}</h2> 
    <h2><span class="font-semibold">Chipset:</span> ${phone?.mainFeatures?.chipSet}</h2> 
    <h2><span class="font-semibold">Memory:</span> ${phone?.mainFeatures?.memory}</h2> 
    <h2><span class="font-semibold">Slug:</span> ${phone?.slug}</h2> 
    <h2><span class="font-semibold">Release Date:</span> ${phone?.others?.releaseDate}</h2> 
    <h2><span class="font-semibold">Brand:</span> ${phone?.brand}</h2> 
 <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-outline btn-accent">Close</button>
      </form>
    </div>
  </div>
</div>
    `;
    takeModal.appendChild(makeModal);
   my_modal_5.showModal();
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