
<svelte:head>
  <title>einfachIOTA</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1 class="hallo">Hallo!</h1>
    <p>Willkommmen bei einfachIOTA!</p>
    <p>Hier bekommst du alles rund um IOTA einfach erklärt!</p>
  </div>

  <figure>
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
  </figure>
</div>


<div class="second-container">
  <figure class="image2">
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
  </figure>
  <div div class="home-copy">
  <h1>Guides für Einsteiger</h1>
  <br />
  <p>
  <button class="buttons">Deutsch</button>
  <button class="buttons">Englisch</button>
  </p>
</div>
</div>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin:  0 auto;
    min-height: 90vh;
    padding: 1em 1em;
    max-width: 1400px;
  }
  .second-container {
    background-color: rgb(209, 238, 235);
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 100vh;
    min-width: 100%;
    padding: 1em 1em;
    margin:  0 auto;
  }

  .image2 {
    
    width: 100%;
    max-width: 400px;
    margin-left: 18vw;
  }

  .home-copy {
    flex: 1;
  }

  .buttons {
     background-color: rgb(243, 124, 124);
     border: 1px solid black;
     width: 12em;
     padding: 15px;
     margin: 15px;
     cursor: pointer;

  }

  .hallo {
    text-decoration: underline #00B8C5;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 250px;
    }
    .image2 {
    
    width: 100%;
    max-width: 250px;
    margin-left: 8vw;
  }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }
    .second-container {
      flex-direction: column;
      padding-top: 80px;
    }
    .image2 {
    margin-left: 0vw;
    }

    .buttons {
      margin: 10px
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>