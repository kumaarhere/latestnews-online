const dotenv=require('dotenv');
import './App.css';
import logo from './news.png';
import toTop from './p-arrow.png';


function items(event){document.getElementById("breadcrumb");
 if(event.target.tagName==='LI'){
   const topics=event.target.getAttribute("topic");
   getnews(topics)
 }
}
function getnews(topics){
  let selectElement = document.getElementById('lang');
  let lang=selectElement.value;
  let about=lang;
  if(!about){
    about=topics;
  }
  v
   fetch(`https://newsapi.in/newsapi/news.php?key=${dotenv.process.React-API-KEY}&category=${about}`)
   .then((res)=>res.json())
   .then((data)=>{

    let mainDiv=document.getElementById("mainDiv");
    mainDiv.innerHTML=""; 

  
      for (let news of data.News) {
        create(news);
      }
      
    document.getElementById("backToTOp").style.display = "block";
   });
  }
   

  function create(news){
  let mainDiv=document.getElementById("mainDiv");
   let newDiv=document.createElement("div");
   newDiv.classList.add("container", "news-area","card","mb-3");
   newDiv.id="area";
   mainDiv.appendChild(newDiv);

   let image=document.createElement("img");
   image.classList.add("card-img-top","mt-2","img-fluid");
   image.setAttribute("height","450px");
   image.id="img";
   image.setAttribute("alt","img1");
   image.setAttribute("src",news.image);
   newDiv.appendChild(image);
   
   let btn = document.createElement("button");
   btn.id = "top";
   btn.addEventListener('click', () => window.scrollTo(0, 0));
   let icon = document.createElement("img");
   icon.src = toTop;
   icon.id = "backToTOp";
   icon.alt = "top";
   btn.appendChild(icon);
   newDiv.appendChild(btn);
   

   let inDiv=document.createElement("div");
   inDiv.classList.add("card-body");
   newDiv.appendChild(inDiv)


   let head=document.createElement("h2");
   head.id="Heading";
   head.classList.add("text-dark", "fw-bold","card-title","mb-3");
   head.textContent=news.title;
   newDiv.appendChild(head);


   let content=document.createElement("h5");
   content.id="news";
   content.classList.add("card-text")
   content.textContent=news.description;
   newDiv.appendChild(content);



   let readmore=document.createElement("a");
   readmore.id="hyper";
   readmore.classList.add("text-body-primary","card-text","text-decoration-none","d-flex","justify-content-end");
   readmore.setAttribute("href",news.url);
   readmore.textContent="Read More...";
   newDiv.appendChild(readmore);

  }





function App() {
  return (
    <div className='container mt-1'>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <h2 className="navbar-brand fw-bold mx-5"><img className="logo" src={logo} alt="NewsOnline"></img><a href="replace" className='text-decoration-none text-dark fw-5'>𝓝𝓮𝔀𝓼𝓞𝓷𝓵𝓲𝓷𝓮</a></h2>
      <form className="d-flex " role="search">
   <div className="btn-group ">
   <select className="bg-danger text-white px-3" id="lang">
  <option value="telugu">తెలుగు</option>
  <option value="hindi">हिंदी</option>
  <option value="tamil">தமிழ்</option>
  </select>
    
   <button className="btn btn-primary text-white fw-bold px-4"id="getnews" type="button" onClick={getnews}>Get News</button>
   </div>
        
      </form>
    </div>
  </nav>

<div id="mainDiv">
  <div className="card mb-3 mt-3 container news-area" id="area">
  <img src="https://img.freepik.com/free-vector/breaking-news-template_23-2148507392.jpg?size=626&ext=jpg" className="card-img-top mt-2 img-fluid"height="450px"id="img" alt="img1"></img>
  <div className="card-body">
    <h2 className="card-title text-dark fw-bold mb-3" id="Heading">
    <ul class="breadcrumb bg-light" onClick={items}>
    <li className="breadcrumb-item text-primary" topic="telugu">Telugu</li>
    <li className="breadcrumb-item text-primary" topic="hindi">Hindi</li>
    <li className="breadcrumb-item text-primary" topic="tamil">Tamil</li>        
  </ul>
  </h2>
    <h5 className="card-text" id="news">News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.</h5>
    <a href="https://kumaarhere.netlify.app/" id="hyper" className="text-body-primary card-text text-decoration-none d-flex justify-content-end"><span className="text-secondary">&copy;</span>҉K҉҉M҉҉R҉</a>
  </div>
  <button type="button" id="top"><img src={toTop} id="backToTOp"  alt="top"></img></button>
</div>
</div>
  </div>
  );
}

export default App;
