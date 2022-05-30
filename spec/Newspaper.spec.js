const Newspaper = require('../src/Newspaper.js')
const Author = require('../src/Author.js')

describe("Newspaper", () => {
  let newspaper
  beforeEach(() => {
    newspaper = new Newspaper('My Lovely Newspaper', new Author(null, 123456789))
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(newspaper.title).toEqual('My Lovely Newspaper')
    })

    it('is not on loan', () => {
      expect(newspaper.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('raises an error ', () => {
      expect(() => newspaper.checkOut()).toThrowError('newspapers are not available for loan')
    })
  })

  describe('#checkIn', () => {
    it ('raises an error ', () => {
      expect(() => newspaper.checkIn()).toThrowError('newspapers are not available for loan')
    })
  })

  describe('#getAuthor', () => {
    it ('raises an error ', () => {
      expect(() => newspaper.getAuthor()).toThrowError('newspapers do not have individual authors')
    })
  })

  describe('#getPublisherPhoneNumber', () => {
    it('gets the publisher phone number', () => {
      expect(newspaper.getPublisherPhoneNumber()).toEqual(123456789)
    })
  })
})
