//UperCamelCase
import "./NavBar.scss"

const NavBar=()=>{
    return(

        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Barra de Navegacion</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navb">
            <li class="nav-item active">
              <a class="nav-link active" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Sobre Nosotros</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar