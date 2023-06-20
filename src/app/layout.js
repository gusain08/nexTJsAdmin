"use client"
import './globals.css'
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header/Header';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

 
export default function RootLayout({ children }) {
  
useEffect(()=>{
  require("bootstrap/dist/js/bootstrap");
},[]);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body  suppressHydrationWarning={true}>
        <Header/>
        {children}
     
      </body>
    </html>
  )
}