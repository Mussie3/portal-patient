import React from 'react'
import Layout from '../components/Layout';
// import Button from '../UI/Button';
// import calendar from '../assets/calendar_black.svg';
// import DataCard from '../components/DataCard';
// import UserCardTable from '../components/UserCardTable';
import PatientCard from '../components/PatientCard';

const users = [
  {
    id:0,
    name: "Kim Chae-Won",
    pic:"Patient1",
    number: "971001",
    appDate: new Date(),
    DoB:"1992/10/22",
    phone: "+826191026182",
    gender:"female",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:1,
    name: "Cho Chan-mi",
    pic:"Patient4",
    number: "940034",
    gender:"female",
    appDate: new Date(),
    phone: "+826641676182",
    DoB:"1997/06/21",
    previousVisit: 7,
    Detail: [
      { id: 0,
        date: "Today",
        symptom1:[],
        PSQI_Result: "",
        ISI_Result: "",
        PatientNote: "Ms. Cho Chan-mi is a 25 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[],
        doctor: "",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "",
        document1: "",
        document2: "",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "",
        marketPlace2: ""
      },
      { id: 1,
        date: "22/10/2022",
        PSQI_Result: "92%",
        ISI_Result: "83%",
        symptom1:["Headache","Nausea","Temperature","Sleepiness","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 25 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
            id: 0,
            question: "In what position do you sleep?",
            answer: "on my back"
            },
            {
              id: 1,
              question: "Have you ever fallen asleep while driving",
              answer: "No"
            },
            {
              id: 3,
              question: "Do you currently have a bed partner/roommate?",
              answer: "Yes"
            },
            {
              id: 4,
              question: "Have you ever used stimulant drugs before?",
              answer: "No"
            }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      },
      { id: 2,
        date: "01/06/2022",
        PSQI_Result: "93%",
        ISI_Result: "80%",
        symptom1:["Headache","Nausea","Temperature","Sleepiness","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 25 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
            id: 0,
            question: "In what position do you sleep?",
            answer: "on my back"
            },
            {
              id: 1,
              question: "Have you ever fallen asleep while driving",
              answer: "No"
            },
            {
              id: 3,
              question: "Do you currently have a bed partner/roommate?",
              answer: "Yes"
            },
            {
              id: 4,
              question: "Have you ever used stimulant drugs before?",
              answer: "No"
            }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      },
      { id: 3,
        date: "17/02/2021",
        PSQI_Result: "83%",
        ISI_Result: "75%",
        symptom1:["Headache","Nausea","Temperature","Sleepiness","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 24 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
            id: 0,
            question: "In what position do you sleep?",
            answer: "on my back"
            },
            {
              id: 1,
              question: "Have you ever fallen asleep while driving",
              answer: "No"
            },
            {
              id: 3,
              question: "Do you currently have a bed partner/roommate?",
              answer: "Yes"
            },
            {
              id: 4,
              question: "Have you ever used stimulant drugs before?",
              answer: "No"
            }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      },
      { id: 4, 
        date: "05/11/2019",
        PSQI_Result: "87%",
        ISI_Result: "85%",
        symptom1:["Headache","Nausea","Temperature","Sleepiness","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 22 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
            id: 0,
            question: "In what position do you sleep?",
            answer: "on my back"
            },
            {
              id: 1,
              question: "Have you ever fallen asleep while driving",
              answer: "No"
            },
            {
              id: 3,
              question: "Do you currently have a bed partner/roommate?",
              answer: "Yes"
            },
            {
              id: 4,
              question: "Have you ever used stimulant drugs before?",
              answer: "No"
            }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      },
      { id: 5,
        date: "14/05/2015",
        PSQI_Result: "86%",
        ISI_Result: "95%",
        symptom1:["Headache","Nausea","Temperature","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 17 yo woman who complains of worsening sore throat since yesterday morning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
            id: 0,
            question: "In what position do you sleep?",
            answer: "on my back"
            },
            {
              id: 1,
              question: "Have you ever fallen asleep while driving",
              answer: "No"
            },
            {
              id: 3,
              question: "Do you currently have a bed partner/roommate?",
              answer: "Yes"
            },
            {
              id: 4,
              question: "Have you ever used stimulant drugs before?",
              answer: "No"
            }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      },
      { id: 6,
        date: "26/07/2012",
        PSQI_Result: "95%",
        ISI_Result: "84%",
        symptom1:["Headache","Nausea","Temperature","Sleepiness","Shallow Sleep"],
        PatientNote: "Ms. Cho Chan-mi is a 14 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
        QA:[
          {
          id: 0,
          question: "In what position do you sleep?",
          answer: "on my back"
          },
          {
            id: 1,
            question: "Have you ever fallen asleep while driving",
            answer: "No"
          },
          {
            id: 3,
            question: "Do you currently have a bed partner/roommate?",
            answer: "Yes"
          },
          {
            id: 4,
            question: "Have you ever used stimulant drugs before?",
            answer: "No"
          }
        ],
        doctor: "Younghoon Cho",
        doctorNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        prescribedExam: "Polysomnography",
        technicianNote: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        technicianAssesment: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may. Obstacle blocking him from reaching his final destination. While people may do a lot of stupid",
        document1: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample.pdf?alt=media&token=ea9904f3-d6e2-456a-98ee-21901adc6af6",
        document2: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/pdfs%2Fsample2.pdf?alt=media&token=1ad5735a-a69c-4262-bb9a-2112e6ea21fd",
        doctorMessage: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination.",
        marketPlace1: "Sleep Tracker",
        marketPlace2: "Sleep, Meditate, Relax"
      }],
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:2,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924052",
    gender:"female",
    appDate: new Date(),
    DoB:"1990/06/17",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:3,
    name: "Kim Bae",
    pic:"Patient3",
    number: "983053",
    gender:"female",
    appDate: new Date(),
    DoB:"1995/06/02",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:4,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989054",
    gender:"male",
    appDate: new Date(),
    DoB:"1986/11/23",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Rescheduled"
  },
  {
    id:5,
    name: "Cho Chan-mi",
    pic:"Patient4",
    number: "940055",
    gender:"female",
    appDate: new Date(),
    DoB:"1985/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:6,
    name: "Kim Chae-Won",
    pic:"Patient1",
    number: "971006",
    gender:"female",
    appDate: new Date(),
    DoB:"1983/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:7,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924057",
    appDate: new Date(),
    DoB:"1993/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:8,
    name: "Kim Bae",
    pic:"Patient3",
    number: "983058",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:9,
    name: "Cho Chan-mi",
    pic:"Patient4",
    number: "940059",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:10,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989010",
    gender:"male",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Rescheduled"
  },
  {
    id:11,
    name: "Kim Chae-Won",
    pic:"Patient1",
    number: "971011",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:12,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924012",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:13,
    name: "Kim Bae",
    pic:"Patient3",
    number: "983013",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:14,
    name: "Cho Chan-mi",
    pic:"Patient4",
    number: "940014",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:15,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989015",
    gender:"male",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Rescheduled"
  },
  {
    id:16,
    name: "Kim Chae-Won",
    pic:"Patient1",
    number: "971016",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:17,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924017",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:18,
    name: "Kim Bae",
    pic:"Patient3",
    number: "983018",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:19,
    name: "Cho Chan-mi",
    pic:"Patient4",
    number: "940019",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:20,
    name: "Kim Chae-Won",
    pic:"Patient1",
    number: "971021",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:21,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924022",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:22,
    name: "Kim Bae",
    pic:"Patient3",
    gender:"female",
    number: "983023",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:23,
    name: "Cho Chan-mi",
    pic:"Patient4",
    gender:"female",
    number: "940024",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:24,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989025",
    gender:"male",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Rescheduled"
  },
  {
    id:25,
    name: "Kim Chae-Won",
    pic:"Patient1",
    gender:"female",
    number: "971026",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:26,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    gender:"female",
    number: "924027",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:27,
    name: "Kim Bae",
    pic:"Patient3",
    gender:"female",
    number: "983028",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:28,
    name: "Cho Chan-mi",
    pic:"Patient4",
    gender:"female",
    number: "940029",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826641676182",
    previousVisit: 7,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:29,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989030",
    gender:"male",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Completed"
  },
  {
    id:30,
    name: "Kim Chae-Won",
    pic:"Patient1",
    gender:"female",
    number: "971031",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826191026182",
    previousVisit: 14,
    Doctor: "Ycho",
    status: "Upcoming"
  },
  {
    id:31,
    name: "Lee Bon-Hwa",
    pic:"Patient2",
    number: "924032",
    gender: "female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+8261810236182",
    previousVisit: 2,
    Doctor: "Ycho",
    status: "Canceled"
  },
  {
    id:32,
    name: "Kim Bae",
    pic:"Patient3",
    number: "983033",
    gender:"female",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+826271676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Check-In"
  },
  {
    id:33,
    name: "Lee Jun",
    pic:"Patient5",
    number: "989035",
    gender:"male",
    appDate: new Date(),
    DoB:"1997/06/21",
    phone: "+828681676182",
    previousVisit: 0,
    Doctor: "Ycho",
    status: "Completed"
  },
];

const IndivisualPatient = (props) => {
  return (
    <Layout patients = {users} patient={props.patient.number}>
          <PatientCard patient={props.patient}/>
    </Layout>
  )
}

export default IndivisualPatient;