
import EventCard from './components/EventCard/EventCard.jsx';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <h1>Highlighting UMD Events: March 2024 🐢</h1>
      <table>
        <tr>
          <td><EventCard link={"https://calendar.umd.edu/umd-powwow?start=2024-03-02"} name={"UMD Powwow"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/super-smash-bros-tournament?start=2024-03-06"} name={"Super Smash Bros. Tournament"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/italian-night-chef-herb-takeover-at-south-campus-dining-hall?start=2024-03-29"} name={"Italian Night: Chef Herb Takeover at South Campus Dining Hall"}/></td>
        </tr>
        <tr>
          <td><EventCard link={"https://calendar.umd.edu/jazz-jam-with-the-hall-cp-9?start=2024-03-27"} name={"Jazz Jam with The Hall CP"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/future-of-ai-at-umd-open-forum?start=2024-03-27"} name={"Future of AI at UMD - Open Forum"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/paint-night-at-studio-a-2-2?start=2024-03-14"} name={"Paint Night at Studio A"}/></td>
        </tr>
        <tr>
          <td><EventCard link={"https://calendar.umd.edu/16th-annual-grunig-lecture?start=2024-03-13"} name={"16th Annual Grunig Lecture"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/inaugural-maria-ressa-prizes-for-courage-in-journalism?start=2024-03-13"} name={"Inaugural Maria Ressa Prizes for Courage in Journalism"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/red-sky-umd-wind-ensemble?start=2024-03-08"} name={"Red Sky: UMD Wind Ensemble"}/></td>
        </tr>
        <tr>
          <td><EventCard link={"https://calendar.umd.edu/see-bridgerton-ball?start=2024-03-08"} name={"SEE Bridgerton Ball"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/deans-lecture-series-reception-the-moms-organic-market-journey-a-conversation-with-scott-nash-ceo-founder?start=2024-03-05"} name={"Dean’s Lecture Series & Reception: The MOM’s Organic Market Journey—A Conversation With Scott Nash, CEO/Founder"}/></td>
          <td><EventCard link={"https://calendar.umd.edu/prokofievs-romeo-and-juliet-university-orchestra?start=2024-03-05"} name={"Prokofiev's Romeo and Juliet: University Orchestra"}/></td>
        </tr>
      </table>      
    </div>
  )
}

export default App;