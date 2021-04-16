---
title: Was sind "Atomic Transactions"?
date: "2021-04-16"
---

Atomic Transactions einfach erklärt!


<!-- more -->
IOTA 1.0 verwendete das Konzept der Bundles zur Erstellung von Transfers. Bundles sind eine Reihe von Transaktionen, die über ihre Stamm-Referenz (Trunk) miteinander verbunden sind. Diese Transaktionen haben ein festes Layout und eine feste Größe unabhängig von ihrem "Inhalt". Eine Signatur mit Security Level 1 würde zwar auch in nur eine Transaktion passen, aber per default werden Security Level 2 Signaturen verwendet. Da die Level 2 Signatur von Wert-Transaktionen aber nicht in eine einzelne Transaktion passt, müssen mindestens 3 Transaktionen verwendet werden, um eine einfache Übertragung zu erstellen: 2 Transaktionen für die Eingabe + ihre Signatur und eine Transaktion (ohne Signatur). 
Mit einem weiteren Nachteil von Bundles haben vor allem die Entwickler zu kämpfen, denn es ist viel komplizierter, alle Transaktionen von einem Bundle zu bekommen und diese richtig zu ordnen, anstatt nur eine einzelne Message zu verarbeiten.


**Mit dem Update auf IOTA 1.5 wurde das alte Bundle-Konstrukt entfernt, stattdessen wurden die einfacheren Atomic-Transactions eingeführt. Dieser Wechsel bringt folgende Vorteile mit sich:**

**Weniger Netzwerk-Overhead:** Das Transaktions-Format kann so angepasst werden, dass nur die wirklich benötigten Informationen übertragen werden. Auf viele unnötige Informationen, wie für die aufeinanderfolgenden Transaktionen eines Bundle (2. Signaturtransaktion) kann verzichtet werden. Der Einsatz des UTXO Modells würde diese Situation noch verschlimmern und noch mehr Transaktionen verwenden, um eine einfache Übertragung zu erstellen.

**Weniger Signaturüberprüfungen:** Nach dem Coordicide muss jede Transaktion die Node-ID und die Signatur der Node enthalten, welche die Transaktion ausgestellt hat. Das bedeutet, dass für eine einfache Übertragung die Signaturen von mindestens 3 Transaktionen überprüft werden müssen. Die Signaturüberprüfung ist der aufwendigste Teil der Transaktionsverarbeitung, dies bedeutet, dass die Einführung von Node-IDs die Leistung der Nodes um mindestens 300% reduzieren würde, wenn der ursprüngliche Bundle-Ansatz beibehalten wird (noch mehr bei größeren Bundles). Unter dem Strich werden die Nodes Hunderte, vielleicht sogar Tausende von Transaktionen weniger verarbeiten können, als dies bei Atomic-Transactions (nicht in Bundles aufgeteilt) der Fall wäre.

**Besserer Spam-Schutz und Überlastungskontrolle:** Die Größe des Bundle ist erst bekannt, wenn die letzte Transaktion eingetroffen ist und geprüft werden kann, ob es sich um ein valides Bundle habelt. Dadurch könnte es passieren, dass eine bestimmte Anzahl von Transaktionen akzeptiert und weitergeleitet wird, um dann später festzustellen, dass die ausgebende Node seine Quote (Ratensteuerung) überschritten hat, und anschließend alle weiteren Transaktionen nicht mehr berücksichtigt. Das bedeutet, dass derzeit Transaktionen geroutet und verarbeitet wurden, die von Anfang an hätten gefiltert werden müssen, wenn bekannt gewesen wäre, dass der ausgebende Node versucht, einen zu großen Transfer zu senden. Dies könnte sogar einen Angriffsvektor eröffnen, bei dem ein Node verschiedene Bundles an verschiedene Personen ausgibt, die alle anfangen, die Transaktionen des Bundles zu verarbeiten und sie dann zu verschiedenen Zeiten wieder fallen lassen, wodurch die Last im Netzwerk unnötig erhöht wird.

**Kürzere Merkle-Proofs (für Sharding):** Die Merkle-Proofs für Inter-Shard-Transaktionen werden viel kürzer (mindestens 300%), wenn nicht alle Transaktionen in einem Bundle durchlaufen werden müssen, um zum nächsten Transfer zu gelangen. Dadurch werden die Inter-Shard-Transaktionen viel schneller und leichtgewichtiger.

**Entwickler-freundlich:** Einzelne Messages lassen sich viel einfacher verarbeiten.


**Schlussfolgerung:** Atomic-Transactions sind viel schneller, flexibler (variable Transaktionsgröße) und belasten das Netzwerk weniger, zudem sind sie für das später Sharding/Slicing besser geeignet als Bundles.
