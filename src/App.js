import logo from './logo.svg';
import './App.css';
import project from './project-1.jpg';
import project2 from './project-2.jpg';
import project3 from './project-3.jpg';
import project4 from './project-4.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ode Miller</h1>
        <h3>Software Engineer in Atlanta</h3>
        <p>{'{ pause and ponder }'}</p>
        </div>
        
        <hr/>

        <div class="about-grid">
				<div class="i-am">
					<h2>  I am</h2>
					<ul class="about-list">
						<li class="about-list-item">An engineer</li>
						<li class="about-list-item">A reader</li>
						<li class="about-list-item">A practicing cook</li>
					</ul>
				</div>
				<div class="i-like">
					<h2> I like</h2>
					<ul class="about-list">
						<li class="about-list-item">Meet new people</li>
						<li class="about-list-item">Play video game</li>
						<li class="about-list-item">Eat icecream</li>
					</ul>
				</div>
			</div>

      <hr/>

      <div>
				<h3 class="projects-heading">My Projects</h3>
				<div class="projects-grid">
					<div class="project-image-wrapper">
						<img  src={project}/>
						<h4>Project 1</h4>
					</div>

					<div class="project-image-wrapper">
						<img class="project-image" src={project2}/>
						<h4>Project 2</h4>
					</div>
					<div class="project-image-wrapper">
						<img class="project-image" src={project3}/>
						<h4>Project 3</h4>
					</div>
					<div class="project-image-wrapper">
						<img class="project-image" src={project4}/>
						<h4>Project 4</h4>
					</div>
				</div>
			</div>

			<hr/>

      
      </header>
    </div>
  );
}

export default App;
