# Ein kleiner Kommentar

Sieht maga cool aus, besonders die UI, aber man kann ein paar Sachen vereinfachen:

`script.js`:

```js
function display(content) {
    const displayWrapper = document.getElementById("display-wrapper");
    
    if (content === "") {
        displayWrapper.innerHTML = "";
    } else {
        displayWrapper.innerHTML += content;
    }
}
```

Es ist grundsätzlich immer empfehlenswert HTML-Elemente, die man bspw. per `document.getElementById()` etc. kriegt, in Variablen zu speichern, da:

* die entsprechende `document.get...`-Methode nicht mehrfach aufgerufen werden muss
* der Code 1000x mehr lesbar ist


Man sollte außerdem vermeiden *mehrere* Methoden mit der gleichen Aufgabe zu schreiben. In solchen Fällen behaftet man die Methode einfach mit einem Parameter, den man der Methode beim Aufruf übergibt.

In diesem Fall, bedeutet ein leerer `content`, dass das Display gecleart wird. Dies überprüfen wir min dem `if-else`. 

So sieht der HTML-Teil aus:

```html
<button onclick="display(0)">0</button>

<button onclick="display(1)">1</button>

...
```

> *Kleiner Tipp:* Was in den Anführungszeichen des `onclick`-Attributs steht, ist Javascript-Code. D.h. hier könnte ein ganzer Algorithmus stehen (macht man aber nicht, weil das unlesbar ist...) - In unserem ist wichtig zu verstehen, dass wir so Argumente an die parameterbehaftete Methode `display(content)` übergeben können.

Zu `display-wrapper`:
Man soltte Elementen nur `wrapper` in der ID oder Klasse geben, wenn sie andere Elemente (children) beinhalten. In diesem Fall beinhaltet das Element jedoch lediglich Text, also würde `id="display"` genügen (*finde ich*).

**Lesbarkeit des Codes ist das aller aller wichtigste!**

Letzendlich ist es aber jedem selbst überlassen.


---
Bin gespannt, wie es weitergeht 💯 
