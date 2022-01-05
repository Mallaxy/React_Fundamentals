import React from 'react';

import { LogoImg } from './Logo.styled';

import logo from '../../../../assets/logo.jpg';

export const Logo = () => <LogoImg src={logo} alt='Logo' data-testid='logo' />;
