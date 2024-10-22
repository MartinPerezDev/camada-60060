const products = [
  {
    id: "Grt223",
    name: "Remera Extreme",
    description: "",
    price: 400,
    stock: 10,
    image: ["/img/remera-h.jpg", "/img/remera-h-2.jpg", "/img/remera-h-3.jpg", "/img/remera-h-4.jpg"],
    category: "remeras"
  },
  {
    id: "Grt224",
    name: "Remera Fitz Roy",
    description: "",
    price: 420,
    stock: 4,
    image: ["/img/remera-m.jpg", "/img/remera-m-2.jpg", "/img/remera-m-3.jpg", "/img/remera-m-4.jpg"],
    category: "remeras"
  },
  {
    id: "Hff556",
    name: "Pantalon Dorian",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 720,
    stock: 5,
    image: ["/img/pantalon-h.jpg", "/img/pantalon-h-2.jpg", "/img/pantalon-h-3.jpg", "/img/pantalon-h-4.jpg"],
    category: "pantalones"
  },
  {
    id: "Hff557",
    name: "Pantalon Ambar",
    description: "",
    price: 620,
    stock: 17,
    image: ["/img/pantalon-m.jpg", "/img/pantalon-m-2.jpg", "/img/pantalon-m-3.jpg", "/img/pantalon-m-4.jpg"],
    category: "pantalones"
  },
  {
    id: "Wre442",
    name: "Zapatillas Cloudfield",
    description: "",
    price: 800,
    stock: 2,
    image: ["/img/zapatillas-m.jpg", "/img/zapatillas-m-2.jpg", "/img/zapatillas-m-3.jpg", "/img/zapatillas-m-4.jpg"],
    category: "zapatillas"
  },
  {
    id: "Wre443",
    name: "Zapatillas Space",
    description: "",
    price: 820,
    stock: 6,
    image: ["/img/zapatillas-h.jpg", "/img/zapatillas-h-2.jpg", "/img/zapatillas-h-3.jpg", "/img/zapatillas-h-4.jpg"],
    category: "zapatillas"
  },
]
/*
  const promesa = new Promise( (resolve, reject)=> {
    if(condicion){
      resolve("se resolvio")
    }else{
      reject("se rechazo")
    }
  })
*/

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout( ()=>{
      resolve(products)
    }, 2000 )
  })
}

export { getProducts }