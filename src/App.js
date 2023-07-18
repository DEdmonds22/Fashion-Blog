import articles from "./data";
import Header from "./components/Header"
import Nav from "./components/Nav";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  const article = articles.map((element, index) => {
    return (
      <Article 
      key={index} 
      date={element.date} 
      title={element.title} 
      img={element.img} 
      text={element.text} />
    )
  })

  return (
    <div>
      <Header />
      <Nav />
      {article}
      <Footer />
    </div>
  )
}

export default App;

/*
data has 2 objects in 1 array: date, title, img, and text
*/
