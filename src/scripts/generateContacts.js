

import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {

    const contactList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const newList = [...contactList, ...newContacts];
    await writeContacts(newList);

        };


generateContacts(5);


// import { PATH_DB } from '../constants/contacts.js';
// const data = await fs.readFile(PATH_DB, 'utf-8');
// console.log(JSON.parse(data)[0]);

