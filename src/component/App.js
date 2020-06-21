import React from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './Search/Search';
import ItemsList from './ItemsList/ItemsList';
import Detail from './Details/Detail';
import Category from './Category/Category';
import XPress from '../utils/Xpress';
import Landing from './Landing/Landing';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      xpressGetResults: [],
      currentProduct: {},
      currentPath: {}
    }
    this.xpressGetItems = this.xpressGetItems.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
  }

  xpressGetItems (term, subUrl) {
    //console.log('xpress')
    XPress.getItems(term, subUrl).then(results => {
      this.setState (
          {xpressGetResults: results}
      )
  })
  }


  changeCurrentProduct (currentProduct) {
    this.setState ( {currentProduct: currentProduct} )
  }

  render () {
    return (
      <Router>
         <div className = "component">
          
          <Search xpressGetItems = {this.xpressGetItems} />
          <hr />
          <Landing xpressGetItems = {this.xpressGetItems} 
            changeCurrentPath = {this.changeCurrentPath}/>
          <hr />
          <div className = "app">
           
            <Switch>
              <Route exact path = '/'>
                <h3>Home</h3>
              </Route>

              <Route path = '/search/:term' render = {(props) => 
                <ItemsList 
                  {...props} 
                  items = {this.state.xpressGetResults} 
                  currentPath = {this.state.currentPath}
                  changeCurrentProduct = {this.changeCurrentProduct} />
              } />

              <Route path = '/c/:cat/:subCat1?/:subCat2?' component = {Category} />


            
                
              <Route path = '/product/:id' render = {(props) => 
                <Detail 
                  {...props} 
                  product = {this.state.currentProduct} 
                  currentPath = {this.state.currentPath}
                  changeCurrentPath = {this.changeCurrentPath} />
              } />
              
            </Switch>
            
          </div>
          
          
        </div>
      </Router>
       
      
    )

  }
}


export default App;
