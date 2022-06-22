import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import dbConnect from '../lib/dbConnect';
import Product from '../models/Product';



export default function Home({ products }) {
  const abc = JSON.parse(products)
  const xyz = abc.pizzaList
  {
    xyz.map((item, i) => {
      console.log(item.title)
    })
  }
  return (
    <>
      {xyz.map((item) => (<h1 key={item._id}>{item.title}</h1>))}
      <Featured />
      <PizzaList />

    </>
  )
}


const getProducts = async function () {
  await dbConnect();
  const res = await Product.find();

  return { pizzaList: res }
}


export async function getStaticProps() {
  const products = await getProducts();
  // console.log(products);
  return {
    props: {
      products: JSON.stringify(products)
    }
  }
}

