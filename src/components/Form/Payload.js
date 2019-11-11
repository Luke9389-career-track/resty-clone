import React from 'react';

const Payload = () => {
  return (
    <section className="payload">
      <div id="body">
        <textarea placeholder="Raw JSON Body" name="requestBody"></textarea>
      </div>
      <div id="headers">
        <button>Headers</button>
        <div>
          <h2>Basic Authorization</h2>
          <input name="authusername" placeholder="Username"></input>
          <input name="authpassword" placeholder="Password"></input>
        </div>
        <div>
          <h2>Bearer Token</h2>
          <input type="text" name="authtoken" placeholder="Bearer Token"></input>
        </div>
      </div>
    </section>
  );
};

export default Payload;
