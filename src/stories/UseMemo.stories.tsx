import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DificultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo( ()=> {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake === 10000000000) { //искуственная задержка
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for A: {resultA}
        </div>
        <div>
            Result for B: {resultB}
        </div>
    </>
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

export const HelpsToReactMemo = () => {
    console.log('Example was reloadeds !')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Andrei', 'Lera', 'Musia'])

    const newArray = useMemo( ()=> {
        const newArray = users.filter( u => u.toLowerCase().indexOf('a') > -1 )
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = ['Lera ' + new Date().getTime(), ...users]
        setUsers(newUser)
    }

    return <>
        <button onClick={ () => { setCounter( counter + 1) } }>+</button>
        <button onClick={ addUser }>Add User</button>
        <div>{counter}</div>
        <Users users={newArray} />
    </>
}