Echt gut, aber hier ein paar Hinweise (Meckern auf hohem Niveau :) ):
- Zeile 1: `let`-keyword bei Initialisierung vergessen (der Browser erkennt zwar trotzdem ganz gut was du meintest, aber das muss nicht immer der Fall sein)
- das gleiche if-else-statement zweimal aufzuschreiben ist ein wenig unelegant. Stattdessen könnte man dies in eine Funktion `setTheme()` (hier Prozedur) kapseln und einfach ein beiden Orten aufrufen
- dem Body gibt man keine `id`, da man auf mittels `document.body` zugreifen kann (wie du es auch in der _Hello-Aufgabe_ gemacht hast)
- Zeile `14` und `17` lassen sich eine Zeile `darkMode = !darkMode` vereinen, die `darkMode` immer auf das Gegenteil setzt (`!true == false`)

*Finde cool, dass du Icons genutzt hast!*
