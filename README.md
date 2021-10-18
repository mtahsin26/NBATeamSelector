NBATeamSelector
===============

Javascript NBA Team selector project



- This website is written in pure javascript to dynamically create elements, animations etc. to select players and create an imaginary team. 
- This app uses AJAX functionality to fetch player info from an XML file (playerData.XML) Users are also able to save their player lineups through local storage

- Website needs to run on a server for ajax calls to function properly or else data from playerData.XML will not show
- XML player data was created manually to mock a simple API. (Roster accurate as of 2011-2012 NBA season)
  
```xml
  <NBA>
    <Player>
      <Name>Ray Allen</Name>
      <Team>Boston Celtics</Team>
      <Position>Guard</Position>
      <Number>20</Number>
      <Height>6-5</Height>
      <Division>Atlantic</Division>
    </Player>
    ...
    ...
    <Player>
      <Name>Carmelo Anthony</Name>
      <Team>New York Knicks</Team>
      <Position>Forward</Position>
      <Number>7</Number>
      <Height>6-8</Height>
      <Division>Atlantic</Division>
    </Player>
  </NBA>
```
