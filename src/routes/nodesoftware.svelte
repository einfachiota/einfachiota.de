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
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 80%;
      color: black;
      margin-left: 10%;
    }
  
    #tblData td, #tblData th {
      border: 1px solid transparent;
      padding: 15px;
      text-align: center;
      
    }
  
    #tblData tr:nth-child(even){background-color: #00B8C5;}
  
    #tblData tr:hover {background-color: #83e1f7;}
  
    #tblData th {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
      background-color: #00B8C5;
      color: black;
    }
  
  </style>
  
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
    Mit diser übersicht wollen wir dir bei der suche nach einer Geeigneten Lösung etwas unter die Arme greifen. 
   </p>


<div>
    <table class="table" id="tblData" >
        <thead>
          <tr class="tblhead">
                  <th style="border-top-left-radius: 4px;">Lösung</th>
                  <th>Schwierigkeitsgrad</th>
                  <th style="border-top-right-radius: 4px;">Unsere Bewertung</th>
          </tr>
          <tr>
                  <td>Raspihive</td>
                  <td>Einfach</td>
                  <td>10/10</td>
          </tr>
          <tr>
                  <td>Hornet - Official</td>
                  <td>Moderat</td>
                  <td>7/10</td>
          </tr>
          <tr>
                  <td>Hornet - Official</td>
                  <td>Moderat</td>
                  <td>7/10</td>
           </tr>
        </thead>
      </table>
</div>
  