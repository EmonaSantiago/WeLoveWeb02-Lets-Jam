<h2>This Week ----------</h2>

<section class="slider">
  <button class="slider__control prev"
    ><i class="fa-solid fa-chevron-left" /></button
  >
  <button class="slider__control next"
    ><i class="fa-solid fa-chevron-right" /></button
  >
  <div class="slider__container" data-multislide="true" data-step="4">
    <div class="slider__item">
      <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/522/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/523/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/524/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/525/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/526/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/527/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/528/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/529/700/700" alt="" width="100%" />
    </div>
    <div class="slider__item">
      <img src="https://picsum.photos/id/530/700/700" alt="" width="100%" />
    </div>
  </div>
  <script src="src/components/carousel.js"></script>
</section>

<style>
  h2 {
    color: #a675f5;
    margin-bottom: 1em;
    margin-left: 2em;
    margin-top: 1em;
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

  img {
    border-radius: 2em;
  }
</style>
