import React from 'react';
import BemVindoWrapper from './style';
import Card from '../../Components/Card';

const BemVindo = () => (
  <Card title="Bem Vindo">
    <BemVindoWrapper>
      <p>Olá, para começar, clique no botão adicionar abaixo para adicionar um Hotspot.</p>
      <p>
        Você pode escolher entre um tema light ou
        {' '}
        <strong>dark</strong>
        .
      </p>
      <p>
        {'Após adicionar Hotspots em sua tela, clique no botão que irá aparecer abaixo para listar todos os Hotspots'}
      </p>
    </BemVindoWrapper>
  </Card>
);


export default BemVindo;
