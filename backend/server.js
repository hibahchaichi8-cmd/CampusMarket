const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
require('dotenv').config(); 
const app = express(); 
// Middlewares 
app.use(cors()); 
app.use(express.json()); 
// Routes 
const annonceRoutes = require('./routes/annonceRoutes'); 
app.use('/api/annonces', annonceRoutes); 
// Connexion MongoDB 
mongoose.connect(process.env.MONGO_URI) 
.then(() => { 
console.log('Connexion MongoDB réussie');
app.listen(process.env.PORT, () => { 
console.log( 
`Serveur démarré sur le port 
${process.env.PORT}` 
); 
}); 
}) 
.catch(error => { 
console.log('Erreur MongoDB :', error); 
}); 