import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"


const App = () => {
const course = ' Real Muthaphuckkin G'
const parts =[ 
// parts[0]

  {
  name: 'Maldito hijo de Perra',
  exercises: 8
},
// parts[1]

 {
  name: 'Soy el maldito jefe ',
  exercises: 10
},
// parts[2]

 {
  name: 'Ganster de por Vida',
  exercises: 11
  }
  ]

return (
  <div>
    <Header course={course}/>
    <Content parts={parts}  />
    <Total parts={parts}/> 
  </div>
) 
}

export default App