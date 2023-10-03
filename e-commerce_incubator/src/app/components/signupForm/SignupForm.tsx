'use client';

// @ts-ignore
import useSignupViewModel from '@/viewmodels/signupViewModel.ts';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function SignupForm() {
  const signupViewModel = useSignupViewModel();
  const router = useRouter();

  return (
        <div className={styles.cont}>
            <div className={styles.container}>
                <h1 className={styles.title}>Inscription</h1>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.label}>
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="Username"
                            className={styles.input}
                            value={signupViewModel.username}
                            onFocus={() => signupViewModel.setError(false)}
                            onChange={(e) => signupViewModel.setUsername(e.target.value)}
                            placeholder="Entrez votre nom d'utilisateur"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            value={signupViewModel.email}
                            onFocus={() => signupViewModel.setError(false)}
                            onChange={(e) => signupViewModel.setEmail(e.target.value)}
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
                            value={signupViewModel.password}
                            onChange={(e) => signupViewModel.setPassword(e.target.value)}
                            className={styles.input}
                            onFocus={() => signupViewModel.setError(false)}
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                    </div>
                    <div className={styles.signup} onClick={() => router.push('/login')}>
                        <a>
                            Vous possédez déjà un compte? Login
                        </a>
                    </div>
                    <button type="submit" className={styles.submitButton}
                            onClick={signupViewModel.handleSubmit}>
                        Connexion
                    </button>
                </form>
            </div>
        </div>

  );
}
