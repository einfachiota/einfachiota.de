<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  export let segment;
  import Cookies from './_cookies.svelte'
</script>

<Cookies />
<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }
  :global(:root){
   --primary: #00B8C5;
   --buttons: #fd6378;
   --buttons-secondary: #e75468;
}

  main {
    flex: 1;
    position: relative;
    background-color: white;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: 100vh;
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
  </footer>
</div>
