var productItems = document.querySelectorAll(".card")
var producttext= document.querySelector(".card-info")
var opencart =document.querySelector('#openshop')
var closecart =document.querySelector('#closeshop')
var storelist= document.querySelector('.shopping-list')
var store= document.querySelector(".shopping-cart")
var totalPrice = document.querySelector("#total-price")
var totalshow = document.querySelector(".show-total")
var total=0

opencart.onclick= function(){
    store.style.display = "block";
}
closecart.onclick= function(){
    store.style.display = "none";
}



productItems.forEach(function(item){
   item.onclick = function(){
        total += parseInt(item.getAttribute("price"))
        console.log(total)
        storelist.innerHTML +=item.getAttribute('name')
        storelist.innerHTML += item.getAttribute('price')
        if (store.innerHTML != ""){
            store.style.display = "block";
        }
    }
})

totalPrice.onclick=function(){
    totalshow.innerHTML= total
}


