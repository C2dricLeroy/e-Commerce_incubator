// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import SignupForm from '@/app/components/signupForm/SignupForm.tsx';
import Footer from '@/app/components/footer/Footer';

export default function Signup() {
  return (
        <div>
            <Header/>
            <SignupForm />
            <Footer></Footer>
        </div>
  );
}
