import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="sm:flex mt-4 border-b border-black p-4 w-[680px]">

<div className="sm:h-[180px] mb-4 sm:mb-0 sm:mr-4">
  <img
    src={item.image}
    className="h-full w-full object-contain"
    alt={item.title}
  />
</div>
  
    <div className="sm:ml-0 sm:mt-0 mt-4 mr-[8rem]">
      <h1 className="text-2xl sm:text-lg font-semibold">{item.title}</h1>
      <h1 className="text-gray-700 font-semibold text-md sm:text-sm text-left truncate w-80 mt-2">{item.description}</h1>
      <div className="flex justify-between items-center mt-2">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <div 
          onClick={removeFromCart}
          className="cursor-pointer bg-red-400 rounded-full p-2"
        >
          <MdDelete />
        </div>
      </div>
    </div>
  
  </div>
  
  
  );
};

export default CartItem;
