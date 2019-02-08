import React from "react";
import "./UserOutput.css";

const output = props => {
  return (
    <div>
      <p className="UserOutput">
        {props.name}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque in lacus turpis. Mauris maximus dui vitae lectus viverra
        interdum ac et orci. Proin tincidunt sit amet libero quis sollicitudin.
        Cras fermentum vitae velit eget finibus. Donec dictum molestie nisl sed
        consequat. Nulla molestie lacus non turpis convallis ultricies. Praesent
        ornare efficitur eros ac congue. Mauris velit mi, posuere vel mollis in,
        euismod non quam. Nam cursus ligula eget libero finibus vulputate.
        Vivamus eget nisl sit amet elit sagittis luctus a in erat.
      </p>
      <p className="UserOutput">
        Integer vel lobortis magna. Fusce vestibulum diam sit amet pretium
        elementum. In dignissim arcu non ligula maximus euismod. Curabitur diam
        arcu, cursus ac lectus vitae, posuere ultrices ex. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla mattis libero semper, lobortis ex in, rhoncus ligula. Fusce quis
        urna massa. Nam viverra, ante a sodales gravida, ex quam posuere est, ac
        consectetur ipsum sapien ut mauris. Maecenas volutpat, justo vel
        vulputate consequat, lacus mi suscipit dui, in vulputate arcu risus ac
        ipsum. Etiam imperdiet arcu tempus, commodo mi ut, tincidunt velit.
        Praesent elementum libero vitae ultricies placerat. Suspendisse
        elementum porta massa, in egestas diam cursus vitae.
      </p>
    </div>
  );
};
export default output;
