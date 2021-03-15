<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #AAA;
    background-color: rgb(50, 51, 51);
    font-size: 1em;
    font-family: Rubik, sans-serif;
    width: 100%;
    padding: 1em 2em;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <Footer />
    <span>
      <br/>
      <center>einfachIOTA - IOTA einfach erklärt.</center>
    </span>
  </footer>
</div>
