
<script>
  import Cookies from './_cookies.svelte'
</script>


<Cookies />

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
    <img alt='Person typing on laptop' src='Teacher.svg'>
  </figure>
</div>


<div class="second-container">
   <div class="second-container-content">
    <figure class="image2">
      <img alt='Guide' src='Guide.svg'>
    </figure>

    <div div class="home-copy">
      <h1>Guides für Einsteiger</h1>
      <p>Unsere Mitglieder Schmucklos und Globoxx haben 
      umfassende Guides für euch zusammengestellt.</p>
      <br />
     
       <a href="https://iota-einsteiger-guide.de/inhaltsverzeichnis.html" target="_blank" id="link"><button class="buttons">Deutsch</button></a>
       <a href="https://www.iota-beginners-guide.com" target="_blank" id="link"><button class="buttons">Englisch</button></a>
     </div>
</div>
</div>

<div class="third-container">
  <div class="home-copy">
    <h1 class="hallo">Ich möchte eine Node!</h1>
    <p>Hier ist unser Guide für Node- tutorials!</p>

    <a href='nodesoftware' id="link"><button class="buttons">Übersicht</button></a>
  </div>

  <figure class="image3">
    <img alt='Server' src='Server.svg'>
  </figure>
</div>

<div class="second-container">
  <div class="second-container-content">
   <figure class="image2">
     <img alt='Stammtisch' src='Stammtisch.svg'>
   </figure>

   <div div class="home-copy">
     <h1>Stammtisch</h1>
     <p>Wir veranstalten Wöchentlich einen "Voice-Stammtisch" auf 
        unserem Discord Server, mit weit über 100 Teilnehmern.</p>
     <br />
    
      <a href="https://discord.com/invite/eReFR9RzaN" target="_blank" id="link"><button class="buttons">zum Server</button></a>
    </div>
</div>
</div>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin:  0 auto;
    min-height: 78vh;
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
    max-width: 100%;
    padding: 1em 1em;
  }
  .second-container-content {
    max-width: 1400px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 1em 1em;
  }
  .third-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin:  0 auto;
    min-height: 100vh;
    padding: 1em 1em;
    max-width: 1400px;
  }
  .home-copy {
    flex: 1;
  }

  .buttons {
     background-color: rgb(243, 124, 124);
     border: 1px solid transparent;
     width: 12em;
     padding: 15px;
     margin: 15px;
     cursor: pointer;
     font-family: Arial, Helvetica, sans-serif;
     font-size: large;
     border-radius: 5px;

  }
  .buttons:hover {
    background-color: rgb(221, 99, 99);
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
  .image2 {
    
    width: 100%;
    max-width: 400px;
  }
  .image3 {
    
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
    max-width: 250px;
  }
    .image3 {
    max-width: 250px;
  }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }
    .second-container {
      flex-direction: column;
      padding: 1em 1em;
      min-height: 105vh;
    }
    
    .image2 {
    max-width: 180px;
    margin-top: 50px;
    }
    .second-container-content {
      flex-direction: column;
      padding: 1em 1em;

    }
    .third-container {
      flex-direction: column;
    }
    .buttons {
      margin: 5px;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>