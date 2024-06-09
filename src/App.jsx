import './App.css';
import style from './components/PureModal/pureModal.module.css'
import { PureModal } from './components/PureModal/pureModal';
import { useState } from 'react';
import { Row } from './components/layouts/Row';
import Col from './components/layouts/Column';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{
      width: "100vw", display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <div style={{ height: "100vh", width: "60%" }}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error earum eligendi reiciendis rem itaque neque eum at ullam est impedit mollitia, perferendis ut? Error esse magnam natus placeat iure!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo facilis cupiditate! Eos quos officiis architecto modi ex eum repellendus odit nesciunt assumenda, nihil, voluptatem sit est dicta quod cum omnis qui corrupti repellat facere saepe quo cumque? Molestiae nostrum ipsum illum tempora, sed nihil vel ex. Molestias, pariatur veniam!</p>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '50vw', height: '100px', gap: '16px' }}>
          <button className={style.modal_button} onClick={() => setVisible(true)}>Open Modal</button>
          <PureModal isOpen={visible} onClose={() => setVisible(false)} >
            <button onClick={() => setVisible(false)}>Close</button>
            <h1>Hello Modal</h1>
          </PureModal>
        </div>

        <div>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div>hello</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nulla!
              </p>
            </Col>
            <Col span={8}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sint.</p>
            </Col>
            <Col span={8} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, accusantium.</Col>
            <Col span={0}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis.</p></Col>
            <Col span={24}>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col span={6} >
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col span={6}>
              Lorem ipsum dolor sit amet.
            </Col>
            <Col span={6}>
              Lorem ipsum dolor sit amet.</Col>
            <Col span={6}>
              Lorem ipsum dolor sit amet.</Col>
          </Row>
        </div>

      </div>
    </div>
  );
}

export default App;
