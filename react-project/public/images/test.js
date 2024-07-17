import React, { Component, createFactory, useState } from 'react';


function Test(){
  const productsList = useSelector((state) => state.products.products)
    return (
      <div id="allProducts">
      </div>
    );
  }

export default Test;