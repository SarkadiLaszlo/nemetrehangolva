import React, { useState, useEffect } from "react";
import "./Feladatok.css";
import ButtonBack from '../buttons/ButtonBack'
import Picker from '../feladatok/Picker'
import Feladat from '../feladatok/Feladat'

let theVisibility

function Feladatok(props)  {

const [feladatokVisibility, setFeladatokVisibility] = useState()
const [feladatList, setFeladatList] = useState([])

useEffect(() => {
  setFeladatokVisibility(props.feladatokVisibility)
}, [feladatokVisibility, feladatList])

    const click = (element) => {
        console.log('click', element)
        let cim = '1.	Männlich, weiblich, intersexuell'
        let feladat1 = 'Es gibt Menschen, die nicht eindeutig Mann oder Frau sind. Aber deutsche Ämter kannten lange # diese beiden Geschlechter. Im November 2017 hat das Bundesverfassungsgericht # , dass sich das ändern muss.'
        let feladat2 = 'Intersexuelle Menschen haben # eindeutiges Geschlecht. Trotzdem mussten ihre Eltern bisher nach der Geburt entscheiden, ob sie als Junge oder als Mädchen registriert werden. Später ging es weiter: # Krankenversicherung, Schule – in allen Dokumenten und Formularen gab es nur zwei Möglichkeiten: „männlich“ oder „weiblich“.'
        let feladat3 = 'In der Vergangenheit hatten deutsche Gerichte eine dritte Möglichkeit abgelehnt. Die Klage einer intersexuellen Person # dem Bundesverfassungsgericht hatte dann aber Erfolg. Das Gericht entschied am 8. November 2017, dass es eine Diskriminierung ist, wenn intersexuelle Menschen nur # zwei Geschlechtern wählen können.'
        let feladat4 = 'Die Leiterin der Antidiskriminierungsstelle des Bundes, Christine Lüders, lobte die Entscheidung als historischen Beschluss. Im Gegensatz # reagierte ein Sprecher des Bundesinnenministers zurückhaltend: „Das ist ja noch eine sehr junge Entscheidung. Bewerten möchte ich # noch nicht, aber wir respektieren das Urteil natürlich“, sagte Johannes Dimroth in Berlin.'
        let feladat5 = 'Das Urteil gilt als wichtig, um die # Anerkennung intersexueller Menschen zu erreichen. Lucie Veith vom Verein „Intersexuelle Menschen“ sagt dazu: „Das Urteil ist menschenrechtlich ein großer Schritt, dem jetzt eine klare # Regelung folgen muss.“ Das sieht auch das Gericht so: Bis Ende 2018 muss ein neues Gesetz beschlossen werden.'
        let megoldas = 'nur  vor  das  gesetzliche  Ausweis  zwischen  darauf  zu  kein  entschieden  dazu  volle'
        setFeladatList([...feladatList, feladat1, feladat2, feladat3, feladat4, feladat5, cim, megoldas])

    }

    const onAddItem = (feladat) => {

    }


  return (
    <div>
    {props.feladatokVisibility == undefined ? theVisibility = 'hide' : props.feladatokVisibility == false ? theVisibility = 'hide' : theVisibility = 'show'}
      <div id="flyoutMenu" className={theVisibility}>
        <div id = "wrapper">
          <div id ="first">
            <Picker feladatokVisibility={theVisibility} feladatokClick = {click} />
          </div>
          <div id = "second">
            <Feladat feladatokVisibility={theVisibility} feladatok = {feladatList} />
          </div>
        </div>
        <div id = 'titleFeladatok'>
          <h1>Feladatok</h1>
        </div>
        <div id = 'floatingButton'>
          <ButtonBack handleBack={props.handleFeladatok}/>
        </div>

      </div>
    </div>
    );
  }

export default Feladatok;
