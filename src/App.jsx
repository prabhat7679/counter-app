import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [ArrayItem, setArrayItem] = useState([
    { id: 1, count: 'Zero' },
    { id: 2, count: 'Zero' },
    { id: 3, count: 'Zero' },
    { id: 4, count: 'Zero' }

  ])

  const [cartCount, setCartCount] = useState(0);

  function incrementFn(event) {
    setArrayItem(
      ArrayItem.map((item) => {
        if (event.id === item.id) {
          if (event.count === 'Zero') {
            item.count = 0;
          }
          item.count += 1;
        }
        return item;
      }))
    increaseCartCount()

  }

  function decrementFn(event) {
    setArrayItem(
      ArrayItem.map((item) => {
        if (event.id === item.id) {
          if (item.count != 'Zero') {
            item.count -= 1;
          }
          if (item.count === 0) {
            item.count = 'Zero'
            setCartCount(cartCount - 1)
          }
        }
        return item;
      }))
  }

  function deletedFn(event) {
    setArrayItem(
      ArrayItem.filter((item) => {
        return item.id !== event.id;
      }))

    if (cartCount > 0) {
      setCartCount(cartCount - 1)
    }

  }

  function refresh() {
    let DataSet = ArrayItem.map((value) => {
      value.count = "Zero";
      return value;
    })
    setArrayItem(DataSet);
    setCartCount(0);
  }

  function reset() {
    console.log(ArrayItem.length)

    if (ArrayItem.length === 0) {
      const dataSet = [
        { id: 1, count: 'Zero' },
        { id: 2, count: 'Zero' },
        { id: 3, count: 'Zero' },
        { id: 4, count: 'Zero' }]

      return setArrayItem(dataSet);
    }
  }

  function increaseCartCount() {
    let cartCounted = ArrayItem.filter((item) => {
      return item.count > 0
    })
    setCartCount(cartCounted.length);
  }



  return (
    <div className='container'>
      <div className='header'>
        <div > <i className="fa-solid fa-cart-shopping btn"></i></div>
        <div className='mainCount m-2'> {cartCount}</div>
        <div>Items</div>
      </div>

      <div className="resetter">
        <button onClick={() => refresh()} className='btn btn-success m-2'>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button onClick={() => reset()} className='btn btn-primary m-2'>
          <i className="fa fa-recycle" aria-hidden="true"></i>
        </button>
      </div>

      <div className="cardItems">
        {ArrayItem.map((item, index) => {
          return (<div className="card" key={index}>

            <span class={(typeof (item.count) === "string" && "activeZero") || "deactiveZero"}>{item.count}</span>
            <button onClick={() => incrementFn(item)}><i className="fa-solid fa-plus btn"></i></button>
            <button onClick={() => decrementFn(item)}><i className="fa-solid fa-minus btn"></i></button>
            <button onClick={() => deletedFn(item)}><i className="fa-regular fa-trash-can btn"></i></button>
          </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default App;
