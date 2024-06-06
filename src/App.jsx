import './App.css'
import DeleteModal from './components/Modal/DeleteModal';
import Info from './components/Modal/Info';
import ModalLayout from './components/Modal/ModalLayout';
import Warning from './components/Modal/Warning';
import Success from './components/Modal/Success'
import ErrorModal from './components/Modal/ErrorMondal'
import PrimaryButton from './components/buttons/primary-button'
import LinkButton from './components/buttons/link-button'
import SecondaryButton from './components/buttons/sec-button'
import TextButton from './components/buttons/text-button'
import DashedButton from './components/buttons/dashedbutton'
import Card from './components/card/card';

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", justifyContent: 'center', alignItems: "center", height: "100vh", width: "100vw" }}>
      <ModalLayout open={true} />
      <Info />
      <Success title="Some task has completed!" />
      <Warning title="This is a warning message" open={true} />
      <DeleteModal title="Are you sure delete this task?" open={true} />
      <ErrorModal title="This is an error message" open={true} /> 
      <PrimaryButton title='Primary Button' onClick={onclick}></PrimaryButton>
      <SecondaryButton title='Secondary Button'onClick={onclick}></SecondaryButton>
      <LinkButton title='Link Button'onClick={onclick}></LinkButton>
      <TextButton title='Text Button'onClick={onclick}></TextButton>
      <DashedButton title='Dashed Button'onClick={onclick}></DashedButton>
      <Card
        imageSrc="https://via.placeholder.com/300" 
        title="Card Title 1" 
        description="This is a longer description of the card content. Click the button to toggle more or less content." 
      />

    </div>
  )
}

export default App;
