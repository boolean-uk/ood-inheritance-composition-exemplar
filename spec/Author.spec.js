const Author = require('../src/Author.js')

describe("Author", () => {
  let author
  beforeEach(() => {
    author = new Author('Dan Brown', 123456789)
  })

  describe('#constructor', () => {
    it('has a name', () => {
      expect(author.name).toEqual('Dan Brown')
    })

    it('has a publisher phone number', () => {
      expect(author.publisherPhoneNumber).toEqual(123456789)
    })
  })

  describe('#getName', () => {
    it('gets the authors name', () => {
      expect(author.getName()).toEqual('Dan Brown')
    })
  })

  describe('#getPublisherPhoneNumber', () => {
    it('gets the publisher phone number', () => {
      expect(author.getPublisherPhoneNumber()).toEqual(123456789)
    })
  })
})