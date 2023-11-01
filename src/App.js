import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './components/ListItem/ListItem';
import PostItem from './components/PostItem/PostItem';
const dataItemList = {
  name: "Mesa",
  price: "$500.000",
  description: "Mesa 4 patas Madera",
  quantity: "1",
  urlPhoto:"https://th.bing.com/th/id/OIP.1SLo3vAsngdphKr8ZbKzfQHaHa?pid=ImgDet&rs=1"
};
function App() {

  const[itemList, setItemList] = React.useState(dataItemList);
  const [list, setList] = React.useState([dataItemList]);
  return (
    <div className="App">
      <PostItem setList={setList}/>
      {
        list.map((item) =>
          <ListItem name = {item.name} 
                  urlPhoto = {item.urlPhoto} 
                  price = {item.price} 
                  quantity = {item.quantity} 
                  description = {item.description}
                  setDataItem={setItemList}/>
                )
      }
    </div>
  );
}

export default App;
