import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <header id="home" class="header" >
        <div class="overlay"></div>
        <div class="header-content container" className="d-flex justify-content-center align-items-center vh-100"></div>
        <div className="d-flex justify-content-center align-items-center vh-100 ">
<button type="button" style={{width:'300px',height:'50px', backgroundColor:'black'}} className="btn btn-primary mx-3 ">Newspaper</button>
<button type="button" style={{width:'300px',height:'50px', backgroundColor:'black'}} className="btn btn-success mx-3">Notes</button>
<button type="button" style={{width:'300px',height:'50px', backgroundColor:'black'}} className="btn btn-danger mx-3">Premium Pdfs</button>
</div>

</header>
    </div>
  );
}

