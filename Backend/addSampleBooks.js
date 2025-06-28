const mongoose = require('mongoose');
const items = require('./db/Seller/Additem');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/BookStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleBooks = [
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    genre: "Fantasy Romance",
    description: "A young woman enters a brutal dragon-riding academy in this thrilling fantasy romance that has taken the world by storm. Violet must survive deadly challenges while navigating forbidden romance.",
    price: "24.99",
    userId: "507f1f77bcf86cd799439011",
    userName: "Fantasy Books Co.",
    itemImage: "uploads/1700630676613-i8smu3fv.svg"
  },
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    genre: "Fantasy Romance",
    description: "The highly anticipated sequel to Fourth Wing. Violet faces new challenges as she continues her journey at the dragon-riding academy, with even more intense action and romance.",
    price: "26.99",
    userId: "507f1f77bcf86cd799439012",
    userName: "Fantasy Books Co.",
    itemImage: "uploads/1700630708206-1979210[1].jpg"
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    genre: "Literary Fiction",
    description: "A modern love story about two friends who find their way through life, both together and apart. A novel about love, friendship, and the games we play.",
    price: "18.99",
    userId: "507f1f77bcf86cd799439013",
    userName: "Literary Treasures",
    itemImage: "uploads/1700631424222-18505809[1].jpg"
  },
  {
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    genre: "Historical Fiction",
    description: "Set in the 1960s, this novel follows Elizabeth Zott, a brilliant scientist who becomes a cooking show host, challenging the status quo and inspiring women everywhere.",
    price: "16.99",
    userId: "507f1f77bcf86cd799439014",
    userName: "Modern Classics",
    itemImage: "uploads/1700632005607-136251[1].jpg"
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Historical Fiction",
    description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life, including her seven marriages.",
    price: "15.99",
    userId: "507f1f77bcf86cd799439015",
    userName: "Hollywood Books",
    itemImage: "uploads/1700632074778-136251.jpg"
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "Fantasy Romance",
    description: "A retelling of Beauty and the Beast with faeries, magic, and romance. Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak, dangerous place.",
    price: "17.99",
    userId: "507f1f77bcf86cd799439016",
    userName: "Fantasy World",
    itemImage: "uploads/1700632515790-29502358[1].jpg"
  },
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    genre: "Psychological Thriller",
    description: "A psychological thriller about a woman who takes a job as a housemaid for a wealthy family, but nothing is as it seems in this twisty, page-turning novel.",
    price: "14.99",
    userId: "507f1f77bcf86cd799439017",
    userName: "Thriller Books",
    itemImage: "uploads/1700632736939-30186948[1].jpg"
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Psychological Thriller",
    description: "A struggling writer discovers a manuscript that reveals dark secrets about another author's life, leading to a psychological thriller that will keep you guessing until the end.",
    price: "13.99",
    userId: "507f1f77bcf86cd799439018",
    userName: "Thriller Books",
    itemImage: "uploads/1700632928170-80830635[1].jpg"
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Contemporary Romance",
    description: "A heartbreaking romance novel about a woman who must make a difficult choice between love and her own well-being. A powerful story about domestic violence and healing.",
    price: "15.99",
    userId: "507f1f77bcf86cd799439019",
    userName: "Romance Books",
    itemImage: "uploads/1700633112352-42983957[1].jpg"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Contemporary Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    price: "16.99",
    userId: "507f1f77bcf86cd799439020",
    userName: "Philosophy Books",
    itemImage: "uploads/1700633869849-122765395[1].jpg"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Science Fiction",
    description: "A lone astronaut must save humanity from extinction in this thrilling science fiction novel from the author of The Martian. A story of survival, friendship, and scientific discovery.",
    price: "19.99",
    userId: "507f1f77bcf86cd799439021",
    userName: "Sci-Fi Books",
    itemImage: "uploads/1700638048715-61111298[1].jpg"
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Literary Fiction",
    description: "A Nobel Prize-winning author's novel about an artificial friend who observes the world around her with curiosity and wonder, exploring what it means to be human.",
    price: "18.99",
    userId: "507f1f77bcf86cd799439022",
    userName: "Literary Fiction",
    itemImage: "uploads/1700643491707-63331415[1].jpg"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    description: "A woman shoots her husband and then never speaks again. A criminal psychotherapist tries to uncover the truth in this gripping psychological thriller.",
    price: "14.99",
    userId: "507f1f77bcf86cd799439023",
    userName: "Thriller Books",
    itemImage: "uploads/1742294964528-images.jpeg"
  },
  {
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    genre: "Fantasy",
    description: "A young woman makes a Faustian bargain to live forever and is cursed to be forgotten by everyone she meets. A beautiful story about love, memory, and what it means to be remembered.",
    price: "17.99",
    userId: "507f1f77bcf86cd799439024",
    userName: "Fantasy World",
    itemImage: "uploads/1700630676613-i8smu3fv.svg"
  },
  {
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    genre: "Mystery",
    description: "Four septuagenarians in a retirement village form a murder club to solve cold cases. When a real murder occurs, they put their skills to the test in this charming mystery.",
    price: "15.99",
    userId: "507f1f77bcf86cd799439025",
    userName: "Mystery Books",
    itemImage: "uploads/1700630708206-1979210[1].jpg"
  }
];

async function addSampleBooks() {
  try {
    // Clear existing books (optional - remove this if you want to keep existing books)
    // await items.deleteMany({});
    
    // Add sample books
    const result = await items.insertMany(sampleBooks);
    console.log(`Successfully added ${result.length} books to the database`);
    
    // Display the added books
    result.forEach(book => {
      console.log(`- ${book.title} by ${book.author} ($${book.price})`);
    });
    
  } catch (error) {
    console.error('Error adding sample books:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Run the script
addSampleBooks(); 
