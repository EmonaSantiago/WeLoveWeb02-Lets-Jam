<script>
  import Navigation from "./navigation.svelte";
</script>

<body>
  <section id="Header">
    <Navigation />
    <img
      src="src/assets/MicrosoftTeams-image (1).png"
      alt="image"
      style="width: 100%"
    />
    <h1>WE 🤍 WEB</h1>
    <div class="text">
      <h3>Welkom bij FDND WE LOVE WEB!</h3>
      <p>
        Kom een sessie volgen waarin een designer/developer uit de praktijk iets
        komt vertellen en laten zien!
      </p>
    </div>
  </section>
</body>

<style>
  * {
    margin: 0;
    font-family: Open Sans, sans-serif;
    /* font-size: 1.2rem; */
  }

  body {
    margin: 10px;
    background-color: #050542;
    background-image: url("https://i.guim.co.uk/img/media/25735967b79b684a313445f010fb20af48dde538/0_80_2600_1560/master/2600.jpg?width=700&quality=85&auto=format&fit=max&s=c1d82a0d3b8b2e9ed5d75c2769fae1ca");
    background-repeat: repeat-y;
  }

  h1 {
    text-align: center;
    margin-bottom: 4em;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 1em;
  }

  .text {
    margin-left: 10px;
    margin-bottom: 15em;
  }

  #Header {
    height: 100%;
    color: white;
    text-align: center;
    text-align: left;
    border: solid #a675f5 3px;
    border-radius: 2em;
  }

  img {
    width: 100%;
    height: auto;
    filter: brightness(50%);
  }
</style>
