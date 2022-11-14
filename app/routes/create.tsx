import { useState } from "react"

export default function Create() {

    const [firstName, setFirstName] = useState('')

    const [lastName, setLastName] = useState('')

    const [emailAddress, setEmailAddress] = useState('')

    const [phoneNumber, setPhoneNumber] = useState('')

    const [mailAddress, setMailAddress] = useState('')

    const [city, setCity] = useState('')

    const [items, changeItems] = useState([
        {
            firstName: 'dane',
            lastName: 'stevens',
            emailAddress: 'test@test.com'

        },
        {
            firstName: 'ola',
            lastName: 'telesz',
            phoneNumber: '111-111-1111'
        }
    ]) 
    
    // console.log({items})

    return (
        <>
            <h1>ITEMS</h1>
            {
                items.map((item,i) => {
                    
                    return <div key={i}>{JSON.stringify(item)}</div>
                })
            }
            <form method='post' onSubmit={(event) => {
                event.preventDefault()
                return changeItems([...items, { firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    phoneNumber: phoneNumber, 
                    mailAddress:mailAddress,
                    city: city,
                     }])
                // return changeItems([...items, inputValue])
            }}>
                First Name: 
                <input type='text' value={firstName} onChange={(event) => {
                    return setFirstName(event.target.value)
                }} />

                <br/>

                Last Name: 
                <input type='text' value={lastName} onChange={(event) => {
                    return setLastName(event.target.value)
                }} />

                <br/>

                Email: 
                <input type='text' value={emailAddress} onChange={(event) => {
                    return setEmailAddress(event.target.value)
                }} />

                <br/>

                Phone Number: 
                <input type='text' value={phoneNumber} onChange={(event) => {
                    return setPhoneNumber(event.target.value)
                }} />

                <br/>

                Mailing Address: 
                <input type='text' value={mailAddress} onChange={(event) => {
                    return setMailAddress(event.target.value)
                }} />

                <br/>

                City: 
                <input type='text' value={city} onChange={(event) => {
                    return setCity(event.target.value)
                }} />

                <br/>

                <button type='submit'>Add item</button>
            </form>


        </>
    )
}
