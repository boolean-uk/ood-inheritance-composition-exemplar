class CatalogueItem {
  constructor(title, author) {
    this.title = title
    this.author = author
    this.onLoan = false
  }

  isOnLoan() {
    return this.onLoan
  }

  checkIn() {
    if (!this.isOnLoan()) {
      throw new Error('item is not currently on loan')
    }

    this.onLoan = false
  }

  checkOut() {
    if (this.isOnLoan()) {
      throw new Error('item is currently on loan')
    }

    this.onLoan = true
  }

  getAuthor() {
    return this.author.getName()
  }

  getPublisherPhoneNumber() {
    return this.author.getPublisherPhoneNumber()
  }
}

module.exports = CatalogueItem
