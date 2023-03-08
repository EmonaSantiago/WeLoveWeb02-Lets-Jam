<section id="section04" class="demo">
  <a href="#section05"><span />Scroll</a>
</section>

<div>
  <h2>Meld je hier aan!</h2>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input
      type="text"
      id="lname"
      name="lastname"
      placeholder="Your last name.."
    />

    <label for="country">We 🤍 Web sessie</label>
    <select id="country" name="country">
      <option value="">CSS</option>
      <option value="">Html</option>
      <option value="">Svelte</option>
    </select>

    <input type="submit" value="Submit" />
  </form>
</div>

<style>
  h2 {
    color: #050542;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: #050542;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #050542;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #a675f5;
  }

  div {
    border-radius: 0.5rem;
    background-color: #66e5bf;
    margin-bottom: 2rem;
    padding: 2rem;
  }
</style>
