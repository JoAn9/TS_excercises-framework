import { User } from './models/User';

const user = new User({ name: 'jan snieg', age: 99 });

user.on('click', () => console.log('click no.1'));
user.on('abrakadabra', () => console.log('abrakadabra'));
user.on('click', () => console.log('click no.2'));

user.trigger('click');
user.trigger('abrakadabra');
