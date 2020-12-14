let path = require('path')
let copydir = require('copy-dir')

copydir(
  path.join(__dirname, '../src/views'),
  path.join(__dirname, '../dist/views'),
  {
    mode: true, // keep file mode
  },
  (err) => {
    if (err) throw err
    console.log('done')
  }
)

copydir(
  path.join(__dirname, '../src/public'),
  path.join(__dirname, '../dist/public'),
  {
    mode: true, // keep file mode
  },
  (err) => {
    if (err) throw err
    console.log('done')
  }
)
