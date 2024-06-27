import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Search from './components/Search';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/conceptadev/rockets',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/conceptadev/rockets/blob/main',
  search: {
    component: Search,
  },
  navigation: {
    prev: true,
    next: true,
  },
  logo: (
    <>
      <img
        className="md:inline object-contain hidden"
        height={16}
        width={16}
        alt="Rockets Logo"
        src={'/rockets-website/assets/rockets-icon.svg'}
      />
      <span className="mr-2 font-extrabold mx-2 hidden md:inline">Rockets</span>
      {/* <span className="text-gray-600 font-normal text-sm hidden md:inline">
        Rapid Enterprise Development Toolkit
      </span> */}
    </>
  ),
  footer: {
    text: (
      <>
        <span>
          {'2022 © '}
          <a href="https://conceptatech.com" target="_blank" rel="noreferrer">
            {' Concepta'}
          </a>
        </span>
      </>
    ),
  }
}

export default config
