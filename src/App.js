import { useEffect, useState } from 'react';
import './styles/App.scss';
import AppHeader from './components/AppHeader';
import MainSection from './components/MainSection';

function App() {

  // search by name
  const [searchText, setSearchText] = useState('')
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098').then(res => {
      res.json().then(data => {
        setMembers(data)
      })
    })
  }, [])

  // we filter members by name here itself, then pass only the filtered members
  const filterMembers = () => {
    let smallSearchText = searchText.toLowerCase()
    let filteredMembers = members.filter(member => {
      return (member.first_name + ' ' + member.last_name).toLowerCase().includes(smallSearchText)
    })
    return filteredMembers
  }

  return (
    <div className="App">
      <AppHeader searchText={searchText} onSearchTextChange={setSearchText} />
      <MainSection members={filterMembers()} />
    </div>
  );
}

export default App;
