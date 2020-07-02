import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const handleIconClick = () => {

  }

  return (
    <div className="App">
      <div className="container">
        <nav className="nav">
          <ul className="full-menu">
            <li><a href="/">Menu Item 1</a></li>
            <li><a href="/">Menu Item 2</a></li>
            <li><a href="/">Menu Item 3</a></li>
            <li><a href="/">Menu Item 4</a></li>
            <li><a href="/">Menu Item 5</a></li>
            <li><a href="/">Menu Item 6</a></li>
            <li><a href="/">Menu Item 7</a></li>
            <li><a href="/">Menu Item 8</a></li>
            <li><a href="/">Menu Item 9</a></li>
            <li><a href="/">Menu Item 10</a></li>
          </ul>
          <FontAwesomeIcon 
                className="hamburger-icon" 
                icon={faBars}
                onClick={handleIconClick} />
        </nav>
        <header>
          <h1>Responsive Design Example</h1>
        </header>
        <img className="photo" src="https://www.wallpaperup.com/uploads/wallpapers/2013/03/23/58282/932d61dff9271bdd8ea06a291cc0c6ca-700.jpg" alt="Foggy Morning" />
        <section className="intro">
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum tempus tempus. Vivamus viverra fringilla nisi, sit amet ornare magna viverra nec. Vivamus sed nisi a lectus porttitor facilisis. Aenean sem arcu, tristique vitae ligula at, euismod posuere mi. Donec vel placerat tortor, non sagittis odio. Aliquam erat volutpat. Donec non egestas enim. Nam blandit sem non auctor tempus. Donec sodales purus in metus fermentum, finibus euismod lacus vulputate.
          </p>
        </section>
        <article className="body">
          <h2>Main Content</h2>
          <p>
            Phasellus consequat risus sed ultrices mollis. Phasellus convallis convallis viverra. Donec fringilla risus enim, eget convallis leo vulputate eu. Nunc et vulputate lectus. Vivamus ligula urna, tincidunt bibendum accumsan id, blandit vel leo. Vestibulum id pellentesque tellus, id laoreet felis. In cursus porta sodales. Mauris laoreet lorem justo
          </p>
          <p>
            Suspendisse porta posuere mollis. Cras tincidunt, dolor eget pretium lobortis, mauris quam sollicitudin ex, vitae efficitur nibh nunc vitae orci. Aliquam semper enim at orci tincidunt, quis consectetur mauris rutrum. Quisque posuere mollis diam. Vestibulum nunc urna, eleifend ut justo et, sagittis placerat libero. Curabitur odio enim, egestas a enim a, accumsan gravida velit. Maecenas ut erat mollis, consectetur lectus nec, mattis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus accumsan fermentum egestas. Morbi risus massa, pulvinar sit amet ante ac, dignissim cursus arcu. Mauris et dui mattis, ornare elit sit amet, placerat urna. Vivamus ut fringilla lacus, non fermentum urna. Sed consequat eros ut vestibulum auctor.
          </p>
          <p>
            Vestibulum elementum dolor vel volutpat auctor. Vestibulum ac risus lectus. Nunc congue gravida sapien non ornare. Suspendisse ut facilisis quam. Curabitur feugiat malesuada orci id lacinia. Donec iaculis elit non volutpat cursus. Vivamus tincidunt diam ante, quis venenatis ligula pulvinar id. Praesent quis est in ante aliquet auctor.
          </p>
          <p>
            Maecenas et felis luctus, ullamcorper est a, semper metus. Donec accumsan mi sit amet ipsum rhoncus accumsan. Fusce in tempus purus, at eleifend lectus. Integer sodales rhoncus odio vel convallis. Pellentesque arcu nibh, euismod a dictum ut, varius vitae ipsum. Nulla dapibus nisl urna, eu tincidunt sem vulputate non. Sed dapibus tincidunt nisl, vitae luctus lacus vestibulum vitae. Nunc justo diam, vulputate a blandit non, bibendum eget enim. Curabitur malesuada massa sem, eget mattis ligula molestie efficitur. Pellentesque rhoncus consequat ex. Maecenas in vehicula orci, eget dignissim metus.
          </p>
          <p>
            Phasellus ultrices ligula sit amet odio ullamcorper viverra. Fusce tincidunt egestas gravida. Vestibulum pulvinar eleifend erat, ut vulputate dolor tempus in. Nullam sodales sapien quis fringilla sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante condimentum, interdum nunc auctor, congue urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempor neque turpis, vitae gravida purus faucibus eu. In porttitor ullamcorper erat, et tristique dolor vulputate vitae. In et mauris nisl.
          </p>
          <p>
            Phasellus consequat pharetra convallis. Aliquam a risus interdum, aliquam lacus et, tristique tellus. Praesent sit amet suscipit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci turpis, blandit sed neque eu, varius aliquet augue. Sed placerat purus vitae faucibus facilisis. Integer laoreet tincidunt felis id pharetra. Aenean finibus condimentum imperdiet. Sed eu hendrerit nunc, eu convallis tellus. Duis posuere tincidunt sem eget sodales. Ut condimentum condimentum mauris. Phasellus semper quis lectus ac efficitur. Donec nec porttitor mi. Praesent in mauris eget urna malesuada rhoncus. Integer eleifend scelerisque lacus non posuere. Donec facilisis odio ut posuere laoreet.
          </p>
        </article>
        <section className="related-links">
          <h4>Related Links</h4>
          <ul>
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
            <li><a href="/">Link 4</a></li>
          </ul>
        </section>
        <aside className="adpod1">
          <img src="https://via.placeholder.com/200" alt="Ad Pod 1"/>
        </aside>
        <aside className="adpod2">
          <img src="https://via.placeholder.com/200" alt="Ad Pod 2"/>
        </aside>
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    </div>
  );
}

export default App;
