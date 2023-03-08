<script>
  import Navigation from "../components/navigation.svelte";
  import Header from "../components/1header.svelte";
  // import Sliders from "../components/sliders.svelte";
  import Upcoming from "../components/upcoming.svelte";
  import SignIn from "../components/sign-in.svelte";
  import Footer from "../components/footer.svelte";
  export let data;
  const { sessions } = data;
</script>

<!-- <Header /> -->

<Navigation />
<Header />
<!-- <Sliders /> -->
<h2>This week sessions</h2>

<section class="slider">
  <button class="slider__control prev"
    ><i class="fa-solid fa-chevron-left" /></button
  >
  <button class="slider__control next"
    ><i class="fa-solid fa-chevron-right" /></button
  >
  <div class="slider__container" data-multislide="true" data-step="4">
    {#each sessions as session}
      <div class="slider__item">
        <!-- <h3>DATUM</h3> -->
        <h3>{session.title}</h3>
        <img src="https://picsum.photos/id/521/700/700" alt="" width="100%" />
        <h3>{session.datetime}</h3>
        <p>{session.speaker}</p>
        <p>{session.short_description}</p>
        <button class="btn card_btn">{session.link}</button>
      </div>
    {/each}

    <script src="src/components/carousel.js"></script>
  </div>
</section>

<Upcoming />
<SignIn />
<Footer />

<!-- 
{#each sessions as session}
  <h2>{session.sessionId}</h2>
  <h2>{session.title}</h2>
  <h2>{session.speaker}</h2>
  <h2>{session.datetime}</h2>
  <h2>{session.location}</h2>
  <h2>{session.short_description}</h2>
  <h2>{session.description}</h2>
  <h2>{session.link}</h2>
{/each}

{#each sessions as session}
  <h2>{session.sessionId}</h2>
{/each}

{#each sessions as session}
  <h2>{session.title}</h2>
{/each}

{#each sessions as session}
  <h2>{session.speaker}</h2>
{/each}

{#each sessions as session}
  <h2>{session.datetime}</h2>
{/each}

{#each sessions as session}
  <h2>{session.location}</h2>
{/each}

{#each sessions as session}
  <h2>{session.short_description}</h2>
{/each}

{#each sessions as session}
  <h2>{session.description}</h2>
{/each}

{#each sessions as session}
  <h2>{session.link}</h2>
{/each}

<style>
  * {
    color: white;
  }
</style> -->
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
    font-size: 26px;
    font-weight: 700;
    margin: 2em;
    white-space: nowrap;
    padding-bottom: 13px;
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
    border: solid 2px #66e5bf;
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
