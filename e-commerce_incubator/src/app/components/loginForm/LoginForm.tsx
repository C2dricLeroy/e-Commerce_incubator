'use client';

// @ts-ignore
import useLoginViewModel from '@/viewmodels/LoginViewModel.ts';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function LoginForm() {
  const loginViewModel = useLoginViewModel();

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
                  className={styles.input}
                  placeholder="Entrez votre mot de passe"
                  required
              />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#" className={styles.forgotPasswordLink}>
                Mot de passe oublié ?
              </a>
            </div>
            <div className={styles.signup}>
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
