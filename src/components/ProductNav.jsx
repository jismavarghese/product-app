import React from 'react'
import { Link } from 'react-router-dom'

const ProductNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PRODUCT-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">ADD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">SEARCH</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">DELETE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">VIEW</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default ProductNav