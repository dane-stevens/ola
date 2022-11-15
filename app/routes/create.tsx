import { useState } from "react"

export default function Create() {

    const [firstName, setFirstName] = useState('')

    const [lastName, setLastName] = useState('')

    const [emailAddress, setEmailAddress] = useState('')

    const [phoneNumber, setPhoneNumber] = useState('')

    const [mailAddress, setMailAddress] = useState('')

    const [city, setCity] = useState('')

    const [province, setProvince] = useState('')

    const [language, setLanguage] = useState('')

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
    
    console.log({items})

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
                    province: province,
                    language: language,
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

                Province/Territory: 
                <select value={province} onChange={(event) => {
                    return setProvince(event.target.value)
                }}>
                    <option hidden>Select province/territory...</option>
                    <option value='AB'>Alberta</option>
                    <option value='BC'>British Columbia</option>
                    <option value='MB'>Manitoba</option>
                    <option value='NB'>New Brunswick</option>
                    <option value='NL'>Newfoundland & Labrador</option>
                    <option value='NS'>Nova Scotia</option>
                    <option value='NT'>Northwest Territories</option>
                    <option value='NU'>Nunavut</option>
                    <option value='ON'>Ontario</option>
                    <option value='PE'>Prince Edward Island</option>
                    <option value='QC'>Quebec</option>
                    <option value='SK'>Saskatchewan</option>
                    <option value='YT'>Yukon</option>      

                </select>

                <br/>

                Language:
                <select value={language} onChange={(event) => {
                    return setLanguage(event.target.value)
                }}>
                    <option hidden>Select language...</option>
                    <option value='EN'>English</option>
                    <option value='FR'>French</option>

                </select>



                <button type='submit'>Add item</button>
            </form>


        </>
    )
}
