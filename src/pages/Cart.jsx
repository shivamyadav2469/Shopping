import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-center mt-[1.8rem]">


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between p-4">

  <div className="mb-4">
    <div className="text-green-800 font-extrabold">Your Cart</div>
    <div className="text-green-900 text-3xl font-extrabold">Summary</div>
    <p>
      <span>Total Items: {cart.length}</span>
    </p>
  </div>

  <div className="mb-4">
    <p className="font-extrabold">Total Amount: ${totalAmount}</p>
    <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
      Check Out Now
    </button>
  </div>

</div>


    </div>) : 
    (<div className="flex flex-col items-center justify-center h-screen">
  <h1 className="text-2xl font-bold mb-3">Cart Empty</h1>
  <Link to={"/"}>
    <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
      Shop Now
    </button>
  </Link>
</div>)
  }

  <div className="bg-slate-900 mt-[21rem] h-14  ">
          <Footer/>
        </div>
    </div>
  );
};

export default Cart;
