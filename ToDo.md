1. [ 1, 2, 3, 4, 5 ] -> 6
2. [ 2, 2, 3, 3 ] -> 4
3. [ 6, 6, 4, 4, 1, 3 ] -> 2
4. [ 3, 5, 3, 5, 4, 2 ] -> 12


# Erster Ansatz
Zwischen jeder Zahl gibt es einen Abstand. Da es keine klaren Kern- und Außenelektronen gibt, zum Beispiel bei 3 5 3, liegt der Kern außerhalb.
Deshalb ergibt sich:
1 + 5 = 6

Beim zweiten Beispiel beträgt der erste Abstand bis zur 2 eine Distanz von 2, und von 2 zu 3 beträgt die Distanz 1.
Da kein Kern vorhanden ist, muss man zusätzlich + 1 rechnen.

Also:
2 + 1 + 1 = 4

Beim dritten Beispiel könnte man doppelte Zahlen ignorieren. Der Abstand zwischen 1 und 3 beträgt 2, allerdings ist kein Kern vorhanden.
falscher Ansatz


# Zweiter Ansatz:
Die ungeraden Zahlen werden multipliziert:
3 * 5 = 15

Danach wird mit 6 multipliziert:
15 * 6 = 90

Anschließend teilt man durch das Produkt von 3 und 5 und erhält 6.
falscher Ansatz, weil das Ergebnis bereits in der Rechnung verwendet wird


# Dritter Ansatz - _DER RICHTIGE ANSATZ_
Wenn unter den 6 Würfeln gerade Zahlen vorkommen, werden diese addiert.

Beispiel erstes Array:
2 + 4 = 6

Beim zweiten Array:
2 + 2 = 4

Fall mit der Augenzahl 6

Bei Duplikaten wie 6 6 und 4 4 wird die Anzahl der Duplikate betrachtet, also hier 2.

Die übrigen Zahlen werden addiert:
1 + 3 = 4

Danach teilt man durch die Anzahl der Duplikate:
4 / 2 = 2

Wenn ein Kern vorhanden ist, zum Beispiel bei 3 5 3 und 5 3 5, existieren zwei Kerne.
Deshalb multipliziert man mit 2.

Die nicht doppelten Zahlen ergeben:
4 + 2 = 6

Dann:
6 * 2 = 12


# Verbesserter Ansatz für Array 4 - _VERBESSERUNG VON ANSATZ 3_
Die Anzahl der nicht benachbarten Duplikate übernimmt die Funktion eines Multiplikators und wird auf die Summe der normalen Werte angewendet.