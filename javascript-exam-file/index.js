const cart=[]

const  addToCart=(name,price)=>{
cart.push({name , price});
    updateProduct();
}

const updateProduct=()=>{

 const productList=   document.getElementById('product-list');
 
 const li= document.createElement('li');
 cart.forEach((data)=>li.textContent=`${data.name} - $${data.price}`);
 productList.appendChild(li)

const totalPrice= document.getElementById('totalPrice');

 const total= cart.reduce((prv , item)=> prv + item.price, 0)
 totalPrice.textContent=`Total price : ${total}` ;

}
