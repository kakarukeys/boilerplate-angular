basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/jquery/**/*.js',
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = false;

singleRun = true;

browsers = ['Chrome'];

//reporters = ['junit'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
