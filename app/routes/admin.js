import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewBook() {
      var params = {
        author: this.get('owner'),
        title: this.get('title'),
        summary: this.get('summary'),
        image: this.get('image') ? this.get('image') : ""
      };
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    }
  }
});
