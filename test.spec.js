const addContext = require('mochawesome/addContext');
 
describe('test suite', function () {
  it('should add context', function () {
    // context can be a simple string
    addContext(this, 'simple string');
 
    // context can be a url and the report will create a link
    addContext(this, 'http://www.url.com/pathname');
 
    // context can be an image url and the report will show it inline
    addContext(this, 'https://2.bp.blogspot.com/-lfZbihR_Rhw/WPeA90J_x-I/AAAAAAAAJS0/AUdgZLk4SE8EaQs2EF-Q1ldbn3xI6MdCwCLcB/s1600/66f96e7861651b13dc80862108626460_great-job-clip-art-clipart-free-clip-art-great-job_313-190.jpeg');
 
    // context can be an object with title and value properties
    addContext(this, {
      title: 'expected output',
      value: {
        a: 1,
        b: '2',
        c: 'd'
      }
    });
  })
});