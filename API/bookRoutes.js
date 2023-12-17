const express = require('express');
const router = express.Router();
const db = require('./db');
const suggestionsData = require('./suggestionsData');

router.get('/:genre', (req, res) => {
    const { genre } = req.params;
    const tablename = 'Books'; 
    const genreColumn = `${tablename}_genre`; 

    const query = `SELECT Book_Name, Book_Author, Book_Genre, Price, Book_Script FROM ${tablename} WHERE ${genreColumn} = ?`;

    db.query(query, [genre], (err, results) => {
        if (err) {
            console.error(`Error fetching ${tablename} suggestions for ${genre}:`, err);
            res.status(500).json({ error: `Error fetching ${tablename} suggestions for ${genre}` });
            return;
        }

        const mergedResults = results.map(result => {
            const matchingSuggestion = suggestionsData[tablename][genre].find(suggestion => suggestion.title === result['Book_Name']);

            if (matchingSuggestion) {
                return {
                    ...result,
                    image: matchingSuggestion.image
                };
            }
            return result;
        });

        res.json(mergedResults);
    });
});

module.exports = router;
