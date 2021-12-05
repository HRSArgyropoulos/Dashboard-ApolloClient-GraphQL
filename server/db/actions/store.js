const { Store } = require('../models/store');

// Add store to DB
const addStore = async (storeData) => {
  const store = new Store(storeData);
  return store.save();
};

// Return all stores
const getStores = async () => {
  return Store.find({}, { __v: 0 }).exec();
};

// Return store
const getStoreDetails = async (storeId) => {
  return Store.findOne({ _id: storeId }, { __v: 0 }).exec();
};

module.exports = { addStore, getStores, getStoreDetails };
