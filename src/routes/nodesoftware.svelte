 
  <script>
    export let segment;

    const  TELEGRAM="https://t.me/einfachIOTA", 
           DISCORD="https://discord.com/invite/eReFR9RzaN";
  </script>
  
  <svelte:head>
    <title>Nodesoftware</title>
  </svelte:head>
  
  <div class="container">
    <br />
    <h1>Ich möchte eine Node aufsetzen!</h1>
   </div>

   <p>
    Wer plant eine Node aufzusetzen, der wird erst einmal erschlagen von der fülle an 
    Anleitungen die es mittlerweile schon gibt - oftmals sind diese bereits nichtmal mehr aktuell.
    Mit dieser Übersicht wollen wir dir bei der suche nach einer Geeigneten Lösung etwas unter die Arme greifen. 
   </p>
   <p>Solltest du dennoch Hilfe benötigen, oder Fragen haben, die einfachIOTA Community auf 
    <a href={DISCORD} target="_blank">Discord</a> und
    <a href={TELEGRAM} target="_blank">Telegram</a>
      kann dir sicher weiterhelfen!</p>
   <br />


<div class="table-section">
  <br />
    <table class="table" id="tblData">
        <thead>
          <tr class="tblhead">
                  <th role="columnheader" style="border-top-left-radius: 4px;">Lösung</th>
                  <th role="columnheader">Schwierigkeitsgrad</th>
                  <th role="columnheader">Netzwerk</th>
                  <th role="columnheader">Aktuell / Funktion bestätigt</th>
                  <th role="columnheader" style="border-top-right-radius: 4px;">Unsere Bewertung</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          <tr href="https://docs.raspihive.org">
            <td>Raspihive</td>
            <td>Einfach</td>
            <td>Mainnet</td>
            <td>Ja / 19.03.21</td>
            <td>9/10</td>
          </tr>
          <tr>
            <td>Hornet - Official</td>
            <td>Moderat</td>
            <td>Mainnet</td>
            <td>Ja / 19.03.21</td>
            <td>7/10</td>
          </tr>
          <tr>
            <td>Bee - Official</td>
            <td>Moderat</td>
            <td>Mainnet</td>
            <td>Ja / 19.03.21</td>
            <td>7/10</td>
          </tr>
          <tr>
            <td>Playbook</td>
            <td>Moderat</td>
            <td>Mainnet</td>
            <td>Ja / 19.03.21</td>
            <td>8/10</td>
          </tr>
          <tr>
            <td>GoShimmer - Official</td>
            <td>Moderat</td>
            <td>Pollen-Testnet</td>
            <td>Ja / 19.03.21</td>
            <td>7/10</td>
          </tr>
          <tr>
            <td>GoShimmer+WASP</td>
            <td>Schwer</td>
            <td>Pollen-Testnet</td>
            <td>Ja / 19.03.21</td>
            <td>7/10</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>

<div class="trouble-section">
      <br />
      <br />
      <br />
      <br />
      <h3>Funktioniert ein Tutorial nicht mehr?</h3>
     </div>
  
     <p>
      Wir geben unser bestes, die übersicht Aktuell zu halten. Jedoch besteht unser Team aus freiwilligen,
      die auch nur begrenzt Zeit haben die verschiedenen Tutorials zu überprüfen. 
      <br /><br />

      Wenn du einen fehler entdeckst oder etwas nicht mehr funktioniert, gib uns bitte kurz über 
      <a href={DISCORD} target="_blank">Discord</a> oder
      <a href={TELEGRAM} target="_blank">Telegram</a>
      bescheid.
     </p>
     <br />
      <br />
      <br />
      <br />
     <br />



<style>

  .container {
    height: 250px;
    width: 100%;
    margin-left: 5vw;
  }

  p {
      margin-left: 100px;
      margin-right: 100px;
      font-family: Arial, Helvetica, sans-serif;
  }
 
  #tblData {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    color: black;
    margin-left: 10%;
  }
  #tblData td {
    border: 1px solid transparent;
    padding: 15px;
    text-align: center;
  }
  #tblData th {
    border: 1px solid transparent;
    padding: 15px;
    text-align: center;  
    background-color: #00B8C5;
    color: black;
  }
  .table-section {
    background-color: rgb(209, 238, 235)
  }
  .trouble-section {
    width: 100%;
    margin-left: 5vw;
  }

  #tblData tr:nth-child(even){background-color: rgb(191, 214, 212);}

  #tblData tr:hover {background-color: #83e1f7;}


  /*
Max width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.
*/
@media
  only screen 
  and (max-width: 760px), (min-device-width: 768px) 
  and (max-device-width: 1024px)  {

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr {
    display: block;
    border-radius: 5px;
    padding: 5px;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }
    
  tr:nth-child(odd) {
    background-color: rgb(209, 238, 235);
    border: 1px solid rgb(191, 214, 212);
  }
  
  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 0.5px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
  #tblData td, #tblData th {
    border: 1px solid transparent;
    padding: 0px;
    text-align: right;
  }
  p {
      margin-left: 10px;
      margin-right: 10px;
      font-family: Arial, Helvetica, sans-serif;
  }
  h1 {
    margin-left: -10px
  }

  /*
  Label the data
  You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
  */
  td:nth-of-type(1):before { content: "Lösung:"; }
  td:nth-of-type(2):before { content: "Schwierigkeitsgrad:"; }
  td:nth-of-type(3):before { content: "Aktuell?"; }
  td:nth-of-type(4):before { content: "Funktion bestätigt:"; }
  td:nth-of-type(5):before { content: "Unsere Bewertung:"; }
}

</style>