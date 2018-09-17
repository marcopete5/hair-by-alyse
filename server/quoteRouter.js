const express = require('express')
const quoteRouter = express.Router()
const Quote = require('./models/quote')

quoteRouter.route('/')
    .get((req, res) => {
        Quote.find((err, quote) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({
                msg: 'success',
                quote
            });
        });        
    })
    .post((req,res) => {
        const newQuote = new Quote(req.body);
        newQuote.save(err => {
           if (err) return res.status(500).send(err);
           return res.status(200).send({
               msg: 'Success',
               newQuote
           });
        });
    })

quoteRouter.route('/:id')
    .get((req, res) => {
        Quote.findById(req.params.id, (err, quote) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(quote)
        });
    })
    .put((req,res) => {
        Quote.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, quote) => {
                if (err) return res.status(500).send(err);
                return res.send(quote);
            }
        )
    })
    .delete((req, res) => {
        Quote.findByIdAndRemove(req.params.id, (err, quote) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Todo successfully deleted",
                id: quote._id
            };
            return res.status(200).send(response);
        });
    })

module.exports = quoteRouter