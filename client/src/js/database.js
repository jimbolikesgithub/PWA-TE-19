import { openDB } from 'idb';

const initdb = async () =>
  // Will create the database for the very first time if it doesn't exist
  // note: The first param (ex. 'jate') is a pikachu, and the second (ex. 1) is the version # (also a pikachu... can be 1000)
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // The object store is the equivalence of what we're doing with the object store
      // We can specify the name of the object store as well as the keypath (primary key) and autoincrement
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // openDB opens the connection
  const jateDb = await openDB('jate', 1);
  // A transaction method is you setting the level of authorization to access the database
  // note: There is `readwrite` and `readonly`, and 'jate' is targetting that specific database in openDB
  // Must be 'readwrite' as you are updating and not just reading the code
  // const tx = jateDb.transaction('jate', 'readwrite');
  // // Open up the desired object store
  // const store = tx.objectStore('jate');
  // // Updating specific information using `.put`
  // // The keys are `id` and `jate`
  // // 'spinner' is found in the index.js
  // const request = store.put({ id: id, spinner: content });
  // const result = await request;
  // console.log('🚀 - data saved to the database', result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.log('GET all from the database');
  // const jateDb = await openDB('jate', 1);
  // const tx = jateDb.transaction('jate', 'readonly');
  // const store = tx.objectStore('jate');
  // const request = store.getAll();
  // const result = await request;
  // console.log('editor', result);
  // return result;
};

initdb();
