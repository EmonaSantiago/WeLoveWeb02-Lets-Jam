<head>
  <title>My awesome website</title>
</head>

<body>
  <section class="hero">
    <div class="hero-inner">
      <h1>My awesome website</h1>
      <h2>Look at this website and bask in its amazing glory!</h2>
      <a href="https://example.com/" class="btn">Go ahead...</a>
    </div>
  </section>
</body>

<style>
  body {
    margin: 0;
  }
  .hero {
    /* Sizing */
    width: auto;
    height: 100vh;

    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Text styles */
    text-align: center;
    color: white; /* ADD THIS LINE */

    /* Background styles */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .hero h1 {
    /* Text styles */
    font-size: 5em;

    /* Margins */
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;

    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

    /* Text styles */
    color: white; /* CHANGE THIS LINE */
    text-decoration: none;
    font-size: 1.5em;

    /* Border styles */
    border: 3px solid white; /* CHANGE THIS LINE */
    border-radius: 20px;
  }
</style>
