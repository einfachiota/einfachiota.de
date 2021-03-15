
<script>
 export let header = "";

 const DESCRIPTION="Beschreibung";
 const CONTACT_DETAILS="Contact";

 const { HEADING="Heading", ADDRESS="address", EMAIL="email", IMPRESSUM="Impressum" } = CONTACT_DETAILS;
</script>

<section class="footer" id="footer">
<layout>
<div class="section1">
    <div class="footer-title">Kurzlinks</div>
    <br/>
    <a href="https://einfachiota.de" class="link">Home</a>
    <br/>
    <a href="https://einfachiota.de/about" class="link">Über uns</a>
    <br/>
    <a href="https://einfachiota.de/blog" class="link">Blog</a>
</div>

<div class="section2">
  <div class="footer-title">Social</div>
   <br/>
   <a href="https://twitter.com/einfachiota" target="_blank" class="link">Twitter</a>
   <br/>
   <a href="https://discord.com/invite/eReFR9RzaN" target="_blank" class="link">Discord</a>
   <br/>
   <a href="https://t.me/einfachIOTA" target="_blank" class="link">Telegram</a>
</div>

<div class="section2">
    <div class="footer-title">Info</div>
    <br/>
    <a href="https://einfachiota.de/impressum" class="link">Impressum</a>
    </div>
</layout>
<br/>
<br/>
<br/>
      <center>einfachIOTA - IOTA einfach erklärt.</center>

</section>

<style>

layout {
    display: flex;
    flex-direction: row;
}
.section1 {
    padding-left: 25vw;
    margin-top: 45px;
}
.section2 {
    padding-left: 120px;
    margin-top: 45px;
}
.link {
    cursor: pointer;
    font-size: 1.4em;
    line-height: 1.5;
    text-decoration: none;
}
.link:hover {
    color: '#729FB5';
}

 .footer-title {
 font-weight: bold;
 text-transform: uppercase;
 font-size: 1.5rem;
 color: white;
 }

 @media (max-width: 900px) {
    layout {
      flex-direction: column;
    }
    .section1 {
        text-align: center;
        padding-left: 0;
    }
    .section2 {
        text-align: center;
        padding-left: 0;
    }
 }
</style>