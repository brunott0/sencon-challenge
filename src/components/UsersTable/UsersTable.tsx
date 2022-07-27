import React, { FC, memo } from 'react'
import styles from './UsersTable.module.css'
import { User } from '../../types' 

interface UsersTableProps {
  userList: User[]
  selectUser: (user: User) => void
  toggleModal: () => void
}

interface UserRowProps {
  user: User
  selectUser: (user: User) => void
  toggleModal: () => void
  position: number
}

const UserRow: FC<UserRowProps> = memo(
  ({ user, selectUser, toggleModal, position }) => {
    const onClick = () => {
      selectUser({ ...user, position })
      toggleModal()
    }

    return (
      <tr>
        {Object.values(user.tableData).map(
          (userAttribute) => (
            <td onClick={onClick}>{userAttribute}</td>
          )
        )}
      </tr>
    )
  }
)

const UsersTable: FC<UsersTableProps> = ({ userList, selectUser, toggleModal }) => (
  <div className={styles.container}>
    <table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Endereço Completo</th>
        <th>Cidade</th>
        <th>Empresa</th>
      </tr>

      {userList.map((user, index) => (    
        <UserRow
          user={user}
          position={index}
          selectUser={selectUser}
          toggleModal={toggleModal}
        />
      ))}
    </table>
  </div>
)


export default memo(UsersTable)