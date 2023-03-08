<h2>This week sessions</h2>

<section class="slider">
  <button class="slider__control prev"
    ><i class="fa-solid fa-chevron-left" /></button
  >
  <button class="slider__control next"
    ><i class="fa-solid fa-chevron-right" /></button
  >
  <div class="slider__container" data-multislide="true" data-step="4">
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>
    <div class="slider__item">
      <h3>DATUM</h3>
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
      <h3>HEY DIT IS EEN CARD</h3>
      <p>Een korte beschrijving van het kaart</p>
      <button class="btn card_btn">meer info...</button>
    </div>

    <script src="src/components/carousel.js"></script>
  </div>
</section>

<style>
  p,
  h3 {
    text-align: center;
    color: #a675f5;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  h2 {
    color: #a675f5;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin: 2em;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .slider {
    position: relative;
  }

  .slider__container {
    cursor: grab;
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
  }

  .slider__container.dragging {
    scroll-behavior: auto;
    cursor: grabbing;
  }

  .slider__container::-webkit-scrollbar {
    display: none;
  }

  .slider__item {
    padding: 16px 8px;
    flex: 0 0 auto;
    width: calc(100% / 5);
    /* border: solid #a675f5;
    border-width: 1px; */
    border-radius: 0.5rem;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 0.5rem;
  }

  .slider__container[data-step="4"] .slider__item {
    width: calc(100% / 4);
  }

  .slider__container[data-step="3"] .slider__item {
    width: calc(100% / 3);
  }

  .slider__container[data-step="2"] .slider__item {
    width: calc(100% / 2);
  }

  .slider__container[data-step="1"] .slider__item {
    width: calc(100% / 1);
  }

  @media screen and (max-width: 1024px) {
    .slider__item,
    .slider__container[data-step="4"] .slider__item {
      width: calc(100% / 3);
    }
  }

  @media screen and (max-width: 768px) {
    .slider__item,
    .slider__container[data-step="4"] .slider__item,
    .slider__container[data-step="3"] .slider__item {
      width: calc(100% / 2);
    }
  }
  @media screen and (max-width: 480px) {
    .slider__item,
    .slider__container[data-step="4"] .slider__item,
    .slider__container[data-step="3"] .slider__item,
    .slider__container[data-step="2"] .slider__item {
      width: calc(100% / 1);
    }
  }

  .slider__control {
    font-size: 16px;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #000;
    background: #fff;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s;
  }

  .slider__control.prev {
    left: 16px;
  }

  .slider__control.next {
    right: 16px;
  }

  .slider__control:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.2);
  }

  .slider__item img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
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
</style>
