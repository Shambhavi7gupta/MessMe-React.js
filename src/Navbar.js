import React from 'react';

function Navbar(){
    return(
        <header>
        <nav className = "nav">
        
        <h1>MessMe</h1>
        <ul className='nav-item'>
           <li>Home</li>
           <li>Product</li>
           <li>Faq</li>
           <li>Contact</li>
       </ul>
        </nav>     
    </header> 
    )
}
export default Navbar;