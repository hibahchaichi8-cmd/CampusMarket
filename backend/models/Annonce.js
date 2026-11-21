const mongoose = require('mongoose'); 
 
const annonceSchema = new mongoose.Schema({ 
 
    titre: { 
        type: String, 
        required: true, 
        minlength: 3 
    }, 
 
    description: { 
        type: String, 
        required: true 
    }, 
 
    prix: { 
        type: Number, 
        required: true,
         min: 0.01 
    }, 
 
    categorie: { 
        type: String, 
        required: true 
    }, 
 
    etat: { 
        type: String, 
        enum: ['Neuf', 'Occasion'], 
        required: true 
    }, 
 
    vendeur: { 
        type: String, 
        required: true 
    }, 
 
    telephone: { 
        type: String, 
        required: true 
    }, 
 
    image: { 
        type: String, 
        required: true 
    } 
 
}, { timestamps: true });
module.exports = mongoose.model('Annonce', annonceSchema); 
