# BandIT zadanie 1 - Angular

Zarejestruj się w serwisie <a href="https://rapidapi.com/" target="_blank">Rapid API</a>. W zadaniu wykorzystaj jedno z otwartych dostępnych API: <a href="https://rapidapi.com/vacationist/api/iata-and-icao-codes/endpoints" target="_blank">IATA and ICAO Codes</a>.

### Elementy do wykonania w zadaniu

1. Napisz serwis, który pobierze dane z API (oraz wszystkie elementy, które ogólnie wiążą się z tworzeniem serwisów)
2. Serwis wywołaj w `app.component`, ale dane wyświetl (przekaż) do `main-content.component`. Zrealizuj to dowolnie
   znanym Tobie sposobem.
3. Zmodyfikuj w odpowiednim miejscu kod tak, aby wyświetlane były tylko te linie lotnicze, których nazwa rozpoczyna się
   na `A` oraz których kod `ICAO` nie jest pusty
4. Każdą linijkę z danymi wyświetl na zasadzie:

Airlines name: ***name***, ICAO code: ***icao_code***, IATA code: ***iata_code***

5. Dopisz stylowanie tak, aby co drugi wiersz posiadał np. jasnoszare tło
