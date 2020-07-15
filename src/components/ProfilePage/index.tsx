import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  MailIcon,
  CellIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <h1>Contrate</h1>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gabriel Sousa</h1>
        <h2>@gabrielknoxx</h2>

        <p>
          Desenvolvedor React | React Native em busca de recolocação
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de julho de 1995
          </li>
          <li>
            <CellIcon />
            (11) 96139-8325
          </li>
          <li>
            <MailIcon />
            byelg.sousa@gmail.com
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>223</strong>
          </span>
          <span>
            <strong>415 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
