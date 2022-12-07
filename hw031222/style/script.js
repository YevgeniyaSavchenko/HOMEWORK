const form = document.querySelector('.add_product'); 
const products_elem = document.querySelector('.products');


const products = [];


form.addEventListener('submit', event => { 
    event.preventDefault();
    const title = event.target.title.value; 
    const price = +event.target.price.value;
    const amount = +event.target.amount.value;
   
    products.push({title, price, amount});
    rerender()

    event.target.title.value='';
    event.target.price.value='';
    event.target.amount.value='';

  
});

function rerender() {
    products_elem.innerText = '';
   
    products.forEach(({title,price,amount}) => {
        const container = document.createElement('div');
        const title_elem = document.createElement('p');
        const price_elem = document.createElement('p');
        const total_price_elem = document.createElement('p');
        title_elem.innerText = title;
        price_elem.innerText = price;
        total_price_elem.innerText = `${price} X ${amount} = ${price * amount}`;

        container.append(title_elem,price_elem,total_price_elem);
        products_elem.append(container);
       
       
    })

    const total_sum = products.reduce((prev,{price, amount}) => prev + item.price * item.amount,0);

    const total_amount = products.reduce((prev, {amount})=>  prev + amount, 0);
    
    const total_sum_elem = document.querySelector('.order_info .total_sum')
    const total_amount_elem = document.querySelector('.order_info .total_amount')


    total_sum_elem.innerText = total_sum;
    total_amount_elem.innerText = total_amount;

    // console.log('total_sum: ', total_sum);
    // console.log('total_amount: ', total_amount);
    // console.log('=======');
}
    
  rerender()

