import React from "react";
import './App.js';
import'./App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './componentsPag/NavBar/Navbar';
import Home from "./componentsPag/Home/Home.js";
import MiddlePag from "./componentsPag/MiddlePagr/MiddlePag";
import Form from "./componentsPag/Form/Form.js";
import AposForm from "./componentsPag/AposForm/AposForm";
import FimForm from "./componentsPag/FimForm/FimForm";
import './Form.css';


export default function App(){
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <MiddlePag />
        <Form />
        <AposForm />
        <FimForm /> 
      </main>
    </>
  )

}