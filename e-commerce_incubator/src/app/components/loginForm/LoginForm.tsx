'use client';

// @ts-ignore
import useLoginViewModel from '@/viewmodels/LoginViewModel.ts';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function LoginForm() {
  const loginViewModel = useLoginViewModel();
  const router = useRouter();

  return (
      <div className={styles.cont}>
        <div className={styles.container}>
          <h1 className={styles.title}>Connexion</h1>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  value={loginViewModel.email}
                  onFocus={() => loginViewModel.setError(false)}
                  onChange={(e) => loginViewModel.setEmail(e.target.value)}
                  placeholder="Entrez votre adresse e-mail"
                  required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Mot de passe
              </label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginViewModel.password}
                  onChange={(e) => loginViewModel.setPassword(e.target.value)}
                  className={styles.input}
                  onFocus={() => loginViewModel.setError(false)}
                  placeholder="Entrez votre mot de passe"
                  required
              />
            </div>
            {loginViewModel.error
                && <p className={styles.error}>Invalid email or password. Please try again</p>}
            <div className={styles.forgotPassword}>
              <a href="#" className={styles.forgotPasswordLink}>
                Mot de passe oublié ?
              </a>
            </div>
            <div className={styles.signup} onClick={() => router.push('/signup')}>
              <a>
                Pas encore inscrit ?
              </a>
            </div>
            <button type="submit" className={styles.submitButton}>
              Connexion
            </button>
          </form>
        </div>
      </div>

  );
}
