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
      <h1>Test</h1>
      
      {
        people.map((person, index) => {
          return (
            <div key={index}>
              Person: { person.firstName } {person.lastName} { person.age }
            </div>
          )
        })
      }
    </div>
  );
}
