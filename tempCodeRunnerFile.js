/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Store');

// Create a new index in the collection.
\
    {
      /*
       * Keys
       *
       * Normal index
       * fieldA:  1, // ascending
       * fieldB: -1  // descending
       *
       * Wildcard index
       * '$**': 1, // wildcard index on all fields and subfields in a document
       * 'path.to.field.$**': 1 // wildcard index on a specific field and its subpaths
       *
       * Text index
       * fieldA: 'text',
       * fieldB: 'text'
       *
       * Geospatial Index
       * locationField: '2dsphere'
       *
       * Hashed Index
       * fieldA: 'hashed'
       */
    }, {
      /*
       * Options (https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#options-for-all-index-types)
       *
       * background: true, // ignored in 4.2+
       * unique: false,
       * name: 'some name',
       * partialFilterExpression: {},
       * sparse: false,
       * expireAfterSeconds: TTL,
       * collation: {},
       * wildcardProjection: {},
       */
    }

  db.getCollection(collection).insertmany([
    {
        name:'dompet',
        count:'10',
        price:'10.000'.
    },
    {
        name:'buku',
        count:'30',
        price:'5.000'.
    }
  ])
