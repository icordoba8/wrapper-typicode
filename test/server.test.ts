import request from 'supertest'
import server from '../src/server'
afterEach(() => {
  server.close();
});

describe('GET /', function() {
  it('Reponse inicio api', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
});