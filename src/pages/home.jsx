import "../styles/home.css"
const Home = ()=> {
    return(
        <>
        <main>

        <div className="home">
        <header>
        <h1>Home</h1>
      </header>

        <div>
            Hello! My name is Mikel, I've made this web to show my knowledge in React dividing the different parts of the web into components. 
            It is a simple exercise of a web app that shows a list of photos taken from the API picsum. Although to display the information from the API I use <i>axios</i>, this time I've used <i>fetch</i>.
        </div>
        <div>
            I have used <strong>Vite</strong> and <strong>React</strong> to display the web and divided it into some components and two pages.
        </div>
        <div>
            If you are interested in more projects that I've made, you can check them out through my <a href="https://saymarportfolio.netlify.app/" target="blank_">portfolio</a>, or using the links below. Besides, you can contact me through LinkedIn or by email. 
        </div>
            Thank you!
        </div>
        </main>
        </>
    )
}
export default Home