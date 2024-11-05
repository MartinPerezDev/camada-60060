import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

//en caso de que tengan un json
import data from "../data/data.json" assert { type: "json" }

const products = [
  {
    id: "Grt223",
    name: "Remera Extreme",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 400,
    stock: 10,
    image: "/img/remera-h.jpg",
    category: "remeras"
  },
  {
    id: "Grt224",
    name: "Remera Fitz Roy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 420,
    stock: 4,
    image: "/img/remera-m.jpg",
    category: "remeras"
  },
  {
    id: "Hff556",
    name: "Pantalon Dorian",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 720,
    stock: 5,
    image: "/img/pantalon-h.jpg",
    category: "pantalones"
  },
  {
    id: "Hff557",
    name: "Pantalon Ambar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 620,
    stock: 17,
    image: "/img/pantalon-m.jpg",
    category: "pantalones"
  },
  {
    id: "Wre442",
    name: "Zapatillas Cloudfield",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 800,
    stock: 2,
    image: "/img/zapatillas-m.jpg",
    category: "zapatillas"
  },
  {
    id: "Wre443",
    name: "Zapatillas Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
    price: 820,
    stock: 6,
    image: "/img/zapatillas-h.jpg",
    category: "zapatillas"
  },
]

const seedProducts = () => {
  const productsRef = collection(db, "products")
  data.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()