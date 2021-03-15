
<script>
 export let header = "";

 const DESCRIPTION="Beschreibung";
 const CONTACT_DETAILS="Contact";

 const { HEADING="Heading", ADDRESS="address", EMAIL="email", IMPRESSUM="Impressum" } = CONTACT_DETAILS;
</script>

<section class="footer" id="footer">
<layout>
<div class="section">
<div class="footer-title">Social</div>
<br/>
<a href="https://twitter.com/einfachiota" target="_blank" class="link">Twitter</a>
<br/>
<a href="https://twitter.com/einfachiota" target="_blank" class="link">Discord</a>
</div>
<div class="section">
<div class="footer-title">Über uns</div>
<br/>
<a href="https://einfachiota.de/impressum" class="link">Impressum</a>
</div>
</layout>
<br/>
<br/>
      <center>einfachIOTA - IOTA einfach erklärt.</center>

</section>

<style>

layout {
    display: flex;
    flex-direction: row;
}
.section {
    padding-left: 25vw;
    margin-top: 45px;
}
.link {
    cursor: pointer;
    font-size: 1.4em;
    line-height: 1.5;
    text-decoration: none;
}
.link:hover {
    color: white;
}

 .footer-title {
 font-weight: bold;
 text-transform: uppercase;
 font-size: 1.5rem;
 }

 @media (max-width: 800px) {
    layout {
      flex-direction: column;
    }
    .section {
        text-align: center;
        padding-left: 0;
    }
 }
</style>