import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'mostafiz'
      }
      console.log('life cycle B constructor');
    }

    // eslint-disable-next-line react/no-typos
    static getDerivedStatefromProps(){
        console.log('LifeCycleB getderivedStateFromProps');
        return null
    }


    componentDidMount (){
        console.log('LifeCycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB should ComponentUpdate');
        return true;
      }
  
  
      getSnapshotBeforeUpdate(prevProps, prevState){
          console.log('LifeCycleB getComponentBeforeUpdate');
          return null;
      }
  
      componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
      }
  


  render() {
      console.log('Life cycleA render');
    return (
      <div>
            Life cycle B
      </div>
    )
  }
}

export default LifeCycleB