import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'mostafiz'
      }
      console.log('life cycle a constructor');
    }

    // eslint-disable-next-line react/no-typos
    static getDerivedStatefromProps(){
        console.log('lifecycleA getderivedStateFromProps');
        return null
    }


    componentDidMount (){
        console.log('lifeCycleA componentDidMount');
    }


    shouldComponentUpdate(){
      console.log('lifeCycleA should ComponentUpdate');
      return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getComponentBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate');
    }

    changeState = ()=>{
      this.setState({
        name:'Codevolution'
      })
    }


  render() {
      console.log('Life cycleA render');
    return (
      <div>
           <div>
           Life cycle A
           </div>
           <button onClick={this.changeState}>Change State</button>
           <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA