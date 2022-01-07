import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/table";
import Table2 from "./components/table2";



class App extends React.Component{
  render(){
    return(
      <div className="container">
      <Header/>
      <Table2/>
      <Body/>
      </div>
    )
  }
}

export default App