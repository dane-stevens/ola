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

  const orders = [
    {
      orderNum: 12345,
      qty: 2,
      item: 't-shirts',
      size: 'xs',
      colour: 'blue',
      total: 30,
    },
    {
      orderNum: 23456,
      qty: 4,
      item: 'sweaters',
      size: 'm',
      colour: 'black',
      total: 120,
    }
  ]

  return (
    <div>
      <h1>Test</h1>
      
      {
        people.map((person, index) => {
          return (
            <div key={index}>
              <b>User:</b> {index} <br/> 
              { person.firstName } {person.lastName} <i>{ person.age } </i>
            </div>
          )
        })
      }
      <h2>New Table</h2>

      {
        orders.map((purchase) => {
          return (
            <div key={purchase.orderNum}>
              #{purchase.orderNum} {purchase.qty} {purchase.size} {purchase.colour} {purchase.item} ${purchase.total}
              {/* <table>
                <tr> 
                <td> #{purchase.orderNum} </td>
                <td> {purchase.qty} </td> 
                <td> {purchase.size} </td>
                <td> {purchase.colour} </td>
                <td> {purchase.item} </td>
                <td> ${purchase.total}</td>
                </tr>
              
              </table> */}
              
            </div>
          )
        })
      }
    </div>
  );
}
