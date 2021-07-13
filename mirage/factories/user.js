import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  username: faker.internet.userName,
});
