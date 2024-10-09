const products = [
  {
    id: "Df2121",
    name: "Remera roja",
    description: "",
    stock: 10,
    price: 2000,
    image: "/img/remera-roja.webp",
    category: "remeras"
  },
  {
    id: "Gt2233",
    name: "Gorra Nike",
    description: "",
    stock: 2,
    price: 1000,
    image: "/img/gorra.jpeg",
    category: "gorras"
  },
  {
    id: "Mn22121",
    name: "Zapatillas verdes",
    description: "",
    stock: 5,
    price: 5000,
    image: "/img/zapatillas.jpeg",
    category: "zapatillas"
  }
]

/*
  const promesa = new Promise( (resolve, reject)=>{
    if(condicion){
      resolve("se resolvio la promesa")
    }else{
      reject("se rechazo la promesa")
    }
  })
*/

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export { getProducts }