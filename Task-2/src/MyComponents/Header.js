import React from 'react'

const Header = ({ onSetIsClicked }) => {
  const clicked = () => {
      onSetIsClicked(1);
    document.getElementById("titleNavbar").innerHTML= "User Data from the API";
}

  return (
    <div>
    <nav class="navbar">
    
<h1>logo</h1>     
<ul> 
<li className="nav-item lia"><a href="#">Home</a></li>
<li className="nav-item lia "><a href="#">Services</a></li>
<li className="nav-item lia"><a href="#">About</a></li>

        <li className="nav-item">
          <a className="nav-link"href="#"> <button onClick={clicked} className="getUser "><span>Get Users</span></button> </a>
        </li>
        
        </ul>
</nav>      
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,250.7C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

<center><h3 id="titleNavbar">Click Button to load data</h3></center>

</div>
  )
}
export default Header;

