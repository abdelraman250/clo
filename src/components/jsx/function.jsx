

export default function productscreating(filteringData,setshopcart,shopCart) {

function handleaddclick(product) {
  localStorage.setItem("items", JSON.stringify([...shopCart, product]));
  setshopcart(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
}

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Products</h1>
        <div className="divcard" id="divcard">
          {filteringData.map((product, index) => {
            return (
              <div className="p-3" key={index}>
                <img src={product.image} alt="bcbcb" />
                <h3>{product.category}</h3>
                <p>{product.price}$</p>
                <button
                  onClick={() => {
                    handleaddclick(product);
                  }}
                >
                  add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
}


export function shopingCartCreation(shopCart,setshopcart) {

  function handleDeleteButton(item) {
    const filteredarray = JSON.parse(localStorage.getItem("items")).filter((element) => {
      return element.id !== item;
    });
    localStorage.setItem("items", JSON.stringify(filteredarray));
    setshopcart(filteredarray);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>shoping cart {shopCart.length} </h1>
      <div className="divcard" id="divcard">
        {shopCart.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="bcbcb" />
              <h3>{item.category}</h3>
              <p>{item.price}$</p>
              <button
                onClick={() => {
                  handleDeleteButton(item.id);
                }}
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}