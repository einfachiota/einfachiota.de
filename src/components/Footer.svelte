
<script>
 export let header = "";

 const DESCRIPTION="Beschreibung";
 const CONTACT_DETAILS="Contact";

 const { HEADING="Heading", ADDRESS="address", EMAIL="email", IMPRESSUM="Impressum" } = CONTACT_DETAILS;
</script>

<section class="footer" id="footer">
 <div class="container">
 <div class="row section-body">
 <div class="col-md-4 footer-box">
 <div class="company_brand">{header}</div>
 <p>{DESCRIPTION}</p>
 </div>
 <div class="col-md-4 footer-box">
 <p class="footer-title">{HEADING}</p>
 <p>
 {ADDRESS}
 </p>
 <p>
 {EMAIL}
 </p>
 </div>
 <p>{IMPRESSUM}</p>
 </div>
 </div>
</section>

<style>

 .footer-title {
 font-weight: bold;
 text-transform: uppercase;
 }
</style>