import axios from 'axios'
import Card from '../components/card/Card'
import Button from '../components/Button'

export default function Home(props) {
  // console to check data props is available or not
  console.log(props.data)

  //destructuring data from props
  const {data} = props

  //Iterating array using map function
  const users = data.map(d => 
  <h3 key={d.id}>{d.id}. {d.name}</h3>
  )

  return (
    <div>
      {users}
      <Card />
      <Button/>
    </div>
  )
}

//getInitialProps to do initial data population 
Home.getInitialProps = async (ctx) => {

  //calling data from the api using axios
  const res = await axios.get('http://jsonplaceholder.typicode.com/users')

  //returning response 
  return({data : res.data})
}