import request from 'supertest'
import server from '../src/server'
afterEach(() => {
  server.close();
});

describe('GET /users', function() {
    it('Ruta no existe', function (done) {
        request(server)
            .get('/users')
            .expect(404)
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (err) throw err;
                expect(res.body).toEqual({});
            done();
        });
    });
    it('Ruta existe y retorna array de usuarios', function (done) {
        request(server)
            .get('/users')
            .expect(200)
            .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                expect(res.body.length).not.toEqual(0);
            done();
        });
    });
});