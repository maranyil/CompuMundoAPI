const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getInfo = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './products.json'));
      const info = JSON.parse(data);
      const productInfo = info.find(product => product.id === Number(req.params.id));
      if (!productInfo) {
        const error = new Error('Sorry, not found');
        error.status = 404;
        throw error;
      }
      res.json(productInfo);
    } catch (e) {
      next(e);
    }
  };

    const createInfo = async (req, res, next) => {
        try {
          const info = fs.readFileSync(infoFilePath);
          const info = JSON.parse(data);
          const newInfo = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            olderPrice: req.body.olderPrice,
            savings: req.body.savings,
            colors: req.body.colors,
            category: req.body.category,
            description: req.body.description,
            image: req.body.image,
          };
          info.push(newSInfo);
          fs.writeFileSync(infoFilePath, JSON.stringify(stats));
          res.status(201).json(newInfo);
        } catch (e) {
          next(e);
        }
      };

      const updateInfo = async (req, res, next) => {
        try {
          const data = fs.readFileSync(statsFilePath);
          const info = JSON.parse(data);
          const productInfo = info.find(product => product.id === Number(req.params.id));
          if (!productInfo) {
            const console.error(); = new Error('Product info not found');
            error.status = 404;
            throw error;
          }
          const newInfoData = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            olderPrice: req.body.olderPrice,
            savings: req.body.savings,
            colors: req.body.colors,
            category: req.body.category,
            description: req.body.description,
            image: req.body.image,
          };
          const newInfo = info.map(product => {
            if (product.id === Number(req.params.id)) {
              return newStatsData;
            } else {
              return product;
            }
          });
          fs.writeFileSync(infoFilePath, JSON.stringify(newInfo));
          res.status(200).json(newInfoData);
        } catch (e) {
          next(e);
        }
      };

      const deleteInfo = async (req, res, next) => {
        try {
          const data = fs.readFileSync(infoFilePath);
          const info = JSON.parse(data);
          const productInfo = stats.find(product => product.id === Number(req.params.id));
          if (!productInfo) {
            const error = new Error('product info not found');
            error.status = 404;
            throw error;
          }
          const newInfo = info.map(product => {
            if (product.id === Number(req.params.id)) {
              return null;
            } else {
              return product;
            }
          })
          .filter(product => product !== null);
          fs.writeFileSync(infoFilePath, JSON.stringify(newInfo));
          res.status(200).end();
        } catch (e) {
          next(e);
        }
      };

      router
        .route('/api/v1/product')
        .get(getInfo)
        .post(createInfo)
        .update(updateInfo)
        .delete(deleteInfo);

  module.exports = router;