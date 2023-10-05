import React from 'react';
// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import LoginForm from '@/app/components/loginForm/LoginForm.tsx';
// @ts-ignore
import Footer from '@/app/components/footer/Footer.tsx';

export default function Login() {
  return (
        <div>
            <Header/>
            <LoginForm/>
            <Footer></Footer>
        </div>
  );
}
