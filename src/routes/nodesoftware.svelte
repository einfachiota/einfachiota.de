<head>
  <style>
  .collapsible {
    cursor: pointer;
    padding: 15px;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    overflow: hidden !important;
  }
  .content {
    border: 1px solid transparent;
    display: none;
    overflow: hidden !important;
    background-color: #f1f1f1;
    padding: 15px;
  }

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
    background-color: rgb(209, 238, 235);
  }
  .trouble-section {
    width: 90%;
    margin-left: 5%;
  }
  .information {
    border: 1px solid transparent;
    padding: 15px;
    border-radius: 15px;
    background-color: rgb(255, 237, 188);
    text-align: center;
  }
  
  #tblData tr:nth-child(even){background-color: rgb(191, 214, 212);}
  #tblData tr:hover {background-color: #83e1f7;}

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
  td:nth-of-type(2):before { content: "Schwierigkeit:"; }
  td:nth-of-type(3):before { content: "Netzwerk"; }
  td:nth-of-type(4):before { content: "Sprache:"; }
  td:nth-of-type(5):before { content: "Link:"; }
}

  </style>
</head>

  <script>
    export let segment;
    const  TELEGRAM="https://t.me/einfachIOTA", 
           DISCORD="https://discord.com/invite/eReFR9RzaN";
  </script>

  <svelte:head>
    <title>Nodesoftware</title>
  </svelte:head>
  
<body>

  <div class="container">
      <br />
      <h1>Ich möchte eine Node aufsetzen!</h1>
  </div>

  <p>
    Wer plant eine Node aufzusetzen, der wird erst einmal erschlagen von der fülle an 
    Anleitungen die es mittlerweile schon gibt - oftmals sind diese bereits nichtmal mehr aktuell.
    Mit dieser Übersicht wollen wir dir bei der suche nach einer Geeigneten Lösung etwas unter die Arme greifen. 
   </p>
   <p class="information">&#x2139;  Solltest du dennoch Hilfe benötigen, oder Fragen haben, die einfachIOTA Community auf 
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
                    <th role="columnheader">Schwierigkeit</th>
                    <th role="columnheader">Netzwerk</th>
                    <th role="columnheader">Sprache</th>
                    <th role="columnheader" style="border-top-right-radius: 4px;">Link</th>
            </tr>
          </thead>

          <tbody role="rowgroup">
            <tr type="button" class="collapsible">
              <td>Raspihive</td>
              <td>Einfach</td>
              <td>Chrysalis (IOTA 1.5)</td>
              <td>EN</td>
              <td><a href="https://docs.raspihive.org" target="_blank">Link</a></td>
            </tr>
         
            <tr type="button" class="collapsible">
              <td>Hornet</td>
              <td>Mittel</td>
              <td>Chrysalis (IOTA 1.5)</td>
              <td>EN</td>
              <td><a href="https://hornet.docs.iota.org/tutorials/1.5/index.html" target="_blank">Link</a></td>
            </tr>
            
            <tr type="button" class="collapsible">
              <td>Bee</td>
              <td>Mittel</td>
              <td>Chrysalis (IOTA 1.5)</td>
              <td>EN</td>
              <td><a href="http://bee.docs.iota.org/" target="_blank">Link</a></td>
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




  <script>
  /*  
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "table-row") {
        content.style.display = "none";
      } else {
        content.style.display = "table-row";
      }
    });
  }*/
  </script>
  
</body>