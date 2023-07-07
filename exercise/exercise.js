const order = {
  customer: "Mario",
  address: "Via Monza 1",
  city: ""
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}


const okCity = order?.city;

if(okCity == false){
  console.log("City is required");
}

if(order?.city == false){
  console.log("City is required");
}