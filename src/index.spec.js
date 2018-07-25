import foo from './'

describe('foo', function() {
  it('return bar', function(done) {
    expect(foo('bar')).toEqual('bar')
    done()
  })
})
