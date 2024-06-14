import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <div id="cart">
      <FaShoppingCart color="white" size={30} />
      <span 
        style={{
          position: 'absolute',
          top: '25px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
          fontSize: '12px'
        }}
      >
        5
      </span>


    </div>
  );
};

export default CartWidget;