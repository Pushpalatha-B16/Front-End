const pics=document.querySelectorAll(".pic");
const btn=document.querySelectorAll(".btn");
const search=document.querySelector("#search"); //box-pics
//serach a product
search.addEventListener("keyup",(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    pics.forEach(p=>{
        const data=p.dataset.item
        console.log(data);
        if(data.includes(searchText)){
            p.style.display="block";
        }else{
            p.style.display="None";
        }
         });
         btn.forEach((button)=>{
            button.classList.remove('clicked');
      
          });
         btn[0].classList.add('clicked')
        
        });
//
btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
e.preventDefault();  
setActiveBtn(e)                            //it remove default active and it follow whatever you defined here  
const btnFilter=e.target.dataset.filter;
pics.forEach(value=>{
    if(btnFilter=="all"){
      value.style.display="block";
    }else{
    const buttonFilter=value.dataset.item;
    if(btnFilter==buttonFilter){
        value.style.display="block";
    }else{
        value.style.display="none";
    }

    }

});


    });
});


function setActiveBtn(e){
    btn.forEach((button)=>{
      button.classList.remove('clicked');

    });
    e.target.classList.add('clicked');
}