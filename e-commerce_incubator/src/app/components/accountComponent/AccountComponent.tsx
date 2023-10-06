'use client';

// @ts-ignore
import useAccountComponentViewModel from '@/viewmodels/AccountComponentViewModel.ts';
import styles from './style.module.css';

export default function AccountComponent() {
  const accountComponentViewModel = useAccountComponentViewModel();

  return (
      <div className={styles.container}>
          <div className={styles.topContainer}>
              <div className={styles.username}>
                  <p>Nom d&apos;utilisateur: {accountComponentViewModel.username}</p>
                  <p>Changer mon nom d&apos;utilisateur</p>
              </div>
              <div className={styles.changePassword}>
                  <p>Changer mon mot de passe</p>
              </div>
          </div>
          <div className={styles.bottomContainer}>
              Supprimer mon compte
          </div>
      </div>
  );
}
