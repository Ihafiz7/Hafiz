import Display from "./Display"
import FrontPage from "./FrontPage"
import IntroPage from "./IntroPage"
import Project from "./Project"
const App = () => {
  return (
    <div>
      <section id="FrontPage">
        <FrontPage />
      </section>
      <section id="Intro">
        <IntroPage />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section>
        <Display />
      </section>
    </div>
  )
}

export default App