import { useCallback, useState } from 'react';
import useUsersList from './hooks/useUsersList'
import UsersTable from './components/UsersTable'
import Modal from './components/Modal';
import styles from './App.module.css'
import { User } from './types'


const App = () => {
  const userList = useUsersList()
  const [userSelected, setUserSelected] = useState<undefined | User>(undefined)
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModalOpen = useCallback(() => setModalOpen(prev => !prev), [])
  const selectUser = useCallback((user: User) => setUserSelected(user), [])

  return (
    <div className={styles.appContainer}>
      <UsersTable userList={userList} selectUser={selectUser} toggleModal={toggleModalOpen}/>
      {modalOpen && (
        <Modal userSelected={userSelected} toggleModalOpen={toggleModalOpen} />
      )}
    </div>
  );
}

export default App
