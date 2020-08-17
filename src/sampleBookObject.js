const generateID = () => Math.floor((Math.random() * 100) + 1);

export default {
  books: [
    {
      id: generateID(),
      title: 'Kafka on the Shore',
      category: 'Action',
    },
    {
      id: generateID(),
      title: 'Persuasion',
      category: 'History',
    },
    {
      id: generateID(),
      title: 'Portrait of the Artis',
      category: 'Learning',
    },
  ],
};
