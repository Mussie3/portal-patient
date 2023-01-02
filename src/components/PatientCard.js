import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Button from '../UI/Button';
import phone from '../assets/phone.png';
import finger from '../assets/fingerprint.svg';
import gender from '../assets/gender.svg';
import calendar from "../assets/Calendar_1.png";
import DropDown from '../UI/DropDown';
import {AiOutlineRight} from 'react-icons/ai';
import Checkbox from '../UI/Checkbox';
import pdfImage1 from "../assets/sample.png";
import pdfImage2 from "../assets/sample2.png";
import calm from "../assets/calm.png";
import sleep from "../assets/sleep-cycle.png";



const questions = [
    {
        id: 0,
        title: "Insomnia",
        question: {
            q1: "In what position(s) do you normaly sleep?",
        },
        answer: {
            a1: "On my back",
        },
        number: 1
    },
    {
        id: 1,
        title: "Sleep Apnea",
        question: {
            q1: "Have you ever fallen asleep while driving?",
        },
        answer: {
            a1: "No",

        },
        number: 1
    },
    {
        id: 2,
        title: "Restless Legs Syndrome (RLS)",
        question: {
            q1: "Do you currently have a bed partner/roommate?",
        },
        answer: {
            a1: "Yes",
        },
        number: 1
    },
    {
        id: 3,
        title: "Nacrolepsy",
        question: {
            q1: "Do you currently have a bed partner/roommate?",
        },
        answer: {
            a1: "No",
        },
        number: 1
    },
    {
        id: 4,
        title: "Onstructive Sleep Apnea",
        question: {
            q1: "Have you ever used stimulant drugs before?",
        },
        answer: {
            a1: "No",
        },
        number: 1
    },
];

const PSQIISI = [
    {
        id: 0,
        title: "Pittsburgh Sleep Quality Index (PSQI)"
    },
    {
        id: 1,
        title: "Insomnia Severity Index (ISI)"
    }
];

let question = [];
let data = [];


