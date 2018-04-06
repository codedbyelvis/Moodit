const index = require('../server/index')

it('should return user', () => {
    expect(index.getUser('spez'))
        .toEqual(true)
})
 