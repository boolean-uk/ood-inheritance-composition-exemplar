class Author {
  constructor(name, publisherPhoneNumber) {
    this.name = name
    this.publisherPhoneNumber = publisherPhoneNumber
  }

  getName() {
    return this.name
  }

  getPublisherPhoneNumber() {
    return this.publisherPhoneNumber
  }
}

module.exports = Author
