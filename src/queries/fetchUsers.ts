import { UserRaw } from '../types' 

const isDivisibleByThree = (value: number) => value % 3 === 0
const isDivisibleByFive = (value: number) => value % 5 === 0

const getCompany = (userIndex: number) => {

  if (isDivisibleByThree(userIndex) && isDivisibleByFive(userIndex)) return 'TC / SENCON'

  if (isDivisibleByThree(userIndex)) return 'TC'

  if (isDivisibleByFive(userIndex)) return 'SENCON'

  return 'Sem empresa'
}

function normalizeUserData(userData: UserRaw[]) {
  return userData.map(
    ({
      id,
      username,
      name,
      email,
      phone: phoneNumber,
      address: { street, suite, zipcode, city },
    }, index ) => ({
      id,
      username,
      tableData: {
        name,
        email,
        phoneNumber,
        completeAddress: `${street}, ${suite} ${zipcode}`,
        city,
        company: getCompany(index)
      },
    })
  )
}

async function fetchUsers(setResponse: Function) {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  const users = await response.json()

  if(users) setResponse(
    normalizeUserData(users)
  )
}

export default fetchUsers