import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: {count: number} ) => {
    return <div>
        {props.count}
    </div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Component UsersSecter was reloaded!') // проверка на отрисовку Users, если стейт не изменился (HOC)
    return <div>{
        props.users.map( (u,i) => <div key={i}>{u}</div>)
        } </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example was reloadeds !')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Andrei', 'Lera', 'Musia'])

    const addUser = () => {
        const newUser = ['newUser ' + new Date().getTime(), ...users]
        setUsers(newUser)
    }

    return <>
        <button onClick={ () => { setCounter( counter + 1) } }>+</button>
        <button onClick={addUser}>Add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users} />
        </>
}