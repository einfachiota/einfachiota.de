<script>
  import BurgerMenu from 'svelte-burger-menu'

  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    text-transform: uppercase;
  }
  .burger {
    visibility: hidden;
    
  }
  @media only screen and (max-width: 700px) {
  nav {
    visibility: hidden;
  }
  .burger {
    visibility: visible; 
    z-index: 1000;
  }
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #00b7c5;
  }
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
  <a class='{segment === "pdw" ? "selected" : ""}' href='pdw'>Projekt der Woche</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>über uns</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>
<div class="burger">
<BurgerMenu padding={'50px'} width={'100%'} menuColor={'#fff'} backgroundColor={'#00b7c5'}>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
  <a class='{segment === "pdw" ? "selected" : ""}' href='pdw'>Projekt der Woche</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>über uns</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</BurgerMenu>
</div>
