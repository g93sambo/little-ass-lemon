
import "./App.css"
function Nav(){
return(
     <div class="flex flex-row h-24 ml-16" >

<img src={require('./header-logo.png')} alt="cold" class="w-1/6 h-24" />

<ul class="flex flex-row  ">
    <li  ><a>Home  </a></li>
    <li><a>About</a></li>
    <li><a>Menu</a></li>
    <li><a>Reservation</a></li>
    <li><a>Order Online</a></li>
    <li><a>Login</a></li>
</ul>

 </div>
);
}
export default Nav;
