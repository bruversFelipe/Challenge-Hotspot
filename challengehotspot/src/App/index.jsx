import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppWrapper from './style';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Tooltip from '../Components/Tooltip';
import HotspotItem from '../Components/HotspotItem';
import { addHotspotAction, deleteHotspotAction } from '../Redux';
import Modal from '../Components/Modal';
import ButtonCircle from '../Components/ButtonCircle';
import Popover from '../Components/Popover';
import { useContextGlobal } from '../GlobalContext';
import BemVindo from './BemVindo';

const FormAddHotspot = React.lazy(() => import('./FormAddHotspot'));
const ListHotspot = React.lazy(() => import('./ListHotspot'));

const defaultModal = { visible: false, clientX: 0, clientY: 0 };

const App = () => {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(defaultModal);
  const [visibleList, setVisibleList] = useState(false);
  const { listHotspot } = useSelector(state => state);
  const dispatch = useDispatch();
  const { trocaTema, themeString } = useContextGlobal();

  const onSelect = useCallback(() => {
    setSelect(true);
  }, []);

  const closeHotspot = useCallback(() => {
    setSelect(false);
  }, []);


  const openModal = useCallback((evt) => {
    const obj = { visible: true, clientX: evt.clientX, clientY: evt.clientY };
    setModal(obj);
  }, []);

  const closeModal = useCallback(() => {
    setModal(defaultModal);
    closeHotspot();
  }, [closeHotspot]);


  const submitHotspot = (values) => {
    const { clientX, clientY } = modal;

    const hotspot = {
      key: Math.random() * 1000,
      position: {
        clientX,
        clientY,
      },
      ...values,
    };
    dispatch(addHotspotAction(hotspot));
    closeModal();
  };

  const alterarTema = () => {
    let string = themeString;
    if (themeString === 'dark') {
      string = 'default';
    } else {
      string = 'dark';
    }
    trocaTema(string);
  };

  const onListHotspot = useCallback(() => {
    setVisibleList(!visibleList);
  }, [visibleList]);

  const deleteItem = (key) => {
    dispatch(deleteHotspotAction(key));
  };

  return (
    <React.Fragment>
      <AppWrapper role="presentation" onClick={select ? openModal : null}>
        <div className={select ? 'selector' : ''}>
          <Header />
          <div className="content-page">
            <BemVindo />
            {visibleList && listHotspot.length > 0 && (
              <React.Suspense fallback={<span>carregando...</span>}>
                <ListHotspot dataSource={listHotspot} deleteItem={deleteItem} />
              </React.Suspense>
            )}
          </div>
          <Footer>
            <Tooltip title="Adicionar Hotspot">
              <ButtonCircle onClick={onSelect}>
                <i className="fas fa-plus" />
              </ButtonCircle>
            </Tooltip>
            {listHotspot.length > 0 && (
              <Tooltip title={visibleList ? 'Ocultar Hotspot' : 'Listar Hotspot'}>
                <ButtonCircle onClick={onListHotspot}>
                  <i className="fas fa-list-ol" />
                </ButtonCircle>
              </Tooltip>
            )}
            <Tooltip title={themeString === 'default' ? 'Dark' : 'Default'}>
              <ButtonCircle onClick={alterarTema}>
                <i className="fas fa-fill-drip" />
              </ButtonCircle>
            </Tooltip>
          </Footer>
        </div>
      </AppWrapper>

      {listHotspot.length > 0 && listHotspot.map(item => (
        <Popover
          title={item.titulo}
          description={item.mensagem}
          key={item.key}
          position={item.position}
        >
          <HotspotItem position={item.position} />
        </Popover>
      ))}
      <Modal title="Adicionar novo Hotspot" visible={modal.visible} position={modal}>
        <React.Suspense fallback={<span>carregando...</span>}>
          <FormAddHotspot submitHotspot={submitHotspot} />
        </React.Suspense>
      </Modal>
    </React.Fragment>
  );
};

export default App;
