import logo from './logo.svg';
import './App.css';
import LifeCycle from './Componets/LifeCycle/LifeCycle';
// import UserForm from './Componets/LifeCycle/RefExample/UserForm';
import UserForm from './Componets/LifeCycle/RefExample/HOOKS/UseRefExample/UserForm';
// import UseReducer from './Componets/LifeCycle/RefExample/HOOKS/UseReducer/UseReducer';
import Component1 from './Componets/PropDrilling/Component1';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Router/Home';
import Blogs from './Router/Blogs';
import Profile from './Router/Profile';
import Error from './Router/Error';
import Navbar from './Router/Navbar';
import Blog from './Router/Blog';
import User from './Router/User';
import Index from './Routes/Index';

import HoverCounter from './HOC/HoverCounter';
import ClickCounterTwo from './RenderProps/ClickCounterTwo';
import HoverCounterTwo from './RenderProps/HoverCounterTwo';

import Todo from './Hook/Todo';
import Form from './Hook/Form';
import Time from './Hook/Time';
import Counter from './Hook/Counter';
import ComplexCounter from './Hook/ComplexCounter';
import Layout from './Componets/Layout';
import LayoutTwo from './Componets/LayoutTwo';
import LifeCycleA from './lifeCycle/LifeCycleA';
import FragmentDemo from './FragmentDemo';
import PureComponent from './Componets/PureComponent1';
import ParComponent from './Componets/ParComponent';
import RefDemo from './Componets/RefDemo';
import FocusInput from './Componets/FocusInput';
import FRParentInput from './Componets/FRParentInput';
import PortalDemo from './Componets/PortalDemo';
import Hero from './Componets/Hero';
import ErrorBoundary from './Componets/ErrorBoundary';
import ClickCounter from './Componets/ClickCounter';
import HoverCounter2 from './Componets/HoverCounter2';
import PostList from './Componets/Axios/PostList';
import PostForm from './Componets/Axios/PostForm';
import HookCounter2 from './Hook2/HookCounter2';
import HookCounter3 from './Hook2/HookCounter3';
import MousePointer from './Hook2/MousePointer';
import MouseContainer from './Hook2/MouseContainer';
import IntervalHookCounter from './Hook2/IntervalHookCounter';
import DataFetching from './Componets/Axios/DataFetching';
import { UserProvider } from './Componets/Context/UserContext';
import ComponentA from './Componets/Context/ComponentA';
import React, { createContext } from 'react';
import DataFetchingOne from './Componets/Axios/DataFetchingOne';
import DataFetchingTwo from './Componets/Axios/DataFetchingTwo';
import CounterMemo from './Componets/CounterMemo/CounterMemo';
import RefHook from './Componets/Ref/RefHook';
import DocTitleOne from './Componets/CustomHook/DocTitleOne';
import DocTitleTwo from './Componets/CustomHook/DocTitleTwo';
import CountOne from './Componets/CustomHook/CountOne';
import CounterTwo from './Componets/CustomHook/CounterTwo';
import UserFrom from './Componets/CustomHook/UserFrom';
import UseState from './Componets/UseState/UseState';
import UseReducer from './Componets/UseReducer/UseReducer';
import ObjectUseState from './Componets/Immuable state/ObjectUseState';
import ArrayUseState from './Componets/Immuable state/ArrayUseState';
import Parent from './Componets/Parent Child/Parent';
import ParentOne from './Componets/Optimization/ParentOne';
import ChildOne from './Componets/Optimization/ChildOne';
import GrandParent from './Componets/Optimization/GrandParent';
import ParentTwo from './Componets/Optimization/ParentTwo';
import ParentThree from './Componets/Incorrect Optimization/ParentThree';
import ParentFour from './Componets/Incorrect Optimization/ParentFour';
import ContextParent from './Componets/Contextt/ContextParent';


export const UserName1 = React.createContext()
export const UserName2 = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar></Navbar>
      <Routes>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/:title' element={<Blog></Blog>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='*' element={<Error></Error>}></Route>

      </Routes>
     </BrowserRouter> */}

      {/* <Index></Index> */}


      {/* <ClickCounter></ClickCounter>
    <HoverCounter></HoverCounter> */}

      {/* <ClickCounterTwo></ClickCounterTwo>
<HoverCounterTwo></HoverCounterTwo> */}


      {/* <CounterTwo render={(count, incrementCount)=>{

    <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
    
    }}/>

    <CounterTwo render={(count, incrementCount)=>{<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}}/> */}

      {/* <Todo></Todo> */}

      {/* <Form></Form> */}
      {/* <Time></Time> */}

      {/* <Counter></Counter> */}
      {/* <ComplexCounter></ComplexCounter> */}
      {/* 
    <Layout></Layout>
    <LayoutTwo></LayoutTwo> */}


      {/* <LifeCycleA></LifeCycleA> */}

      {/* <FragmentDemo></FragmentDemo> */}
      {/* <ParComponent></ParComponent> */}
      {/* <RefDemo></RefDemo> */}
      {/* <RefDemo></RefDemo> */}
      {/* <FocusInput></FocusInput> */}

      {/* <FRParentInput></FRParentInput> */}

      {/* <PortalDemo></PortalDemo> */}

      {/* <ErrorBoundary>
        <Hero heroName={'Bat Man'}></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName={'Super Man'}></Hero>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName={'Joker'}></Hero>
      </ErrorBoundary> */}

 {/* <ClickCounter></ClickCounter>
 <HoverCounter2></HoverCounter2> */}

 {/* <PostList></PostList> */}
 {/* <PostForm></PostForm> */}

 {/* <HookCounter2></HookCounter2> */}
 {/* <HookCounter3></HookCounter3> */}
 {/* <MouseContainer></MouseContainer> */}

 {/* <IntervalHookCounter></IntervalHookCounter> */}
 {/* <DataFetching></DataFetching> */}

 {/* <UserName1.Provider value={'shifat'}>
     <UserName2.Provider value={'Rahman'}>
          <ComponentA></ComponentA>  
     </UserName2.Provider>
 </UserName1.Provider> */}


      {/* <DataFetchingOne></DataFetchingOne> */}
      {/* <DataFetchingTwo></DataFetchingTwo> */}
      {/* <CounterMemo></CounterMemo> */}

      {/* <RefHook></RefHook> */}
      {/* <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo> */}

      {/* <CountOne></CountOne>
      <CounterTwo></CounterTwo> */}


      {/* <UserFrom></UserFrom> */}
      {/* <UseState></UseState> */}
     {/* <UseReducer></UseReducer> */}
    {/* <ObjectUseState></ObjectUseState>
    <ArrayUseState></ArrayUseState> */}
{/* <Parent></Parent> */}
{/* <ParentOne>
  <ChildOne></ChildOne>
</ParentOne> */}

{/* <GrandParent></GrandParent> */}
{/* <ParentTwo></ParentTwo> */}
{/* <ParentThree></ParentThree> */}
{/* <ParentFour></ParentFour> */}
<ContextParent></ContextParent>
    
    </div>
  );
}

export default App;
