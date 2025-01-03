const Application = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "0 auto",
      }}
    >
        <h1>Application form</h1>
        <h5>Please fill the form</h5>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="name" value="Ananya" onChange={()=>{}} />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" />
      </div>

      <label htmlFor="jobLocation">Job Location:</label>
      {/* <label htmlFor="jobLocation">Name:</label> */}
      <select id="jobLocation" name="jobLocation">
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="GB">United Kingdom</option>
        <option value="IN">India</option>
        <option value="AU">Australia</option>
      </select>
      <label>
        <input type="checkbox" id="terms" name="terms" />I accept the terms and
        conditions
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Application;
