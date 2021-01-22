/* eslint-disable no-undef */
import config from '../../config/index';

test('Config properties are set', () => {
  expect(config.APP_NAME).toBeDefined();
  expect(config.CWA_DIV).toBeDefined();
  expect(config.VERSION).toBeDefined();
});
