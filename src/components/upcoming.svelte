<section id="section03" class="demo">
  <a href="#section04"><span />Scroll</a>
</section>
<div class="main">
  <h2>Upcoming sessions</h2>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=10" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=5" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=11" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=14" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=17" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://picsum.photos/500/300/?image=2" />
        </div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">meer info...</button>
        </div>
      </div>
    </li>
  </ul>
</div>

<style>
  /* Design */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h2 {
    color: #a675f5;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin: 2em;
  }

  h3 {
    color: white;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 0.5rem;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid #050542;
    background: transparent;
  }

  .btn:hover {
    background-color: #66e5bf;
    color: #050542;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards_item {
    display: flex;
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

  .card {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: #a675f5;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card_content {
    padding: 1rem;
    /* background: linear-gradient(to bottom left, #a675f5 40%, #66e5bf 100%); */
    background-color: #a675f5;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
  }

  .card_title {
    color: #050542;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
</style>
