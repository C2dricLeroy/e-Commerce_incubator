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
                    <p className={styles.usernameText}>
                        Nom d&apos;utilisateur: {accountComponentViewModel.username}
                    </p>
                    <button
                        onClick={() => accountComponentViewModel.setShowModal(true)}
                        className={styles.changeUsernameButton}
                    >
                        Changer mon nom d&apos;utilisateur
                    </button>
                    {accountComponentViewModel.showModal && (
                        <div className={styles.modal}>
                            <h3 className={styles.changeUsernameText}>
                                Changer le nom d&apos;utilisateur
                            </h3>
                            <input
                                className={styles.changeUsernameInput}
                                type="text"
                                placeholder="Nouveau nom d'utilisateur"
                                value={accountComponentViewModel.usernameInput}
                                onChange={(e) => {
                                  accountComponentViewModel.setUsernameInput(e.target.value);
                                }}
                            />
                            <button
                                className={styles.validateUsernameChange}
                                onClick={accountComponentViewModel.handleUsernameChange}
                            >
                                Valider
                            </button>
                            <button
                                className={styles.cancelButton}
                                onClick={() => accountComponentViewModel.setShowModal(false)}
                            >
                                Annuler
                            </button>
                        </div>
                    )}
                    {accountComponentViewModel.confirmation && (
                        <p className={styles.confirmation}>
                            Le nom d&apos;utilisateur a été modifié avec succès.
                        </p>
                    )}
                </div>
                <div className={styles.changePassword}>
                    <button className={styles.changePasswordButton}>
                        Changer mon mot de passe
                    </button>
                </div>
            </div>
            <button
                onClick={() => accountComponentViewModel.setDeleteModal(true)}
                className={styles.deleteAccountButton}
            >
                Supprimer mon compte
            </button>
            {accountComponentViewModel.deleteModal && (
                <div className={styles.modal}>
                    <h3 className={styles.deleteAccountText}>Supprimer mon compte</h3>
                    <button
                        className={styles.cancelDeleteButton}
                        onClick={() => accountComponentViewModel.setDeleteModal(false)}
                    >
                        Annuler
                    </button>
                    <button
                        className={styles.deleteButton}
                        onClick={accountComponentViewModel.handleDelete}
                    >
                        Confirmer
                    </button>
                </div>
            )}
            {accountComponentViewModel.confirmDelete && (
                <p className={styles.confirmation}>Votre compte a été supprimé avec succès.</p>
            )}
        </div>
  );
}
