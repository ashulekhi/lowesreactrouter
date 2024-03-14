import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
      <div class="d-flex" role="search">
       <Link to="/login"> <button class="btn btn-success" >Login</button></Link>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar