import React from 'react';

const ComponentProps = (props) => {

  const renderProp = () => {

    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }

	return(
	  <div className="componentsProps">
      <div className="ComponentsProps_head">
        <h2>Props</h2>
        <p>At it’s core, Bottom Navigation is based on a few basic components,
          than can be each styled individually in different ways.</p>
        <p>labelStyle, containerStyle will be send directly to the children
          , so it doesn’t need to be repeated in the code. If those props are specified on the children, then it will be all merged.</p>
      </div>
      <div className="ComponentsProps_body">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {renderProp}
          </tbody>
        </table>
      </div>
    </div>
	);
};


export default ComponentProps;
