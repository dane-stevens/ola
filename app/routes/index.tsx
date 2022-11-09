export default function Index() {
 
  const people = [
    {
      firstName: 'dane',
      lastName: 'stevens'
    },
    {
      firstName: 'ola',
      lastName: 'telesz'
    },
    {
      firstName: 'rory',
      lastName: 'sones',
      age: 42,
    }
  ]

  return (
    <div>
      <h1>Welcome to Remix</h1>
      
      {
        people.map((person, index) => {
          return (
            <div key={index}>
              { person.firstName } {person.lastName} { person.age }
            </div>
          )
        })
      }
    </div>
  );
}
