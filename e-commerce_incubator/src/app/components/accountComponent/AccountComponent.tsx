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
                  <button onClick={() => accountComponentViewModel.setShowModal(true)}
                  className={styles.changeUsernameButton}>
                      Changer mon nom d&apos;utilisateur</button>
                  {accountComponentViewModel.showModal && (
                      <div className={styles.modal}>
                          <h3 className={styles.changeUsernameText}>
                              Changer le nom d&apos;utilisateur</h3>
                          <input
                              className={styles.changeUsernameInput}
                              type="text"
                              placeholder="Nouveau nom d'utilisateur"
                              value={accountComponentViewModel.usernameInput}
                              onChange={(e) => {
                                accountComponentViewModel.setUsernameInput(e.target.value);
                              }
                              }
                          />
                          <button
                              className={styles.validateUsernameChange}
                              onClick={accountComponentViewModel.handleUsernameChange}>
                              Valider</button>
                          <button
                              className={styles.cancelButton}
                              onClick={() => accountComponentViewModel.setShowModal(false)}>
                              Annuler</button>
                      </div>
                  )}
                  {accountComponentViewModel.confirmation && <p>
                      Le nom d&apos;utilisateur a été modifié avec succès.</p>}
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
