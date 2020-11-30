import React from "react";
import Background from "../../../src/puppy.jpeg"

function About() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid" style={{background: `url(${Background})`, height: "300px"}}
>
  <div className="container" >
    <h1 className="display-4">About Pupster</h1>
    
  </div>
</div>
      <p style={{ width: "80%", margin: "0 auto"}}>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
        Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
        pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
        tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
        metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
        Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
        Etiam vel condimentum magna, quis tempor nulla.
      </p>
    </div>
  );
}

export default About;
