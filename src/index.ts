import { User } from './models/User';

const user = new User({ name: 'hania', age: 30 });

// user.set({ name: 'john snow', age: 50 });
// user.save();

user.events.on('change', () => {
  console.log('change!');
});
user.events.trigger('change');
