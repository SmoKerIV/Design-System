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
import DisabledButton from './components/buttons/disabledButton'
import IconButton from './components/buttons/iconButton'
import Badges from './components/datadisplay/badges/badges'
import LoadingButton from './components/buttons/loadingButton';
import Card from './components/datadisplay/card/card';
import ListComponent from './components/datadisplay/lists/list';
import InfoAlert from './components/feedback/alerts/infoAlert';
import WarningAlert from './components/feedback/alerts/warningAlert';
import ErrorAlert from './components/feedback/alerts/errorAlert';
import SuccessAlert from './components/feedback/alerts/successAlert';
import Notification from './components/feedback/Notifications/notification';
import CircularProgressBar from './components/feedback/progress/circular';
import HomeIcon from './components/buttons/button-assets/home-icon.svg';
import BellIcon from './components/datadisplay/badges/assets/bell-icon.svg';
import TableComponent from './components/datadisplay/Table/table';
import { FaY } from 'react-icons/fa6';

function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  const handleNotificationsClick = () => {
    console.log('Notifications clicked');
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", justifyContent: 'center', alignItems: "center", height: "100vh", width: "100vw" }}>
      <ModalLayout open={true} />
      <Info />
      <Success title="Some task has completed!" />
      <Warning title="This is a warning message" open={true} />
      <DeleteModal title="Are you sure delete this task?" open={true} />
      <ErrorModal title="This is an error message" open={true} /> 
      <PrimaryButton title='Primary Button' onClick={handleClick}></PrimaryButton>
      <SecondaryButton title='Secondary Button'onClick={handleClick}></SecondaryButton>
      <LinkButton title='Link Button'onClick={handleClick}></LinkButton>
      <TextButton title='Text Button'onClick={handleClick}></TextButton>
      <DashedButton title='Dashed Button'onClick={handleClick}></DashedButton>
      <Card
        imageSrc="https://via.placeholder.com/300" 
        title="Card Title 1" 
        description="This is a longer description of the card content. Click the button to toggle more or less content." 
      />
      <DisabledButton title='Disabled Button'></DisabledButton>
      <IconButton title="Icon Button" onClick={handleClick} icon={<img src={HomeIcon} alt="Bell icon" className="Bell-icon" style={{ height:'20px',width:'25px'}}/>} />
      <LoadingButton 
       title="Loading Button" 
       loadingDurationInSeconds={3}  
       />
      <Badges title="" notificationCount={5} onClick={handleNotificationsClick} icon={<img src={BellIcon} alt="Bell icon" className="Bell-icon" style={{ height:'20px',width:'25px',cursor:'pointer'}}/>} />
      <ListComponent initialItems={[
        "[ITEM] Racing car sprays burning fuel into crowd.",
        "[ITEM] Japanese princess to wed commoner.",
        "[ITEM] Australian walks 100km after outback crash.",
        "[ITEM] Man charged over missing wedding girl.",
        "[ITEM] Los Angeles battles huge wildfires.",
        "[ITEM] New item 1.",
        "[ITEM] New item 2.",
        "[ITEM] New item 3.",
        "[ITEM] New item 4."
      ]} />
     <SuccessAlert title="Success Tips" description="Detailed description and advice about successful copywriting."/>
      <InfoAlert title="Informational Notes" description="Additional description and information about copywriting."/>
      <WarningAlert title="Warning" description="This is a warning notice about copywriting." />
      <ErrorAlert title="Error" description="This is a warning notice about copywriting." />
      <Notification
                title="Notification Title"
                message="Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible."
            /> 
      <CircularProgressBar value={75} color="pink" />
      <TableComponent initialRows={[{ columns: ['Text1', 'Text2','Text3','Text4' , 'Text5','Text6'], tag1: 'Tag 1', tag2: 'Tag 2' },
    { columns: ['Text1', 'Text2','Text3','Text4','Text5','Text6'], tag1: 'Tag 1', tag2: 'Tag 2' },{ columns: ['Text1', 'Text2','Text3','Text4' , 'Text5','Text6'], tag1: 'Tag 1', tag2: 'Tag 2' }]} name={'john Doe'} columnTitles={['Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title']}/>
     </div>
  )
}

export default App;
