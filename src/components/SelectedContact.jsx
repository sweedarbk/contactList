import ContactList from "./ContactList";
import ContactRow from "./ContactRow";



const selectContact = [
    {
      id: 1,
      name: "Mrs. Jerald Schulist",
      username: "Antwan",
      email: "Coby_Zieme@libby.tv",
      address: {
        street: "Morissette Heights",
        suite: "Apt. 633",
        city: "Port Liashire",
        zipcode: "04270",
        geo: {
          lat: "27.7501",
          lng: "-83.1776",
        },
      },
      phone: "(663)839-3814 x845",
      website: "arvel.io",
      company: {
        name: "D'Amore-Krajcik",
        catchPhrase: "Down-sized empowering Graphic Interface",
        bs: "extend cross-media relationships",
      },
    },
  ];
  
  export default function oneContact() {
    const [selectedContactId, setSelectedContactId] = useState(null);
    useEffect(() => {
      async function fetchContacts() {
        try {
          const response = await fetch(
            "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
          );
          const result = await response.json();
          setContacts(result);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts();
    }, []);
  
    console.log("Contacts: ", contacts);
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} />;
          })}
        </tbody>
      </table>
    );
  }