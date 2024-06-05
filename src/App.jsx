import './App.css'
import Delete from './components/Modal/Delete'
import ErrorModal from './components/Modal/ErrorMondal'
import Info from './components/Modal/Info'
import ModalLayout from './components/Modal/ModalLayout'
import Success from './components/Modal/Success'
import Warning from './components/Modal/Warning'

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", height: "100vh", width: "100vw" }}>
      <ModalLayout open={true} />
      <Info />
      <Success title="Some task has completed!" />
      <Warning title="This is a warning message" open={true} />
      <Delete title="Are you sure delete this task?" open={true} />
      <ErrorModal title="This is an error message" open={true} />
    </div>
  )
}

export default App