const PatientCard = (props) => {
    // const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
    let num = -1;
    console.log(props.patient.Detail)
    useEffect(()=> {
        data = [...props.patient.Detail];
        console.log(data);
    },[])



    const [arrayLength, setArrayLength] = useState(0);
    const [submitFile, setSubmitFile] = useState(false);
    const [inProgress, setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState({
        id: 0,
        date: "Today",
        PSQI_Result: "",
        ISI_Result: "",
        symptom1:[],
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
    })

    const handleArray = ([isChecked, value]) => {
        console.log(isChecked);
        console.log(value);
        if(isChecked === false) {
            question = question.filter(element => element !== value);
        } else
        {
            question.push(value);
        }
        setArrayLength(question.length);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let newQuestion = [];
        newQuestion = questions.filter(element => question.includes(element.title));
        setSelected((curValue) => { return {
            id: 0,
            date: "Today",
            PSQI_Result: "85%",
            ISI_Result: "73%",
            symptom1: question.filter(element => element !== "Pittsburgh Sleep Quality Index (PSQI)" && element !== "Insomnia Severity Index (ISI)"),
            PatientNote: "Ms. Cho Chan-mi is a 25 yo woman who complains of worsening sore throat since yesterdaymorning. She has never had a similar problem in the past. She has no difficulty swallowing, but notes that swallowing makes the pain worse. Nothing makes it better. There is no SOB or sensation of choking or dysphagia. She has fatigue and has had some anorexia since the symptoms began. She has had some subjective fevers at home but has not taken her temperature. She has had no cough or rhinorrhea. There are no sick contacts at home or at work. She denies seasonal allergies and post-nasal drip. ",
            QA: newQuestion.map(que => {
                if(question.includes(que.title)) {
                    console.log(que.title);
                    num++
                    return {
                        id: num,
                        question: que.question.q1,
                        answer: que.answer.a1
                        }
                } else {return}
            }),
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
        }
        })
        data = data.map(obj => {
            if (obj.id === 0) {
                return {...obj, 
                    symptom1: question.filter(element => element !== "Pittsburgh Sleep Quality Index (PSQI)" && element !== "Insomnia Severity Index (ISI)"), 
                    PSQI_Result: "85%", 
                    ISI_Result: "73%", 
                    QA: newQuestion.map(que => {
                        if(question.includes(que.title)) {
                            console.log(que.title);
                            num++
                            return {
                                id: num,
                                question: que.question.q1,
                                answer: que.answer.a1
                                }
                        } else {return}
            })}
            }
            return obj
        })
        setSubmitFile(true);
    };

    const handleSelect = e => {
        for (let index = 0; index < data.length; index++) {
            if(data[index].id === +e.target.id) {
                setSelected(data[index]);
            }     
        }
    }

    const handleFile = e => {
        setClicked(true)
        setInProgress(true);
        setCompleted(false);
        setTimeout(()=>{
            setInProgress(false);
            setCompleted(true);
        }, 10000);
    }
    
    
  return (
    <div>
        <div className="flex w-full p-6">
            <div className="w-1/6 text-[30px] text-[#475467] font-[Rubik-Bold]">{props.patient.name}</div>
            <div className="w-4/6 flex px-4 ">
                <div className="flex w-1/4 h-[48px] p-2 mx-2 my-1 bg-white border-[1px] border-[#47546780] drop-shadow-md">
                    <div className="pr-1"><img src={finger} className="w-[25px]"/></div>
                    <div className="font-[Rubik-Regular] text-md">4783745-{props.patient.number}</div>
                </div>
                <div className="flex w-1/4 h-[48px] p-2 mx-2 my-1 bg-white border-[1px] border-[#47546780] drop-shadow-md">
                    <div className="pr-2"><img src={calendar} className="w-[25px]"/></div>
                    <div className="font-[Rubik-Regular] text-md">{props.patient.DoB}</div>
                </div>
                <div className="flex w-1/4 h-[48px] p-2 mx-2 my-1 bg-white border-[1px] border-[#47546780] drop-shadow-md">
                    <div className="pr-2"><img src={gender} className="w-[25px]"/></div>
                    <div className="font-[Rubik-Regular] text-md">{props.patient.gender}</div>
                </div>
                <div className="flex w-1/4 h-[48px] p-2 mx-2 my-1 bg-white border-[1px] border-[#47546780] drop-shadow-md">
                    <div className="pr-2"><img src={phone} className="w-[25px]"/></div>
                    <div className="font-[Rubik-Regular] text-md">{props.patient.phone}</div>
                </div>
            </div>
            <div className="w-1/6 flex justify-end my-1">
                {!clicked && selected.date === "Today" && <Button type="submit" onClick={handleFile} disabled={!submitFile ? true : false} className={`flex ${!submitFile ?"bg-white text-[#172667] border-[1px] border-[#172667]" :"bg-[#172667] text-white border-none"} py-3 px-2 font-[Rubik-Regular]`}>SUBMIT PATIENT FILE</Button>}
                {inProgress && selected.date === "Today" && <Button type="submit" onClick={handleFile} disabled className=" drop-shadow-md bg-white text-[#172667] border-[1px] border-[#172667] py-2 px-1 font-[Rubik-Regular]">IN-PROGRESS</Button>}
                {completed && selected.date === "Today" && <Button type="submit" onClick={handleFile} disabled className=" drop-shadow-md bg-white text-[#172667] border-[1px] border-[#172667] flex"><div className="w-[10px] h-[10px] rounded-full bg-green my-4 mx-2"/> <div className='py-2 px-1 font-[Rubik-Regular]'>COMPLETED</div></Button>}
                {selected.date !== "Today" && <Button type="submit" disabled className="flex bg-white text-[#172667] border-[1px] border-[#172667] py-3 px-2 font-[Rubik-Regular]">SUBMIT PATIENT FILE</Button>}
            </div>
        </div>
        <div className="p-6 w-full flex">
            <div className="w-1/3 mx-4">
                <div className="font-[Rubik-Bold] text-[#475467] text-[20px] py-4">Visit Days</div>
                <div className="w-full bg-white drop-shadow-lg h-[450px] pt-4 scrollbar-thin scrollbar-thumb-gray scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                {props.patient.Detail.map(element =>
                    <div className="px-4 py-2"><div className={selected.id === element.id ? "flex w-full justify-center border-[1px] border-[#EAEAEA] font-[Rubik-SemiBold] bg-[#172667] text-lg text-white p-4 cursor-pointer" :"flex w-full justify-center border-[1px] border-[#EAEAEA] font-[Rubik-SemiBold] text-lg text-[#475467] p-4 cursor-pointer"} id={element.id} onClick={handleSelect}>{element.date}</div></div>
                )} 
                </div>
            </div>
            <div className="w-1/3 mx-4">
                <div className="font-[Rubik-Bold] text-[#475467] text-[20px] py-4">Detail</div>
                <div className="w-full bg-white drop-shadow-lg h-[450px] pt-4 scrollbar-thin scrollbar-thumb-gray scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">Patient note</div>
                        <div className="px-2 py-1"><div className="flex w-full justify-center border-[2px] border-[#EAEAEA] font-[Rubik-Regular] text-sm text-[#475467] p-2">{selected.PatientNote}</div></div>
                    </div>
                    <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2 pt-2">Symptoms</div>
                    <div className="flex flex-wrap border-b-[2px] p-1 border-[#F3F5F9]">
                        {selected.symptom1.map(symptom => 
                            <div className="px-2 py-1"><div className="flex w-full justify-center border-[2px] border-[#EAEAEA] font-[Rubik-Regular] text-sm text-[#475467] p-2">{symptom}</div></div>
                        )}
                    </div>
                    <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2 pt-2">Questionnaire</div>
                    <div className="border-b-[2px] p-1 border-[#F3F5F9]">
                        {console.log(selected.QA)}
                        {selected.QA.map(qa => 
                          <DropDown
                          key={qa.id}
                          question={qa.question}
                          answer={qa.answer}
                          /> 
                        )  
                        }
                    </div>
                    <div className="flex p-2">
                        <div className='w-1/2 flex border-[2px] border-[#F3F5F9] p-4 m-1'>
                            <div className="w-2/3">
                                <div className='font-[Rubik-Regular] text-sm text-[#475467] uppercase'>PSQI</div>
                                <div className='font-[Rubik-SemiBold] text-[10px] text-[#475467] uppercase'>RESULT = {selected.PSQI_Result}</div>
                            </div>
                            <div className="p-2 w-1/3 flex justify-end"><AiOutlineRight/></div>
                        </div>
                        <div className='w-1/2 flex border-[2px] border-[#F3F5F9] p-4 m-1'>
                            <div className="w-2/3">
                                <div className='font-[Rubik-Regular] text-sm text-[#475467] uppercase'>ISI</div>
                                <div className='font-[Rubik-SemiBold] text-[10px] text-[#475467] uppercase'>RESULT = {selected.ISI_Result}</div>
                            </div>
                            <div className="p-2 w-1/3 flex justify-end"><AiOutlineRight/></div>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="w-1/3 mx-4">
                <div className="font-[Rubik-Bold] text-[#475467] text-[20px] py-8"/>
                <div className="w-full bg-white drop-shadow-lg h-[450px] pt-4 scrollbar-thin scrollbar-thumb-gray scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    
                    {selected.date === "Today" && selected.symptom1.length === 0 
                    ?
                    <form onSubmit={handleSubmit}>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">Select Questionnaire</div>
                        <div className="px-2 py-1">
                            {questions.map((question)=>
                                <Checkbox question={question} key={question.id} wasChecked={handleArray}/>
                            )
                            }   
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">PSQI & ISI</div>
                        <div className="px-2 py-1">
                            {PSQIISI.map((question)=>
                                <Checkbox question={question} key={question.id} wasChecked={handleArray}/>
                            )
                            }   
                        </div>
                        <div className="w-full flex justify-center my-1">
                            <Button typr="submit" disabled={arrayLength === 0 ? true : false} className={`flex ${arrayLength === 0 ?"bg-white text-[#172667] border-[1px] border-[#172667]" :"bg-[#172667] text-white border-none"} py-3 px-2 font-[Rubik-Regular]`}>SEND QUESTIONNAIRE</Button>
                        </div>
                    </form>
                    :
                    <div>
                        {selected.doctor !== "" && 
                        <div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">DOCTOR</div>
                        <div className="p-2">
                                <div className='w-full p-2  text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.doctor}</div>
                        </div>
                        </div>}
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">DOCTOR’S NOTE</div>
                        <div className="p-2">
                            {(completed && selected.doctorNote !== "") || (selected.date !== "Today") ? 
                                <div className='w-full p-2  text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.doctorNote}</div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">PRESCRIBED EXAM</div>
                        <div className="p-2">
                        {(completed && selected.prescribedExam !== "") || (selected.date !== "Today")? 
                                <div className=' p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.prescribedExam}</div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">NOTE FOR TECHNICIANS</div>
                        <div className="p-2">
                            {(completed && selected.technicianNote !== "") || (selected.date !== "Today") ? 
                                <div className=' p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.technicianNote}</div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">TECHNICIAN’S ASSESSMENT</div>
                        <div className="p-2">
                        {(completed && selected.technicianAssesment !== "") || (selected.date !== "Today")? 
                                <div className='p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.technicianAssesment}</div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">DOCUMENTS</div>
                        <div className="p-2">
                        {(completed && selected.document1 !== "") || (selected.date !== "Today")? 
                                <div className='p-2 w-full flex text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>
                                    <div className='border-[1px] mx-1'><a href={selected.document1} target="_blank" rel="noopener noreferrer"><img src={pdfImage1} alt="..." className="w-[100px]"/></a></div>
                                    <div className='border-[1px] mx-1'><a href={selected.document2} target="_blank" rel="noopener noreferrer"><img src={pdfImage2} alt="..." className="w-[100px]"/></a></div>
                                </div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">DOCTOR’S MESSAGE</div>
                        <div className="p-2">
                        {(completed && selected.doctorMessage !== "") || (selected.date !== "Today")? 
                                <div className='p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular]'>{selected.doctorMessage}</div>
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                        <div className="font-[Rubik-Bold] text-sm text-[#475467] uppercase px-2">MARKETPLACE</div>
                        <div className="p-2">
                        {(completed && selected.marketPlace1 !== "") || (selected.date !== "Today")?
                                <div>
                                    <div className='p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular] my-1 flex'><img src={sleep} alt="..." className='w-[50px]'/><div className='p-2'><div className='font-[Rubik-SemiBold]'>Sleep Cycle</div><div>{selected.marketPlace1}</div></div></div>
                                    <div className='p-2 w-full text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-Regular] flex'><img src={calm} alt="..." className='w-[50px]'/><div className='p-2'><div className='font-[Rubik-SemiBold]'>Calm</div><div>{selected.marketPlace2}</div></div></div>
                                </div> 
                                :
                                <div className='w-full h-[100px] text-[12px] border-[2px] border-[#EAEAEA] text-[#999999] font-[Rubik-SemiBold] text-center pt-[12%]'>NOTHING HERE YET</div>
                            }
                        </div>
                    </div>}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientCard;