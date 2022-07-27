import React, { FC, memo } from 'react'
import { User } from '../../types';
import styles from './Modal.module.css'

interface ModalProps {
  userSelected?: User
  toggleModalOpen: () => void
}

const Modal: FC<ModalProps> = ({ userSelected, toggleModalOpen }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <span className={styles.closeIcon} onClick={toggleModalOpen} />
          <p>O username do usuário é {userSelected?.username}</p>
          <p>O id do usuário é {userSelected?.id} e sua posição é {userSelected?.position}</p>
        </div>
      </div>
    </div>
  )
}


export default memo(Modal)