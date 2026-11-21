const express = require('express'); 
const router = express.Router(); 
 
const Annonce = require('../models/Annonce'); 
 
// 1. Récupérer toutes les annonces 
router.get('/', async (req, res) => { 
    try { 
        const annonces = await Annonce.find(); 
        res.json(annonces); 
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
}); 
 
// 2. Récupérer une annonce par ID 
router.get('/:id', async (req, res) => { 
    try { 
        const annonce = await Annonce.findById(req.params.id); 
 
        if (!annonce) { 
            return res.status(404).json({ 
                message: 'Annonce introuvable' 
            }); 
        } 
 
        res.json(annonce); 
    } catch (error) { 
        res.status(400).json({ message: 'Identifiant invalide' 
}); 
    } 
}); 
// 3. Ajouter une annonce 
router.post('/', async (req, res) => { 
    try { 
        const nouvelleAnnonce = new Annonce(req.body); 
 
        const annonceEnregistree = await 
nouvelleAnnonce.save(); 
 
        res.status(201).json(annonceEnregistree); 
 
    } catch (error) { 
        res.status(400).json({ message: error.message }); 
    } 
}); 
 
// 4. Modifier une annonce 
router.put('/:id', async (req, res) => { 
    try { const annonceModifiee = await 
Annonce.findByIdAndUpdate( 
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        ); 
 
        if (!annonceModifiee) { 
            return res.status(404).json({ 
                message: 'Annonce introuvable' 
            }); 
        } 
 
        res.json(annonceModifiee); 
 
    } catch (error) { 
        res.status(400).json({ message: error.message }); 
    } 
});
router.delete('/:id', async (req, res) => { 
    try { 
        const annonceSupprimee = await 
Annonce.findByIdAndDelete( 
            req.params.id 
        ); 
 
        if (!annonceSupprimee) { 
            return res.status(404).json({ 
                message: 'Annonce introuvable' 
            }); 
        } 
 
        res.json({ message: 'Annonce supprimée avec succès' 
}); 
 
    } catch (error) { 
        res.status(400).json({ message: error.message }); 
    } 
}); 
 
module.exports = router; 