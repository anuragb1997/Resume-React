import './App.css';
import SideHeading from './Components/SideHeading';
import Header from './Components/Header';
import Qualification from './Components/Qualification';
import Project from './Components/Project';
import Description from './Components/Description';
import Skills from './Components/Skills';

function App() {
  let r = {
    name: "Anurag Bhatt",
    place: "Khatima",
    state: "Uttrakhand",
    mobile: "8218515324",
    email: "anuragb.mca21@rvce.edu.in",

    desc: "Self-motivated team oriented person",

    skills: ["C", "C++", "JavaScript", "Big Data", "Git"],

    quals: [
      {color: [120, 120, 120], institution: "R V College of Engineering", start: "2021", end: "Present", degree:"Master of Computer Applications", result:"9.0 CGPA"},
      {color: [120, 120, 120], institution: "Singhania University", start: "2016", end: "2018", degree: "B.sc", result: "72.4%"},
      {color: [120, 120, 120], institution: "Kendriya Vidyalaya", start: "2013", end: "2014", degree: "Intermidiate", result: "68%"}
    ],

    projects: [
      {color: [120, 120, 120], title: "MVC", desc: "Book Managment System using MVC", link: "https://github.com/anurag1997/"},
      {color: [120, 120, 120], title: "Memory Managment", desc: "Using MERN STACK", link: "https://github.com/anurag1997"},
    ]
  };
  

  return (
    <div className="App">
      <div style={{width: "50em", padding: "2em", paddingBottom: "0em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Header name={r.name} place={r.place} state={r.state} mob={r.mobile} email={r.email}></Header>  
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Description content={r.desc} color={[219, 219, 219]}></Description>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Skills" color={[219, 219, 219]}></SideHeading>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Skills skills={r.skills} color={[120, 120, 120]}></Skills>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Education" color={[219, 219, 219]}></SideHeading>
      </div>
      {
        r.quals.map((q) => (
          <div style={{width: "50em", display: "flex", margin: "auto", justifyContent: "center"}}>
            <Qualification color={q.color} institution={q.institution} start={q.start} end={q.end} degree={q.degree} result={q.result}></Qualification>
          </div>
        ))
      }
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Projects" color={[219, 219, 219]}></SideHeading>
      </div>
      {
        r.projects.map((p) => (
          <div style={{width: "50em", display: "flex", margin: "auto", justifyContent: "center"}}>
            <Project color={p.color} title={p.title} desc={p.desc} link={p.link}></Project>
          </div>
        ))
      }
    </div>
  );
}

export default App;
