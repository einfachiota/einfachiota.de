
<script>
 export let header = "";
 export let segment;


 const  YOUTUBE="https://www.youtube.com/channel/UClEhfr5oh-bbH42XoXO4Pqw/videos", 
        TELEGRAM="https://t.me/einfachIOTA", 
        DISCORD="https://discord.com/invite/eReFR9RzaN", 
        TWITTER="https://twitter.com/einfachiota",

        HOME="/",
        ABOUT="about",
        BLOG="blog";

</script>

<section class="footer" id="footer">

<layout>

 <div class="section1">
   <div class="footer-title">Kurzlinks</div>
     <br/>
     <a href={HOME} class="link">Home</a>
     <br/>
     <a href={ABOUT} class="link">Über uns</a>
     <br/>
     <a href={BLOG} class="link">Blog</a>
 </div>

 <div class="section2"> 
   <div class="footer-title">Social</div>
    <br/>
    <a href={TWITTER} target="_blank" class="link">Twitter</a>
    <br/>
    <a href={DISCORD} target="_blank" class="link">Discord</a>
    <br/>
    <a href={TELEGRAM} target="_blank" class="link">Telegram</a>
    <br/>
    <a href={YOUTUBE} target="_blank" class="link">Youtube</a>
 </div>

 <div class="section3">
   <div class="footer-title">Info</div>
     <br/>
     <a class='{segment === "impressum" ? "selected" : ""}' href='impressum' id="link">Impressum</a>
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
.section3 {
    padding-left: 120px;
    margin-top: 45px;
}
#link {
    cursor: pointer;
    font-size: 1.4em;
    line-height: 1.5;
    text-decoration: none;
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